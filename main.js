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
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  WorkoutPage.style.display = 'block';
});

Backbtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

BegginerBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

   BegginerPage.style.display = 'block';
});

IntermediateBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  IntermediatePage.style.display = 'block';
});

ExpertBtn.addEventListener('click', function() {
  WorkoutPage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

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
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  Tipspage.style.display = 'block';
  Tipspage.style.display = 'block';
  
  document.getElementById('tipstricks').style.display = 'block';
  Backtips.style.display = 'block';
});

Backtips.addEventListener('click', function() {
  Tipspage.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

Goalbtn.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  Goalpage.style.display = 'block';
  Goalpage.style.display = 'block';
  
  Backgoal.style.display = 'block';
});

Backgoal.addEventListener('click', function() {
  Goalpage.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
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
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  Basic.style.display = 'block';
  Basic.style.display = 'block';

  Back5.style.display = 'block';
});

Back5.addEventListener('click', function() {
  Basic.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

Aboutlink.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  About.style.display = 'block';
  About.style.display = 'block';

  Back6.style.display = 'block';
});

Back6.addEventListener('click', function() {
  About.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
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
  Trackbtn.style.display = 'none';
Tipsbtn.style.display = 'none';
Goalbtn.style.display = 'none';
Workoutbtn.style.display = 'none';
  beforeAfterPage.style.display = "block";
});

// Go back to the Home page
backToHomeButton.addEventListener("click", () => {
  beforeAfterPage.style.display = "none";
  HomePage.style.display = "block";
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
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
  Trackbtn.style.display = 'none';
Tipsbtn.style.display = 'none';
Goalbtn.style.display = 'none';
Workoutbtn.style.display = 'none';
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
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

const homePage = document.getElementById("HomePage");
const trackingPage = document.getElementById("trackingPage");
const trackBtn = document.getElementById("Track-btn");
const backToHome = document.getElementById("backToHome2");
const startTrackingBtn = document.getElementById("startTrackingBtn");
const stopTrackingBtn = document.getElementById("stopTrackingBtn");
const trackingInfo = document.getElementById("trackingInfo");
const distanceCovered = document.getElementById("distanceCovered");
const activityDetails = document.getElementById("activityDetails");

let watchId = null;
let totalDistance = 0;
let lastPosition = null;

// Navigate to Tracking Page
trackBtn.addEventListener("click", () => {
  homePage.style.display = "none";
  Trackbtn.style.display = 'none';
Tipsbtn.style.display = 'none';
Goalbtn.style.display = 'none';
Workoutbtn.style.display = 'none';
  trackingPage.style.display = "block";
});

// Navigate back to Home Page
backToHome.addEventListener("click", () => {
  trackingPage.style.display = "none";
  homePage.style.display = "block";
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

// Start Tracking
startTrackingBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Permission granted, start tracking
        startTrackingBtn.style.display = "none";
        stopTrackingBtn.style.display = "inline-block";
        trackingInfo.style.display = "block";

        // Reset distance and start tracking
        totalDistance = 0;
        lastPosition = position.coords;

        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const newCoords = position.coords;
            if (lastPosition) {
              const distance = calculateDistance(
                lastPosition.latitude,
                lastPosition.longitude,
                newCoords.latitude,
                newCoords.longitude
              );
              totalDistance += distance;
              distanceCovered.innerText = `Distance Covered: ${totalDistance.toFixed(2)} m`;
            }
            lastPosition = newCoords;
          },
          (error) => {
            alert("Error getting location: " + error.message);
          },
          { enableHighAccuracy: true }
        );

        const activityType = document.getElementById("activityType").value;
        activityDetails.innerText = `Activity: ${activityType}`;
      },
      (error) => {
        alert("Geolocation not available or permission denied.");
      }
    );
  } else {
    alert("Geolocation not supported by your browser.");
  }
});

// Stop Tracking
// Stop Tracking Functionality
stopTrackingBtn.addEventListener("click", () => {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId); // Stop watching position
    watchId = null; // Clear the watch ID
    alert("Tracking stopped.");
  } else {
    alert("Tracking is not active.");
  }

  // Update UI for stopped state
  startTrackingBtn.style.display = "inline-block";
  stopTrackingBtn.style.display = "none";
});

// Clear Distance Functionality
const clearDistanceBtn = document.getElementById("clearDistanceBtn");
clearDistanceBtn.addEventListener("click", () => {
  totalDistance = 0; // Reset total distance
  distanceCovered.innerText = `Distance Covered: ${totalDistance.toFixed(2)} m`; // Update UI
  lastPosition = null; // Reset last position
  alert("Distance cleared.");
});
// Function to calculate distance between two coordinates
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
  const distance = R * c;

  return distance; // Distance in meters
}
// Show Progress Tracking page
document.getElementById("ProgressTrackingBtn").addEventListener("click", function() {
  document.getElementById("HomePage").style.display = "none";
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';
  document.getElementById("ProgressTrackingPage").style.display = "block";
  loadProgress(); // Load saved progress when opening the page
});

