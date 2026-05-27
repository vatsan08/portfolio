const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Sessions Configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'srivatsan-portfolio-secret-key-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Admin Authorization Middleware
const requireAuth = (req, res, next) => {
  if (req.session && req.session.isAdmin) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized. Admin login required.' });
  }
};

/* -------------------------------------------------------------
   1. Public API Endpoints
   ------------------------------------------------------------- */

// Get all projects
app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects ORDER BY index_num ASC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    // Convert tech string back to array for front-end convenience
    const projects = rows.map(r => ({
      ...r,
      tech: r.tech ? r.tech.split(',') : []
    }));
    res.json(projects);
  });
});

// Get all certifications
app.get('/api/certifications', (req, res) => {
  db.all('SELECT * FROM certifications ORDER BY id ASC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Submit a contact form message
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const stmt = db.prepare('INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, messageId: this.lastID });
  });
  stmt.finalize();
});

/* -------------------------------------------------------------
   2. Authentication APIs
   ------------------------------------------------------------- */

// Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.isAdmin = true;
    req.session.username = user.username;
    res.json({ success: true, username: user.username });
  });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out' });
    }
    res.json({ success: true });
  });
});

// Check Auth Status
app.get('/api/auth/status', (req, res) => {
  if (req.session && req.session.isAdmin) {
    res.json({ loggedIn: true, username: req.session.username });
  } else {
    res.json({ loggedIn: false });
  }
});

/* -------------------------------------------------------------
   3. Protected Admin API Endpoints
   ------------------------------------------------------------- */

// Get all contact messages
app.get('/api/admin/contacts', requireAuth, (req, res) => {
  db.all('SELECT * FROM contact_messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Create project
app.post('/api/admin/projects', requireAuth, (req, res) => {
  const { index_num, badge, title, description, tech } = req.body;
  if (!index_num || !title || !description) {
    return res.status(400).json({ error: 'index_num, title, and description are required.' });
  }

  const techStr = Array.isArray(tech) ? tech.join(',') : (tech || '');
  const stmt = db.prepare('INSERT INTO projects (index_num, badge, title, description, tech) VALUES (?, ?, ?, ?, ?)');
  
  stmt.run(index_num, badge || '', title, description, techStr, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, projectId: this.lastID });
  });
  stmt.finalize();
});

// Update project
app.put('/api/admin/projects/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const { index_num, badge, title, description, tech } = req.body;

  if (!index_num || !title || !description) {
    return res.status(400).json({ error: 'index_num, title, and description are required.' });
  }

  const techStr = Array.isArray(tech) ? tech.join(',') : (tech || '');
  const query = 'UPDATE projects SET index_num = ?, badge = ?, title = ?, description = ?, tech = ? WHERE id = ?';
  
  db.run(query, [index_num, badge || '', title, description, techStr, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ success: true });
  });
});

// Delete project
app.delete('/api/admin/projects/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM projects WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ success: true });
  });
});

// Create certification
app.post('/api/admin/certifications', requireAuth, (req, res) => {
  const { issuer, name } = req.body;
  if (!issuer || !name) {
    return res.status(400).json({ error: 'issuer and name are required.' });
  }

  const stmt = db.prepare('INSERT INTO certifications (issuer, name) VALUES (?, ?)');
  stmt.run(issuer, name, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true, certificationId: this.lastID });
  });
  stmt.finalize();
});

// Update certification
app.put('/api/admin/certifications/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const { issuer, name } = req.body;

  if (!issuer || !name) {
    return res.status(400).json({ error: 'issuer and name are required.' });
  }

  db.run('UPDATE certifications SET issuer = ?, name = ? WHERE id = ?', [issuer, name, id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Certification not found' });
    }
    res.json({ success: true });
  });
});

// Delete certification
app.delete('/api/admin/certifications/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM certifications WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Certification not found' });
    }
    res.json({ success: true });
  });
});

// Handle Fallback (SPAs or routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
