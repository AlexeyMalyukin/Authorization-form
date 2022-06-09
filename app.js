let login = document.querySelector('.login_text');
let password = document.querySelector('.password_text');


let email = document.querySelector('.email_text');
let notification = document.querySelector('.notification');
let result = document.querySelector('.result');

let users = document.querySelector('.users');

let loginAuthor = document.querySelector('.login_author');
let passwordAuthor = document.querySelector('.password_author');
window.onload = () => {
    passwordAuthor.value = '';
};

const submit = document.querySelector('.submit');
const submitAuthor = document.querySelector('.submit_author');

const createAcc = document.querySelector('.option.create_acc');
const haveAcc = document.querySelector('.option.have_acc');

const inputLogin = document.querySelector('.input.login');
const inputAuthor = document.querySelector('.input.author');

const welcome = document.querySelector('.input.welcome');
const welcomeUser = document.querySelector('.tittle.welcome');

const success = document.querySelector('.input.success');
const successUser = document.querySelector('.tittle.success');

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
    success.style.display = 'flex',
    inputLogin.style.display = 'none',
    inputAuthor.style.display = 'none',
    successUser.innerHTML = `Congratulations, ${login.value}!
    <button class="option have_acc" onclick="haveAccount()">Log in now</button>`)
    
    : notification.innerHTML = 'enter data!' ;  
    
}


submit.addEventListener('click', () => {
    data.push(new User(login.value, password.value, email.value));
    saveData();
   
    //showUsers();
    //haveAccount();
    //login.value = '';
    //password.value = '';
    //email.value = '';
});

const showUsers = () => {
    users.innerHTML = "";
    data.length > 0 ? data.forEach((user) => {
        users.innerHTML = `<div>USER ${data.indexOf(user) +1} login: <span>${user.log}</span>; password: <span>${user.pass}</span>;
         email: <span>${user.email}</span></div>`; 
    }) : '';
}

showUsers();





const checkIn = () => {
    loginAuthor.value != '' && passwordAuthor.value != '' ?
        data.forEach((user) => { 
            loginAuthor.value == user.log && passwordAuthor.value == user.pass ?
            (welcome.style.display = 'block', 
            welcomeUser.innerHTML = `Welcome back, ${user.log}!`, 
            inputLogin.style.display = 'none', 
            inputAuthor.style.display = 'none'/*, user.idex--*/)
            : data.indexOf(user) +1
        }, result.innerHTML = 'incorrect data!', 
        welcome.style.display = 'none')
    
    : result.innerHTML = 'enter data!';
      
};

submitAuthor.addEventListener('click', () => {
    checkIn();
    
    
    
})


const createAccount = () => {
    inputLogin.style.display = 'block';
    inputAuthor.style.display = 'none';

}

createAcc.addEventListener('click', () => {
    createAccount();
    password.value = '';
});


const haveAccount = () => {
    inputLogin.style.display = 'none';
    inputAuthor.style.display = 'block';
    success.style.display = 'none';
}

haveAcc.addEventListener('click', () => {
    haveAccount();
})