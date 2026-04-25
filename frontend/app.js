const API_URL = 'http://localhost:3000/api/items';

const form = document.getElementById('item-form');
const itemId = document.getElementById('item-id');
const name = document.getElementById('name');
const note = document.getElementById('note');
const itemsList = document.getElementById('items-list');
const message = document.getElementById('message');

function showMessage(text) {
  message.textContent = text;
}

function clearForm() {
  form.reset();
  itemId.value = '';
}

async function loadItems() {
  const response = await fetch(API_URL);
  const items = await response.json();

  if (!items.length) {
    itemsList.innerHTML = '<p>Nenhum item na lista.</p>';
    return;
  }

  itemsList.innerHTML = items.map(item => `
    <div class="item ${item.checked ? 'checked' : ''}">
      <strong>${item.name}</strong>
      <p>${item.note || ''}</p>

      <div class="actions">
        <button onclick="toggleItem('${item._id}', ${item.checked})">
          ${item.checked ? 'Desmarcar' : 'Marcar'}
        </button>
        <button onclick="deleteItem('${item._id}')">Excluir</button>
      </div>
    </div>
  `).join('');
}

async function saveItem(data) {
  const id = itemId.value;
  const url = id ? `${API_URL}/${id}` : API_URL;
  const method = id ? 'PUT' : 'POST';

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}

window.toggleItem = async function (id, checked) {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ checked: !checked })
  });

  loadItems();
};

window.deleteItem = async function (id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  showMessage('Item removido.');
  loadItems();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: name.value,
    note: note.value
  };

  await saveItem(data);
  showMessage('Item salvo.');
  clearForm();
  loadItems();
});

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service Worker registrado.');
    } catch (error) {
      console.log('Erro no Service Worker:', error);
    }
  });
}

loadItems();