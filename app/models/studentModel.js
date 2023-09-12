// models/studentModel.js

const db = require('mysql');

const connection = db.createConnection({
  host: 'students.cfuihha6en6s.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Asdfg12345$%',
  database: 'students'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

exports.getStudents = (callback) => {
  connection.query('SELECT * FROM students', callback);
};

exports.addStudent = (student, callback) => {
  connection.query('INSERT INTO students SET ?', student, callback);
};

// exports.updateStudent = (studentId, student, callback) => {
//   connection.query('UPDATE students SET ? WHERE id = ?', [student, studentId], callback);
// };


exports.updateStudent = (studentId, student, callback) => {
    const { name, email, mobile, address } = student;
  
    // Build the update object dynamically
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (mobile) updateData.mobile = mobile;
    if (address) updateData.address = address;
  
    connection.query('UPDATE students SET ? WHERE id = ?', [updateData, studentId], callback);
  };
  