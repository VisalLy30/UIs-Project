export interface TodoType {
  id:any;
  title: string;
  completed: boolean;
}

export interface FormPropsType {
  addTodo: (arg) => void;
  applyFilter: (arg) => void;
}

export interface FilterPropsType {
  applyFilter: (arg) => void;
}

export interface FormInputPropsType {
  input: string;
  setInput: (arg) => void;
}

export interface TitlePropsType {
  value: string;
  style?: {};
}