// Show Workout Progression page
document.getElementById("WorkoutProgressionBtn").addEventListener("click", function() {
  document.getElementById("HomePage").style.display = "none";
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';
  document.getElementById("WorkoutProgressionPage").style.display = "block";
  
});

// Go back to HomePage from ProgressTracking
document.getElementById("BackProgressTracking").addEventListener("click", function() {
  document.getElementById("ProgressTrackingPage").style.display = "none";
  document.getElementById("HomePage").style.display = "block";
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

// Go back to HomePage from WorkoutProgression
document.getElementById("BackWorkoutProgression").addEventListener("click", function() {
  document.getElementById("WorkoutProgressionPage").style.display = "none";
  document.getElementById("HomePage").style.display = "block";
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

// Log progress button functionality
document.getElementById("LogProgress").addEventListener("click", function() {
  const exercise = document.getElementById("exercise").value.trim();
  const sets = document.getElementById("sets").value.trim();
  const reps = document.getElementById("reps").value.trim();
  const weight = document.getElementById("weight").value.trim() || "N/A";

  // Ensure all required fields are filled
  if (exercise && sets && reps) {
    // Create a progress item object
    const progressItem = {
      exercise: exercise,
      sets: sets,
      reps: reps,
      weight: weight,
    };

    // Add the progress item to the list
    addToProgressList(progressItem);

    // Clear input fields after logging
    document.getElementById("exercise").value = "";
    document.getElementById("sets").value = "";
    document.getElementById("reps").value = "";
    document.getElementById("weight").value = "";

    // Save the progress list to localStorage
    saveProgressToLocalStorage();
  } else {
    alert("Please fill in all required fields (Exercise, Sets, and Reps).");
  }
});

// Add a progress item to the progress log
function addToProgressList(progress) {
  const progressItem = document.createElement("li");
  progressItem.textContent = `${progress.exercise}: ${progress.sets} sets x ${progress.reps} reps (Weight: ${progress.weight} kg)`;
  document.getElementById("progressLog").appendChild(progressItem);
}

// Save the progress log to localStorage
function saveProgressToLocalStorage() {
  const progressList = [];
  const progressItems = document.getElementById("progressLog").children;
  for (let i = 0; i < progressItems.length; i++) {
    const itemText = progressItems[i].textContent;
    const exercise = itemText.split(":")[0].trim();
    const details = itemText.split(":")[1].trim();
    const [setsReps, weightPart] = details.split("(Weight:");
    const [sets, reps] = setsReps.split("sets x").map((item) => item.trim());
    const weight = weightPart ? weightPart.replace("kg)", "").trim() : "N/A";

    progressList.push({ exercise, sets, reps, weight });
  }
  localStorage.setItem("fitnessProgress", JSON.stringify(progressList));
}

// Load saved progress from localStorage on page load
function loadProgress() {
  const savedProgress = JSON.parse(localStorage.getItem("fitnessProgress"));
  if (savedProgress) {
    savedProgress.forEach((progress) => {
      addToProgressList(progress);
    });
  }
}

// Clear all progress
document.getElementById("clearProgressBtn").addEventListener("click", function() {
  localStorage.removeItem("fitnessProgress");
  document.getElementById("progressLog").innerHTML = ""; // Clear the progress log from the UI
  alert("Progress cleared!");
});

// Back button functionality
document.getElementById("BackProgressTracking").addEventListener("click", function() {
  document.getElementById("ProgressTrackingPage").style.display = "none";
  document.getElementById("homepage").style.display = "block"; // Ensure 'homepage' exists and is hidden initially
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

// Initialize progress on page load
loadProgress();

const Challengepage = document.getElementById('Challengepage');

document.getElementById('Challengebtn').addEventListener('click', function() {
  HomePage.style.display = 'none';
  Trackbtn.style.display = 'none';
Tipsbtn.style.display = 'none';
Goalbtn.style.display = 'none';
Workoutbtn.style.display = 'none';
  Challengepage.style.display = 'block';
});

document.getElementById('Backbtn7').addEventListener('click', function() {
  Challengepage.style.display = 'none';
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
Tipsbtn.style.display = 'block';
Goalbtn.style.display = 'block';
Workoutbtn.style.display = 'block';
});

// Array of challenges with titles, descriptions, images, and time limits
const challenges = [
  {
    title: "50 Push-ups",
    description: "50 PUSH-UPS",
    imgSrc: "push-up.gif",
    time: 120 // 2 minutes
  },
  {
    title: "50 Squats",
    description: "50 SQUATS",
    imgSrc: "bodyweight-squat.gif",
    time: 90 // 1.5 minutes
  },
  {
    title: "Plank for 60 seconds",
    description: "PLANK FOR 60 SECONDS",
    imgSrc: "plank.jpg",
    time: 60 // 1 minute
  },
  {
    title: "30 Burpees",
    description: "30 BURPEES",
    imgSrc: "burpees.gif",
    time: 150 // 2.5 minutes
  },
  {
    title: "30 Diamond Pushups",
    description: "30 DIAMOND PUSH-UPS",
    imgSrc: "diamond-pushup.gif",
    time: 150 // 2.5 minutes
  },
];

// Function to get the current date (used for determining the challenge of the day)
function getCurrentDateString() {
  const today = new Date();
  return today.toDateString(); // Return date in a readable format (e.g., "Sun Dec 30 2024")
}

// Function to get the challenge index for today
function getChallengeIndex() {
  const todayDateString = getCurrentDateString();
  const savedDate = localStorage.getItem('lastChallengeDate');

  // Check if it's a new day
  if (savedDate !== todayDateString) {
    // Save today's date and the challenge index (calculated by hashing the date)
    const challengeIndex = todayDateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % challenges.length;
    localStorage.setItem('lastChallengeDate', todayDateString);
    localStorage.setItem('currentChallengeIndex', challengeIndex);
  }

  return localStorage.getItem('currentChallengeIndex') || 0; // Return stored index or default to 0
}

// Variable to track the current challenge
let currentChallenge = getChallengeIndex();
let timerInterval;

// Set the current challenge
function setChallenge(challengeIndex) {
  const challenge = challenges[challengeIndex];
  document.getElementById('challenges').innerText = challenge.description;
  document.getElementById('challengeImage').src = challenge.imgSrc;
  document.getElementById('challengeImage').alt = challenge.title;
  document.getElementById('Accept').disabled = false;
  document.getElementById('timerContainer').style.display = 'none';
  document.getElementById('completeChallenge').disabled = true;
  document.getElementById('timeLeft').innerText = challenge.time;
}

document.getElementById('Accept').addEventListener('click', () => {
  startChallenge();
});

function startChallenge() {
  const challenge = challenges[currentChallenge];
  // Disable the Accept button and show the timer
  document.getElementById('Accept').disabled = true;
  document.getElementById('timerContainer').style.display = 'block';

  let timeLeft = challenge.time;

  // Start the timer
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timeLeft').innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('completeChallenge').disabled = false;
      alert('Challenge time is up!');
    }
  }, 1000); // 1000ms interval for normal speed
}

document.getElementById('completeChallenge').addEventListener('click', () => {
  alert('Challenge completed! Great job!');
  // Move to the next challenge (store next day's challenge index)
  currentChallenge = (currentChallenge + 1) % challenges.length;
  localStorage.setItem('currentChallengeIndex', currentChallenge);
  setChallenge(currentChallenge);
});

// Initialize the first challenge of the day
setChallenge(currentChallenge);

// Back button functionality (go back to the main page or menu)
document.getElementById('Backbtn7').addEventListener('click', () => {
  // Code for going back to the previous page or menu
  window.history.back();
});

function requestNotificationPermission() {
  if (Notification.permission === "default") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        console.log("Notifications enabled!");
      } else {
        alert("Please enable notifications to receive reminders!");
      }
    });
  }
}
function scheduleDailyReminder() {
  const reminderTime = "08:00:00"; // Set the time you want the reminder to trigger (24-hour format)

  function checkTimeAndNotify() {
    const now = new Date();
    const currentTime = now.toTimeString().split(" ")[0]; // Get current time in HH:MM:SS format

    if (currentTime === reminderTime) {
      sendNotification();
    }
  }

  // Check every second
  setInterval(checkTimeAndNotify, 1000);
}

