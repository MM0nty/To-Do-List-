// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    state: function () {
      console.log(`${task.title} has${task.complete ? " " : " not "} been completed`);
    },
    complete: function () {
      true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the  💩  out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.state();
task1.complete();
task1.state();


/* ORIGINAL CODE (MESSY/INEFFICIENT

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
console.log(tasks);

*/
