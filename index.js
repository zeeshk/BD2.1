const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names = ['Rahul', 'Sita', 'Amit', 'Vikram'];
let employees = [
  { employeeId: 1, name: 'Sita' },
  { employeeId: 2, name: 'Amit' },
  { employeeId: 3, name: 'Rahul' },
];
let users = [
  { username: 'Sita443', name: 'Sita', score: 3 },
  { username: 'Amit123', name: 'Amit', score: 4 },
  { username: 'Rahul224', name: 'Rahul', score: 5 },
];
let contacts = [
  {
    phoneNumber: '9854712036',
    name: 'Sita',
    address: '123 street lane, Right Inn',
  },
  {
    phoneNumber: '9854712045',
    name: 'Amit',
    address: '584 street lane, Left Inn',
  },
  {
    phoneNumber: '8879654100',
    name: 'Rahul',
    address: '999 street lane, Top Inn',
  },
];

function findNumber(ele, num) {
  return ele === num;
}

app.get('/numbers/find/:num', (req, res) => {
  let number = parseInt(req.params.num);
  let result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});

app.get('/names/find/:name', (req, res) => {
  let name = req.params.name;
  let result = names.find((element) => {
    return element === name;
  });
  res.json(result);
});

app.get('/employee/find/:id', (req, res) => {
  let emp_id = parseInt(req.params.id);
  let result = employees.find((element) => {
    return element.employeeId === emp_id;
  });
  res.json(result);
});

app.get('/usernames/find/:username', (req, res) => {
  let username = req.params.username;
  let result = users.find((element) => {
    return element.username === username;
  });
  res.json(result);
});

app.get('/contacts/find/:phoneNumber', (req, res) => {
  let phoneNumber = req.params.phoneNumber;
  let result = contacts.find((element) => {
    return element.phoneNumber === phoneNumber;
  });
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
