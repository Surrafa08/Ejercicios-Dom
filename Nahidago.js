document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completada';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
