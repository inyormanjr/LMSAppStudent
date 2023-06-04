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
  page: number;
  exercise: Exercise;
}

export interface Exercise {
  _id: string;
  discussionId: string;
  exerciseDetails: string;
  exerciseName: string;
  instructions: string;
  points: string;
  exercise_status: string;
  studentAnswer?: ExerciseAnswer;
}

export interface ExerciseAnswer {
  _id: any;
  exercise: any;
  answer: string;
  points: number;
  student: any;
  createdAt: Date;
  updatedAt: Date;
}
