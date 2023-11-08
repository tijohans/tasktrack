export type TaskType = {
  id: string;
  name: string;
  description?: string;
  imageURI?: string;
  completed: 0 | 1;
};
