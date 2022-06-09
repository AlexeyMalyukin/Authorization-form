let login = document.querySelector('.login_text');
let password = document.querySelector('.password_text');
let email = document.querySelector('.email_text');
let notification = document.querySelector('.notification');
let result = document.querySelector('.result');

let users = document.querySelector('.users');



const submit = document.querySelector('.submit');


let data;
!localStorage.data ? data = [] : data = JSON.parse(localStorage.getItem('data'));


function User(login, password, email) {
    this.log = login,
    this.pass = password,
    this.email = email;
}

const saveData = () => {
    login.value != '' && password.value != '' && email.value != '' ? 
    (localStorage.setItem('data', JSON.stringify(data)), 
    login.value = '',
    password.value = '',
    email.value = '')
    //localStorage.setItem('password', password.value)
    //localStorage.setItem('email', email.value)) 
    : notification.innerHTML = 'enter data!';  
    
}

const showUsers = () => {
    users.innerHTML = "";
    data.length > 0 ? data.forEach((user) => {
        users.innerHTML = `<div>USER ${data.indexOf(user) +1} login: <span>${user.log}</span>; password: <span>${user.pass}</span>;
         email: <span>${user.email}</span></div>`; 
    }) : '';
}

showUsers();

submit.addEventListener('click', () => {
    data.push(new User(login.value, password.value, email.value));
    saveData();
    showUsers();
    //login.value = '';
    //password.value = '';
    //email.value = '';
});



