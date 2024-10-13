import "./styles.css";

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

// Main content div
const content = document.getElementById('content');

let tasks = []

// Load a new task in the DOM
function generateTaskMarkup(task) {
  
  // Main container, contains status and content
  const container = document.createElement('div');
  container.classList.add('task');

  const status = document.createElement('input');
  status.classList.add('status');
  status.type = 'checkbox';

  // Container for content, contains everything else
  const taskContent = document.createElement('div');
  taskContent.classList.add('task-content');

  const header = document.createElement('h2');
  header.classList.add('title');
  header.innerText = task.title;

  // Container for category and date
  const dateCategoryContainer = document.createElement('div');
  dateCategoryContainer.classList.add('date-category-container');

  const category = document.createElement('p');
  category.classList.add('category');
  category.innerText = '💻 Programming';

  const dueDate = document.createElement('p');
  dueDate.classList.add('due-date');
  dueDate.innerText = task.dueDate;

  dateCategoryContainer.append(category, dueDate);


  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = task.description;

  taskContent.append(header, dateCategoryContainer, description);


  // Finally, a chevron for expanding the task
  const chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // chevron.setAttributeNS(null, 'xmlns', "http://www.w3.org/2000/svg");
  chevron.setAttributeNS(null, 'viewBox', "0 0 24 24");
  chevron.setAttributeNS(null, 'fill', "none");
  chevron.setAttributeNS(null, 'stroke-width', "1.5");
  chevron.setAttributeNS(null, 'stroke', "currentColor");
  chevron.setAttributeNS(null, 'class', "task-chevron");

  const chevronPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  chevronPath.setAttributeNS(null, "stroke-linecap", "round");
  chevronPath.setAttributeNS(null, "stroke-linejoin", "round");
  chevronPath.setAttributeNS(null, "d", "m19.5 8.25-7.5 7.5-7.5-7.5");

  chevron.append(chevronPath);

  // container.append(status, taskContent);
  container.append(status, taskContent, chevron);

  content.append(container);
}

let task1 = new Task(
  "finish writing this class",
  "put things in it like title, desc, due date, status",
  "2024-10-15"
)
let task2 = new Task(
  "Second task",
  "Some other stuff: title, desc, due date, status",
  "2024-10-15"
)

generateTaskMarkup(task1);
generateTaskMarkup(task2);

window.onload = function() {

  const newTaskButton = document.getElementById('new-task-button');
  newTaskButton.addEventListener('click', createNewTask);
}

function createNewTask() {

  // Get values from the form
  const form = document.getElementById('task-form');
  
  const title = document.querySelector('input[name=title]').value;
  const dueDate = document.querySelector('input[name=due-date]').value;
  // const category = document.querySelector('select[name=category]').value ;

  // Create new object
  let task = new Task(
    title,
    "",
    dueDate
  );

  tasks.push(task);

  generateTaskMarkup(task);
}
