function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    state: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "} been completed`);
    },
    completed: function () {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the  💩  out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.state();
task1.completed();
task1.state();
