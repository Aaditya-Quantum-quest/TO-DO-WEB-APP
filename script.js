 document.addEventListener('DOMContentLoaded', () => {
            const userInput = document.getElementById('user-input');
            const addBtn = document.getElementById('add-task-btn');
            const taskList = document.getElementById('task-list');
            const emptyState = document.getElementById('empty-state');
            const totalTasksEl = document.getElementById('total-tasks');
            const completedTasksEl = document.getElementById('completed-tasks');
            const pendingTasksEl = document.getElementById('pending-tasks');
            const updateStats = () => {
                const tasks = taskList.querySelectorAll('li');
                const completed = taskList.querySelectorAll('li.completed').length;
                const total = tasks.length;
                const pending = total - completed;
                totalTasksEl.textContent = total;
                completedTasksEl.textContent = completed;
                pendingTasksEl.textContent = pending;
                emptyState.style.display = total === 0 ? 'block' : 'none';
            };
            const addTask = (e) => {
                e.preventDefault();
                const userTextInput = userInput.value.trim();
                if (userTextInput === '') {
                    userInput.style.borderColor = '#ff6b6b';
                    setTimeout(() => {
                        userInput.style.borderColor = '#e2e8f0';
                    }, 500);
                    return;
                }
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" class="checkbox">
                    <span>${userTextInput}</span>
                    <div class="task-buttons">
                        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;
                const checkbox = li.querySelector('.checkbox');
                checkbox.addEventListener('change', () => {
                    li.classList.toggle('completed');
                    updateStats();
                });
                li.querySelector('.delete-btn').addEventListener('click', () => {
                    li.style.animation = 'taskSlideIn 0.3s ease reverse';
                    setTimeout(() => {
                        li.remove();
                        updateStats();
                    }, 250);
                });
                taskList.appendChild(li);
                userInput.value = '';
                updateStats();
            };
            addBtn.addEventListener('click', addTask);
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    addTask(e);
                }
            });
            updateStats();
        });