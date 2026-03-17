import store from './store/index.js';

let app = document.getElementById('app');
app.innerHTML = '';

let header = document.createElement('header');
header.style.backgroundColor = '#4a90d9';
header.style.color = 'white';
header.style.padding = '15px';
header.style.textAlign = 'center';
header.style.fontSize = '24px';
header.textContent = 'Таск-трекер';
app.appendChild(header);

let main = document.createElement('main');
main.id = 'main-content';
main.style.padding = '20px';
main.style.maxWidth = '800px';
main.style.margin = '0 auto';
app.appendChild(main);

store.subscribe(function() {
  console.log('Состояние обновилось:', store.getState());
});

store.dispatch({
  type: 'ADD_TASK',
  payload: {
    id: 1,
    title: 'Первая задача',
    done: false
  }
});

let stateInfo = document.createElement('p');
stateInfo.textContent = 'Задач в store: ' + store.getState().taskState.tasks.length;
main.appendChild(stateInfo);
