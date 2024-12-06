const moodSlider = document.getElementById('mood-slider');
const moodValue = document.getElementById('mood-value');

// Update mood value display as slider moves
moodSlider.addEventListener('input', () => {
  moodValue.textContent = moodSlider.value;
});

// Save mood when button is clicked
function saveMood() {
  const mood = moodSlider.value;
  alert('Mood saved: ' + mood);
  // Here you can store the mood in local storage, a database, etc.
  localStorage.setItem('mood', mood);  // Save to localStorage as an example
}
// Add task to the schedule
function addTask() {
  const taskInput = document.getElementById('task');
  const taskList = document.getElementById('task-list');

  if (taskInput.value.trim()) {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';  // Clear the input field after adding task
  }
}

// Optional: Save tasks to localStorage for persistence across page reloads
function loadTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

window.onload = loadTasks;  // Load tasks when page is loaded

// Save tasks to localStorage
window.onbeforeunload = () => {
  const tasks = [];
  const taskList = document.getElementById('task-list');

  for (let i = 0; i < taskList.children.length; i++) {
    tasks.push(taskList.children[i].textContent);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));  // Save tasks in localStorage
};
const quotes = [
  "You are stronger than you think.",
  "This too shall pass.",
  "Believe in yourself and all that you are.",
  "Keep going, you are getting there.",
  "Mental health is just as important as physical health."
];

// Display a random quote
function showRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-text').textContent = randomQuote;
}

// Load an initial quote when the page is loaded
window.onload = showRandomQuote;
const articles = [
  { title: "The Importance of Mental Health", link: "https://example.com/article1" },
  { title: "How to Manage Stress Effectively", link: "https://example.com/article2" },
  { title: "Self-care Tips for a Healthy Mind", link: "https://example.com/article3" }
];

// Load articles into the page
function loadArticles() {
  const articleList = document.getElementById('article-list');

  articles.forEach(article => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = article.link;
    a.target = "_blank";  // Open the article in a new tab
    a.textContent = article.title;
    li.appendChild(a);
    articleList.appendChild(li);
  });
}

// Load articles when the page is loaded
window.onload = loadArticles;
