import { Instructor } from './course';

export interface CourseDetails {
  courseId: string;
  courseCode: string;
  course: string;
  courseStatus: string;
  instructor: Instructor;
  
}


export interface Discussion {
  _id: any;
  moduleId: any;
  title: any;
  discussion: any;
}
