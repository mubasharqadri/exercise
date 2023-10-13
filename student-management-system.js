"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
import { Student } from "./student.js";
var students = [];
function addStudent(student) {
    students.push(student);
}
function generateStudentID() {
    var uniqueID = Math.floor(Math.random() * 100000);
    return uniqueID.toString();
}
function enrollStudent(student, course) {
    student.coursesEnrolled.push(course);
}
function viewStudentBalance(student) {
    return student.balance;
}
function payStudentTuitionFees(student, amount) {
    student.balance -= amount;
}
function showStudentStatus(student) {
    console.log("Student ID: ".concat(student.id));
    console.log("Student Name: ".concat(student.name));
    console.log("Courses Enrolled: ".concat(student.coursesEnrolled));
    console.log("Balance: ".concat(student.balance));
}
// Example usage:
var newStudent = new Student(generateStudentID(), "John Doe", [], 0);
addStudent(newStudent);
enrollStudent(newStudent, "Math 101");
enrollStudent(newStudent, "English 101");
payStudentTuitionFees(newStudent, 100);
showStudentStatus(newStudent);
