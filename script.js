const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
});

document.getElementById('clearBtn').addEventListener('click', () => {
    list.innerHTML = '';
});



list.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
