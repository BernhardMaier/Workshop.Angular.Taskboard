import { newGuid } from 'ts-guid/dist';

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
    guid: newGuid(),
    title: '',
    text: '',
    isInProgress: false,
    isComplete: false,
    isFavorite: false
  };
}
