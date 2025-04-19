const addBtn = document.getElementById('add-btn');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

addBtn.onclick = () => {
  const text = input.value.trim();
  if (text === "") return;

  
  const li = document.createElement('li');
  const radio = document.createElement('input');
  const label = document.createElement('label');
  const delBtn = document.createElement('button');

  
  radio.type = 'radio';
  radio.onclick = () => li.classList.toggle('completed');

  
  label.textContent = text;
  label.className = 'task-label';

  
  delBtn.textContent = 'DELETE';
  delBtn.className = 'delete-btn';
  delBtn.onclick = () => li.remove();

  
  const group = document.createElement('div');
  group.className = 'radio-group';
  group.append(radio, label);

  li.append(group, delBtn);
  list.appendChild(li);

  input.value = '';
};
