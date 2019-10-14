


const form=document.querySelector("#task-form");
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector('#filter');
const taskInput=document.querySelector("#task");


loadEventListeners();

// Load all event listeners
function loadEventListeners(){

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove tesk addEventListener
  taskList.addEventListener('click', removeTask);

  //Clear task events
  clearBtn.addEventListener('click',clearTasks)
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

// Clear input
taskInput.value='';

  e.preventDefault();
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
    taskList.removeChild(taskList.firstChild)
  }
}