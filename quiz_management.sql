create database quiz_management;
DROP DATABASE quiz_management;
CREATE DATABASE quiz_management;
USE quiz_management;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('TEACHER', 'STUDENT', 'ADMIN')
);

CREATE TABLE quizzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    teacher_id INT,
    deadline DATETIME,
    FOREIGN KEY (teacher_id) REFERENCES users(id)
);

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quiz_id INT,
    question_text TEXT,
    question_type ENUM('MCQ', 'SHORT_ANSWER', 'TRUE_FALSE'),
    options TEXT,
    correct_answer TEXT,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);

CREATE TABLE responses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    quiz_id INT,
    question_id INT,
    answer TEXT,
    score INT DEFAULT 0,
    FOREIGN KEY (student_id) REFERENCES users(id),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);