function sendNotification() {
  if (Notification.permission === "granted") {
    new Notification("Daily Fitness Reminder", {
      body: "Don't forget to complete today's workout challenges!",
      icon: "fitnation.png" // Path to your app's notification icon
    });
  }
}
document.addEventListener("DOMContentLoaded", function() {
  requestNotificationPermission(); // Ask for notification permission
  scheduleDailyReminder(); // Start the daily reminder
});

const Achievementlink = document.getElementById('Achievementlink');
const AchievementPage = document.getElementById('AchievementsPage');
const BackAchievements = document.getElementById('BackAchievements');
const Noachievements = document.getElementById('Noachievements');
const Achievementslist = document.getElementById('achievements-list');
const AchH1 = document.getElementById('achH1');
// When the Achievementlink is clicked, show the Achievements Page
Achievementlink.addEventListener('click', function() {
  // Hide Home Page and other buttons
  HomePage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  // Show the Achievements Page and its content
  AchievementPage.style.display = 'block';
  Achievementslist.style.display = 'block';
  AchH1.style.display = 'block';
  Noachievements.style.display = 'block';
  BackAchievements.style.display = 'block';
});

// When the Back button in Achievements is clicked, return to Home Page
BackAchievements.addEventListener('click', function() {
  // Show Home Page and hide Achievements Page
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
  Tipsbtn.style.display = 'block';
  Goalbtn.style.display = 'block';
  Workoutbtn.style.display = 'block';

  // Hide Achievements Page
  AchievementPage.style.display = 'none';
});

