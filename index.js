// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const data = [
  {
    name: 'supports',
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'get',
  },
  {
    name: 'support',
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'post',
  },
  {
    name: 'users',
    url: 'https://jsonplaceholder.typicode.com/users/{id}',
    method: 'put',
  },
  {
    name: 'client',
    url: 'https://jsonplaceholder.typicode.com/todos/{id}',
    method: 'patch',
  },
];

console.log(data[0]);

function apiMethods(name, id = null) {
  console.log(name);
  const regx = /{id}/g;
  const findUrl = data.find((eleName) => eleName.name === name).url;
  if (id) {
    return findUrl.replace(regx, id);
  }
  return findUrl;
}
const endpoint = apiMethods('client', 30);

console.log(endpoint);
