export interface IHomeState {
  count: number;
  todos: IToDos[];
}

export interface IToDos {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}
