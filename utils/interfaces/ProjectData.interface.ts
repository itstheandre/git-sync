export interface IProjectData {
  [key: string]: InternalProjectData;
}

export type InternalProjectData = { path: string; origin: string };
