export interface Task {
  guid?: string;
  title: string;
  text: string;
  isInProgress: boolean;
  isComplete: boolean;
  isFavorite: boolean;
}

export function newTask(): Task {
  return {
    guid: '',
    title: '',
    text: '',
    isInProgress: false,
    isComplete: false,
    isFavorite: false
  }
}
