import { Assessment, AssessmentListDTO } from './assessment';
import { Discussion, Exercise } from './course.details';

export interface Module {
  _id: string;
  module: string;
  courseId?: string;
  discussions: Discussion[];
  assessments: AssessmentListDTO[];
}
