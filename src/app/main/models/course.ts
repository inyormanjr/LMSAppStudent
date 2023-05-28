export interface Course {
  courseId: string;
  courseCode: string;
  course: string;
  courseStatus: string;
  instructor: Instructor;
  discussionCount: number;
  assessmentCount: number;
}

export interface Instructor {
  name: string;
  email: string;
}
