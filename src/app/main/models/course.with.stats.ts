export interface CourseWithStats {
  courseId: string;
  courseCode: string;
  course: string;
  courseStatus: string;
  instructor: {
    instructorId: string;
    name: string;
    email: string;
  };
  discussionCount: number;
  assessmentCount: number;
}
