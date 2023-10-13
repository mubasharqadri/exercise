import { Student } from "./student";

const students: Student[] = [];

function addStudent(student: Student) {
  students.push(student);
}

function generateStudentID(): string {
  const uniqueID = Math.floor(Math.random() * 100000);
  return uniqueID.toString();
}

function enrollStudent(student: Student, course: string) {
  student.coursesEnrolled.push(course);
}

function viewStudentBalance(student: Student) {
  return student.balance;
}

function payStudentTuitionFees(student: Student, amount: number) {
  student.balance -= amount;
}

function showStudentStatus(student: Student) {
  console.log(`Student ID: ${student.id}`);
  console.log(`Student Name: ${student.name}`);
  console.log(`Courses Enrolled: ${student.coursesEnrolled}`);
  console.log(`Balance: ${student.balance}`);
}

// Example usage:

const newStudent = new Student(generateStudentID(), "John Doe", [], 0);
addStudent(newStudent);

enrollStudent(newStudent, "Math 101");
enrollStudent(newStudent, "English 101");

payStudentTuitionFees(newStudent, 100);

showStudentStatus(newStudent);