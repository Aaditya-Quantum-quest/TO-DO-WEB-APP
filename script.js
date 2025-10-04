

document.addEventListener('DOMContentLoaded', () => {     //  ONLY works when page is fully reloaded
    const userInput = document.getElementById('user-input');
    const addBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const addTask = (e) => {
        e.preventDefault();  // prevent page to reload 
        const userTextInput = userInput.value.trim();
        if (userTextInput === '') {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${userTextInput}</span>
        <div class="task-button">
            <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button></div>
             </div>
             `;
        li.querySelector('.delete-btn').addEventListener('click', () =>{
            li.remove();
        });     
        taskList.appendChild(li);
        userInput.value = '';
    };

    addBtn.addEventListener('click', addTask);
    userInput.addEventListener('keypress', (e) => {   // functional Enter Key
        if (e.key === 'Enter') {
            addTask(e);
        }
    });
});






