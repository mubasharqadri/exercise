
export interface Student {
  id: string;
  name: string;
  coursesEnrolled: string[];
  balance: number;
}

export class Student {
  constructor(public id: string, public name: string, public coursesEnrolled: string[], public balance: number) {}
}