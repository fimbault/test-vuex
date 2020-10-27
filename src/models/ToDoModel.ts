export default class ToDoModel {
    Name: string;
    IsCompleted: boolean;
  
    constructor(input: string) {
      this.Name = input;
      this.IsCompleted = false;
    }
}