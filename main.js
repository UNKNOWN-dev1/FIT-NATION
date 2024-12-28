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

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    createTask(task.text, task.completed);
  });
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll(".task-item");
  taskItems.forEach((item) => {
    const taskText = item.querySelector(".task-text").innerText;
    const completed = item.querySelector(".task-text").classList.contains("completed");
    tasks.push({ text: taskText, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create a task and add it to the DOM
function createTask(taskText, isCompleted = false) {
  // Create task container
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  // Task text
  const taskDescription = document.createElement("span");
  taskDescription.innerText = taskText;
  taskDescription.classList.add("task-text");
  if (isCompleted) taskDescription.classList.add("completed");

  // Done button
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-btn");
  doneButton.addEventListener("click", () => {
    taskDescription.classList.toggle("completed");
    saveTasks();
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    taskContainer.removeChild(taskItem);
    saveTasks();
  });

  // Append elements to task container
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(doneButton);
  taskItem.appendChild(deleteButton);

  // Append task to the bottom of the task list
  taskContainer.appendChild(taskItem);
}

// Add Task Function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskText);
  saveTasks();
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

// Load tasks when the app starts
loadTasks();

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

const beforeAfterPage = document.getElementById("BeforeAfterPage");
const beforeAfterButton = document.getElementById("beforeAfterButton");
const backToHomeButton = document.getElementById("backToHome");

const beforeImageUpload = document.getElementById("beforeImageUpload");
const afterImageUpload = document.getElementById("afterImageUpload");
const beforeImageContainer = document.getElementById("beforeImageContainer");
const afterImageContainer = document.getElementById("afterImageContainer");
const deleteBeforeImageButton = document.getElementById("deleteBeforeImage");
const deleteAfterImageButton = document.getElementById("deleteAfterImage");

// Show the Before & After page
beforeAfterButton.addEventListener("click", () => {
  HomePage.style.display = "none";
  beforeAfterPage.style.display = "block";
});

// Go back to the Home page
backToHomeButton.addEventListener("click", () => {
  beforeAfterPage.style.display = "none";
  HomePage.style.display = "block";
});

// Save images to localStorage
function saveImage(key, image) {
  localStorage.setItem(key, image);
}

// Delete image from localStorage and reset container
function deleteImage(key, container, deleteButton) {
  localStorage.removeItem(key);
  container.style.backgroundImage = "none";
  container.innerHTML = "<span>+</span>";
  deleteButton.style.display = "none";
}

// Load images from localStorage
function loadImages() {
  const beforeImage = localStorage.getItem("beforeImage");
  const afterImage = localStorage.getItem("afterImage");

  if (beforeImage) {
    beforeImageContainer.style.backgroundImage = `url(${beforeImage})`;
    beforeImageContainer.innerHTML = "";
    deleteBeforeImageButton.style.display = "inline-block";
  }

  if (afterImage) {
    afterImageContainer.style.backgroundImage = `url(${afterImage})`;
    afterImageContainer.innerHTML = "";
    deleteAfterImageButton.style.display = "inline-block";
  }
}

// Handle image upload
function handleImageUpload(event, container, key, deleteButton) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      const imageData = reader.result;
      container.style.backgroundImage = `url(${imageData})`;
      container.innerHTML = "";
      saveImage(key, imageData);
      deleteButton.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  }
}

// Event listeners for file inputs
beforeImageUpload.addEventListener("change", (event) => {
  handleImageUpload(event, beforeImageContainer, "beforeImage", deleteBeforeImageButton);
});

afterImageUpload.addEventListener("change", (event) => {
  handleImageUpload(event, afterImageContainer, "afterImage", deleteAfterImageButton);
});

// Event listeners for delete buttons
deleteBeforeImageButton.addEventListener("click", () => {
  deleteImage("beforeImage", beforeImageContainer, deleteBeforeImageButton);
});

deleteAfterImageButton.addEventListener("click", () => {
  deleteImage("afterImage", afterImageContainer, deleteAfterImageButton);
});

// Load images on page load
loadImages();

const dietBtn = document.getElementById("dietBtn");
const dietPage = document.getElementById("dietPage");
const confirmBtn = document.getElementById("confirmBtn");
const saveBtn = document.getElementById("saveBtn");
const dietDetails = document.getElementById("dietDetails");
const dietPlan = document.getElementById("dietPlan");
const backToHomeBtn = document.getElementById("backToHomeBtn");

const weightInput = document.getElementById("weightInput");
const ageInput = document.getElementById("ageInput");
const heightInput = document.getElementById("heightInput");

// Navigate to diet page
dietBtn.addEventListener("click", () => {
  HomePage.style.display = "none";
  dietPage.style.display = "block";
  backToHomeBtn.style.display = 'block';

  // Load saved values if available
  const savedWeight = localStorage.getItem("weight");
  const savedAge = localStorage.getItem("age");
  const savedHeight = localStorage.getItem("height");

  if (savedWeight) weightInput.value = savedWeight;
  if (savedAge) ageInput.value = savedAge;
  if (savedHeight) heightInput.value = savedHeight;
});

// Generate diet plan
confirmBtn.addEventListener("click", () => {
  const weight = parseInt(weightInput.value);
  const age = parseInt(ageInput.value);
  const height = parseInt(heightInput.value);

  if (isNaN(weight) || isNaN(age) || isNaN(height)) {
    alert("Please fill in all fields!");
    return;
  }

  // Example diet plan logic
  let plan;
  if (weight < 50) {
    plan = "High-protein diet with plenty of calories.";
  } else if (weight < 70) {
    plan = "Balanced diet with a mix of protein, carbs, and healthy fats.";
  } else {
    plan = "Low-carb diet focused on vegetables and lean proteins.";
  }

  dietDetails.innerText = `Weight: ${weight} kg\nAge: ${age} years\nHeight: ${height} cm\nPlan: ${plan}`;
  dietPlan.style.display = "block";
});

// Save user input
saveBtn.addEventListener("click", () => {
  const weight = weightInput.value;
  const age = ageInput.value;
  const height = heightInput.value;

  if (!weight || !age || !height) {
    alert("Please fill in all fields before saving!");
    return;
  }

  localStorage.setItem("weight", weight);
  localStorage.setItem("age", age);
  localStorage.setItem("height", height);
  alert("Details saved!");
});

// Navigate back to homepage
backToHomeBtn.addEventListener("click", () => {
  dietPage.style.display = "none";
  HomePage.style.display = "block";
});

const trackBtn = document.getElementById("Track-btn");
const trackPage = document.getElementById("trackPage");
const homepage = document.getElementById("HomePage");
const activityType = document.getElementById("activityType");
const startTrackingBtn = document.getElementById("startTrackingBtn");
const stopTrackingBtn = document.getElementById("stopTrackingBtn");
const trackingInfo = document.getElementById("trackingInfo");
const activityDetails = document.getElementById("activityDetails");
const distanceCovered = document.getElementById("distanceCovered");
const distanceValue = document.getElementById("distanceValue");
const timerValue = document.getElementById("timerValue");
const backToHomeTrackBtn = document.getElementById("backToHomeTrackBtn");

let timerInterval;
let timerSeconds = 0;
let trackingActivity = null;
let startPosition = null;
let distance = 0;

// Navigate to track page
trackBtn.addEventListener("click", () => {
  homepage.style.display = "none";
  trackPage.style.display = "block";
});

// Start tracking
startTrackingBtn.addEventListener("click", () => {
  const selectedActivity = activityType.value;

  if (selectedActivity === "walk" || selectedActivity === "run") {
    // Use Geolocation API for outdoor activities
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          startPosition = position.coords;
          startTimer();
          startTrackingBtn.style.display = "none";
          stopTrackingBtn.style.display = "block";
          trackingInfo.style.display = "block";
          distanceCovered.style.display = "block";
          activityDetails.innerText = `Activity: ${selectedActivity}`;
        },
        (error) => {
          alert("Geolocation not available or permission denied.");
        }
      );
    } else {
      alert("Geolocation not supported by this browser.");
    }
  } else if (selectedActivity === "workout") {
    // For workouts, track time only
    startTimer();
    startTrackingBtn.style.display = "none";
    stopTrackingBtn.style.display = "block";
    trackingInfo.style.display = "block";
    activityDetails.innerText = `Activity: Workout`;
    distanceCovered.style.display = "none";
  }
});

// Stop tracking
stopTrackingBtn.addEventListener("click", () => {
  clearInterval(timerInterval);

  if (trackingActivity === "walk" || trackingActivity === "run") {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = position.coords;
      distance += calculateDistance(
        startPosition.latitude,
        startPosition.longitude,
        currentPosition.latitude,
        currentPosition.longitude
      );
      distanceValue.innerText = distance.toFixed(2);
    });
  }

  startTrackingBtn.style.display = "block";
  stopTrackingBtn.style.display = "none";
  alert("Tracking stopped!");
});

// Back to homepage
backToHomeTrackBtn.addEventListener("click", () => {
  trackPage.style.display = "none";
  homepage.style.display = "block";
  resetTracking();
});

// Timer function
function startTimer() {
  timerSeconds = 0;
  timerInterval = setInterval(() => {
    timerSeconds++;
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerValue.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }, 1000);
}

// Reset tracking data
function resetTracking() {
  clearInterval(timerInterval);
  timerValue.innerText = "0:00";
  distanceValue.innerText = "0";
  trackingInfo.style.display = "none";
  distance = 0;
  startPosition = null;
}

// Calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Radius of the Earth in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}
