import { Discussion } from './course.details';

export interface ModuleDiscussionResult {
  courseId: string;
  courseName: string;
  moduleId: string;
  moduleName: string;
  discussion: Discussion;
  totalPages: number;
  currentPage: number;
  previousPage: number;
  nextPage: number;
}
