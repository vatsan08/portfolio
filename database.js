const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // 1. Users Table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

  // 2. Projects Table
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      index_num TEXT,
      badge TEXT,
      title TEXT,
      description TEXT,
      tech TEXT
    )
  `);

  // 3. Certifications Table
  db.run(`
    CREATE TABLE IF NOT EXISTS certifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      issuer TEXT,
      name TEXT
    )
  `);

  // 4. Contact Messages Table
  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Seed default admin user if not exists
  db.get('SELECT * FROM users WHERE username = ?', ['admin'], (err, row) => {
    if (err) console.error(err);
    if (!row) {
      const hashedPassword = bcrypt.hashSync('admin123', 10);
      db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword], (insertErr) => {
        if (insertErr) console.error('Error seeding admin user:', insertErr);
        else console.log('Database: Admin user seeded successfully.');
      });
    }
  });

  // Seed default projects if table is empty
  db.get('SELECT COUNT(*) as count FROM projects', (err, row) => {
    if (err) console.error(err);
    if (row && row.count === 0) {
      const projects = [
        {
          index_num: '01',
          badge: 'Hackathon Finalist',
          title: 'CivicSense — Civic Issue Management',
          description: 'Smart civic-issue platform enabling citizens to report and track city maintenance problems through a real-time interactive dashboard. Delivered working solution with scheduling and data visualization under Smart India Hackathon 2025 conditions.',
          tech: 'Real-Time Tracking,Dashboard,Data Visualization,Agile Team'
        },
        {
          index_num: '02',
          badge: 'Published · GJEIIR 2026',
          title: 'AI Skin Disease Diagnosis via CNNs',
          description: 'Deep learning framework using ResNet50 and DenseNet201 for automated medical image classification. Flask web app with real-time prediction, confidence scores, Grad-CAM explainability, confusion matrix analysis, and secure user authentication.',
          tech: 'Python,ResNet50,DenseNet201,Flask,CNNs,Grad-CAM'
        },
        {
          index_num: '03',
          badge: '',
          title: 'Student Performance Tracker',
          description: 'Full-stack academic management system with CRUD operations, subject and grade modules, database integration, and a responsive frontend. Spring Boot backend with structured architecture.',
          tech: 'Spring Boot,MySQL,JavaScript,HTML / CSS'
        },
        {
          index_num: '04',
          badge: '',
          title: 'E-Commerce Web Application',
          description: 'Feature-rich e-commerce platform with product management, dynamic image upload and serving, AJAX-based form handling, and a fully responsive frontend. Spring Boot backend with MySQL.',
          tech: 'Spring Boot,MySQL,AJAX,JavaScript,HTML / CSS'
        }
      ];

      const stmt = db.prepare('INSERT INTO projects (index_num, badge, title, description, tech) VALUES (?, ?, ?, ?, ?)');
      projects.forEach(p => {
        stmt.run(p.index_num, p.badge, p.title, p.description, p.tech);
      });
      stmt.finalize();
      console.log('Database: Projects seeded successfully.');
    }
  });

  // Seed default certifications if table is empty
  db.get('SELECT COUNT(*) as count FROM certifications', (err, row) => {
    if (err) console.error(err);
    if (row && row.count === 0) {
      const certs = [
        { issuer: 'University of Michigan', name: 'Programming for Everybody — Python' },
        { issuer: 'Infosys Springboard', name: 'ReactJS' },
        { issuer: 'Infosys Springboard', name: 'Explore Machine Learning using Python' },
        { issuer: 'University of Colorado', name: 'Everyday Excel (I, II & III)' },
        { issuer: 'IBM SkillsBuild', name: 'From Learner to Builder: AI Agent Architect' },
        { issuer: 'UCI Division of Continuing Education', name: 'Effective Problem-Solving and Decision-Making' },
        { issuer: 'Deloitte Australia · Forage · Jan 2026', name: 'Data Analytics Job Simulation' },
        { issuer: 'Tata Group · Forage · Jan 2026', name: 'Data Analytics Job Simulation' }
      ];

      const stmt = db.prepare('INSERT INTO certifications (issuer, name) VALUES (?, ?)');
      certs.forEach(c => {
        stmt.run(c.issuer, c.name);
      });
      stmt.finalize();
      console.log('Database: Certifications seeded successfully.');
    }
  });
});

module.exports = db;
