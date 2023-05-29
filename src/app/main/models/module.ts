import { Assessment, AssessmentListDTO } from './assessment';
import { Discussion, Exercise } from './course.details';

export interface Module {
  moduleId: string;
  module: string;
  discussions: Discussion[];
  exercises: Exercise[];
  assessments: AssessmentListDTO[];
}
