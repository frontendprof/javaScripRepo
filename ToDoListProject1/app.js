


const form=document.querySelector("#task-form");
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector('#filter');
const taskInput=document.querySelector("#task");


loadEventListeners();

// Load all event listeners
function loadEventListeners(){

  // DOM Load Event
  document.addEventListener("DOMContentLoaded",getTasks)

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove tesk addEventListener
  taskList.addEventListener('click', removeTask);

  //Clear task events
  clearBtn.addEventListener('click',clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// GET Tasks from LS
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  } else {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // Create li element
const li=document.createElement('li');

// Add class
li.className='collection-item';

// Create text node and append to li
li.appendChild(document.createTextNode(task));

// Create a new link element
const link=document.createElement('a');

// Add class to it
link.className='delete-item secondary-content';

// Add icon html
link.innerHTML= '<i class="fa fa-remove"></i>';

// Append the link to li
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);  

  });
}


// Add task
function addTask(e){
  if (taskInput.value===""){
    alert('Add a task, bro');
  }

// Create li element
const li=document.createElement('li');

// Add class
li.className='collection-item';

// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));

// Create a new link element
const link=document.createElement('a');

// Add class to it
link.className='delete-item secondary-content';

// Add icon html
link.innerHTML= '<i class="fa fa-remove"></i>';

// Append the link to li
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);

// Store in LS
storeTaskInLocalStorage(taskInput.value)

// Clear input
taskInput.value='';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks=[];
  } else {
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm("Are you sure about that")){
      e.target.parentElement.parentElement.remove();
    }
    
  }
  
}

// Clear task events
function clearTasks(){

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}


// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}