

taskform.addEventListener('submit', addTask);
function addTask(event) {
    event.preventDefault();
    const taskform = document.getElementById('taskform');
    const titleinp = document.getElementById('title');
    const detailsinp = document.getElementById('details');
    const list = document.getElementById('list');
    const title = titleinp.value.trim();
    const details = detailsinp.value.trim();
    const task = document.createElement('li');
    task.innerHTML = `${title}`;

    task.innerHTML += ` - ${details}`;

    const editbutton = document.createElement('button');
    editbutton.textContent = 'Edit';
    editbutton.classList.add('edit');
    editbutton.onclick = () => editfunc(task, title, details);

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.classList.add('delete');
    deletebutton.onclick = () => task.remove();

    task.appendChild(editbutton);
    task.appendChild(deletebutton);
    list.appendChild(task);

    titleinp.value = '';
    detailsinp.value = '';
}

function editfunc(task, title, details) {
    const newtitle = prompt('Enter new title:', title);

    const newdetails = prompt('Enter new details:', details);
    task.innerHTML = `${newtitle}`;
    if (newdetails !== '') {
        task.innerHTML += ` - ${newdetails}`;
    }
    const editbutton = document.createElement('button');
    editbutton.textContent = 'Edit';
    editbutton.classList.add('edit');
    editbutton.onclick = () => editfunc(task, newtitle, newdetails);

    const deletebutton = document.createElement('button');
    deletebutton.textContent = 'Delete';
    deletebutton.classList.add('delete');
    deletebutton.onclick = () => task.remove();

    task.appendChild(editbutton);
    task.appendChild(deletebutton);
}