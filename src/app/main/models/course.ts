export interface Course {
  courseId: string;
  courseCode: string;
  course: string;
  courseStatus: string;
  instructor: Instructor;
}

export interface Instructor {
  name: string;
  email: string;
}