///Achievement system///

// List of achievements

// List of achievements with the associated conditions
const achievements = [
  { title: '7 Day Streak', description: 'Log in for 7 consecutive days.', streak: 7, type: 'streak' },
  { title: '30 Day Streak', description: 'Log in for 30 consecutive days.', streak: 30, type: 'streak' },
  { title: '90 Day Streak', description: 'Log in for 90 consecutive days.', streak: 90, type: 'streak' },
  { title: '100 Day Streak', description: 'Log in for 100 consecutive days.', streak: 100, type: 'streak' },
  { title: '5 Challenges Completed', description: 'Complete 5 challenges.', streak: 5, type: 'challenge' },
  { title: '10 Challenges Completed', description: 'Complete 10 challenges.', streak: 10, type: 'challenge' }
];

// Track user login streak and challenges
function checkAchievements() {
  let lastLoginDate = localStorage.getItem('lastLoginDate');
  let loginStreak = parseInt(localStorage.getItem('loginStreak')) || 0;
  let completedChallenges = parseInt(localStorage.getItem('completedChallenges')) || 0;

  const today = new Date().toISOString().split('T')[0]; // Get today's date (yyyy-mm-dd)

  if (lastLoginDate !== today) {
    if (lastLoginDate && new Date(lastLoginDate).getDate() !== new Date(today).getDate() - 1) {
      loginStreak = 1; // Reset streak if the user skipped a day
    } else {
      loginStreak++; // Increment streak
    }

    localStorage.setItem('lastLoginDate', today);
    localStorage.setItem('loginStreak', loginStreak);
  }

  // Check and display achievements based on login streak and completed challenges
  displayAchievements(loginStreak, completedChallenges);
}

// Display available achievements
function displayAchievements(streak, completedChallenges) {
  Achievementslist.innerHTML = ''; // Clear existing list

  let earnedAnyAchievement = false;
  achievements.forEach(achievement => {
    const achievementItem = document.createElement('div');
    achievementItem.classList.add('achievement');

    const claimBtn = document.createElement('button');
    claimBtn.classList.add('claim-btn');
    claimBtn.textContent = 'Claim';

    // Check if the achievement is claimable
    if (achievement.type === 'streak' && streak >= achievement.streak) {
      claimBtn.disabled = false;
      claimBtn.onclick = () => claimAchievement(achievement);
    } else if (achievement.type === 'challenge' && completedChallenges >= achievement.streak) {
      claimBtn.disabled = false;
      claimBtn.onclick = () => claimAchievement(achievement);
    } else {
      claimBtn.disabled = true;
    }

    const achievementContent = `
      <strong>${achievement.title}</strong><br>
      ${achievement.description}
    `;
    achievementItem.innerHTML = achievementContent;
    achievementItem.appendChild(claimBtn);

    if (localStorage.getItem(`earned-${achievement.title}`)) {
      achievementItem.classList.add('claimed');
    }

    Achievementslist.appendChild(achievementItem);
    earnedAnyAchievement = true;
  });

  // If no achievements are earned, show default message
  Noachievements.style.display = earnedAnyAchievement ? 'none' : 'block';
}

// Claim an achievement
function claimAchievement(achievement) {
  localStorage.setItem(`earned-${achievement.title}`, 'true'); // Mark achievement as claimed
  alert(`You have claimed the "${achievement.title}" achievement!`);

  // Refresh the achievements list
  checkAchievements();
}

// Display achievements page when clicked
Achievementlink.addEventListener('click', function() {
  HomePage.style.display = 'none';
  Trackbtn.style.display = 'none';
  Tipsbtn.style.display = 'none';
  Goalbtn.style.display = 'none';
  Workoutbtn.style.display = 'none';

  AchievementPage.style.display = 'block';
  Achievementslist.style.display = 'block';
  AchH1.style.display = 'block';

  Noachievements.style.display = 'block'; // Default message if no achievements
  BackAchievements.style.display = 'block';

  // Check and display achievements
  checkAchievements();
});

// Back button functionality
BackAchievements.addEventListener('click', function() {
  HomePage.style.display = 'block';
  Trackbtn.style.display = 'block';
  Tipsbtn.style.display = 'block';
  Goalbtn.style.display = 'block';
  Workoutbtn.style.display = 'block';

  AchievementPage.style.display = 'none';
});

// Call this function on the first login or when the user opens the app
checkAchievements();
