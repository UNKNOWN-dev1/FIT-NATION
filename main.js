const HomePage = document.getElementById('HomePage');
const WorkoutPage = document.getElementById('WorkoutPage');
const Workoutbtn = document.getElementById('Workout-btn');
const Trackbtn = document.getElementById('Track-btn');
const BegginerBtn = document.getElementById('BegginerBtn');
const IntermediateBtn = document.getElementById('IntermediateBtn');
const ExpertBtn = document.getElementById('ExpertBtn');
const Backbtn = document.getElementById('Backbtn');
const BegginerPage = document.getElementById('BegginerPage');
const IntermediatePage = document.getElementById('IntermediatePage');
const ExpertPage = document.getElementById('ExpertPage');
const Backbtn2 = document.getElementById('Backbtn2');
const Backbtn3 = document.getElementById('Backbtn3');
const Backbtn4 = document.getElementById('Backbtn4');
const Tipsbtn = document.getElementById('Tipsbtn');
const Tipspage = document.getElementById('Tipspage');
const Backgoal = document.getElementById('Backgoal');
const Goalbtn = document.getElementById('Goalbtn');
const Goalpage = document.getElementById('Goalpage')


Workoutbtn.addEventListener('click', function() {
  HomePage.style.display = 'none';
  WorkoutPage.style.display = 'block';
});

Backbtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  HomePage.style.display = 'block';
});

BegginerBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
   BegginerPage.style.display = 'block';
});

IntermediateBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  IntermediatePage.style.display = 'block';
});

ExpertBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  ExpertPage.style.display = 'block';
});

Backbtn2.addEventListener('click', function() {
  BegginerPage.style.display = 'none';
  WorkoutPage.style.display = 'block';
});

Backbtn3.addEventListener('click', function() {
  IntermediatePage.style.display = 'none';
  WorkoutPage.style.display = 'block';
});

Backbtn4.addEventListener('click', function() {
  ExpertPage.style.display = 'none';
  WorkoutPage.style.display = 'block';
});

Tipsbtn.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Tipspage.style.display = 'block';
  Tipspage.style.display = 'block';
  
  document.getElementById('tipstricks').style.display = 'block';
  Backtips.style.display = 'block';
});

Backtips.addEventListener('click', function() {
  Tipspage.style.display = 'none';
  HomePage.style.display = 'block';
});

Goalbtn.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Goalpage.style.display = 'block';
  Goalpage.style.display = 'block';
  
  Backgoal.style.display = 'block';
});

Backgoal.addEventListener('click', function() {
  Goalpage.style.display = 'none';
  HomePage.style.display = 'block';
});

const taskInput = document.getElementById("TaskList");
const addButton = document.getElementById("AddTask");
const taskContainer = document.getElementById("TextList");

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task container
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // Task text
  const taskDescription = document.createElement("span");
  taskDescription.innerText = taskText;
  taskDescription.classList.add("task-text");

  // Done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-btn");
  doneButton.addEventListener("click", () => {
    // Toggle strikethrough on the task text
    taskDescription.classList.toggle("completed");
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    taskContainer.removeChild(taskItem);
  });

  // Append elements to task container
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(doneButton);
  taskItem.appendChild(deleteButton);

  // Append task to the bottom of the task list
  taskContainer.appendChild(taskItem);

  // Clear input field
  taskInput.value = "";
}

// Add task on button click
addButton.addEventListener("click", addTask);

// Add task on pressing Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const Basiclink = document.getElementById('Basiclink');
const Aboutlink = document.getElementById('Aboutlink');
const Back5 = document.getElementById('Back5');
const Back6 = document.getElementById('Back6');
const Basic = document.getElementById('Basic');
const About = document.getElementById('About');


Basiclink.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Basic.style.display = 'block';
  Basic.style.display = 'block';

  Back5.style.display = 'block';
});

Back5.addEventListener('click', function() {
  Basic.style.display = 'none';
  HomePage.style.display = 'block';
});

Aboutlink.addEventListener('click', function() {
  HomePage.style.display = 'none';
  About.style.display = 'block';
  About.style.display = 'block';

  Back6.style.display = 'block';
});

Back6.addEventListener('click', function() {
  About.style.display = 'none';
  HomePage.style.display = 'block';
});

