const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.classList.add('task');

  li.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-btn">×</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
});

taskList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const task = e.target.closest('li');
    task.remove();
  }
});
