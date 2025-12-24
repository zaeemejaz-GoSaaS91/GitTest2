const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});