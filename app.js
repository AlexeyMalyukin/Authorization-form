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

const loginNote = document.querySelector('.login_note');
const passwordNote = document.querySelector('.password_note');
const emailNote = document.querySelector('.email_note');
//const alertLogin = document.createElement('p');

const emailReqepx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
const basicReqepx = new RegExp(/^\S{4,}$/)

submit.addEventListener('click', () => {
    if (basicReqepx.test(login.value) && basicReqepx.test(password.value) && emailReqepx.test(email.value)) {
        data.push(new User(login.value, password.value, email.value)); 
        localStorage.setItem('data', JSON.stringify(data)); 
        success.style.display = 'flex';
        inputLogin.style.display = 'none';
        inputAuthor.style.display = 'none';
        successUser.innerHTML = `Congratulations, ${login.value}!
        <button class="option have_acc" onclick="haveAccount()">Log in now</button>`;
    } else {
        if(basicReqepx.test(login.value)) {
            loginNote.innerHTML = "";
        } else {
            loginNote.innerHTML = 'Your login should constsit at least 4 symbols'; 
            
        }

        if(basicReqepx.test(password.value)) {
            passwordNote.innerHTML = "";
        } else {
            passwordNote.innerHTML = 'Your password should constsit at least 4 symbols';   
        }

        
        if(emailReqepx.test(email.value)) {
            emailNote.innerHTML = "";
        } else {
                emailNote.innerHTML = "Email is not valid, try format: example@mail.com"; 
        }
    }
})


const showUsers = () => {
    users.innerHTML = "";
    data.length > 0 ? data.forEach((user) => {
        users.innerHTML = `<div>USER ${data.indexOf(user) +1} login: <span>${user.log}</span>; password: <span>${user.pass}</span>;
         email: <span>${user.email}</span></div>`; 
    }) : '';
}

showUsers();





const checkIn = () => {
    basicReqepx.test(loginAuthor.value) && basicReqepx.test(passwordAuthor.value) ?
        data.forEach((user) => { 
            loginAuthor.value == user.log && passwordAuthor.value == user.pass ?
            (welcome.style.display = 'block', 
            welcomeUser.innerHTML = `Welcome back, ${user.log}!`, 
            inputLogin.style.display = 'none', 
            inputAuthor.style.display = 'none')
            : data.indexOf(user) +1
        }, result.innerHTML = 'Can not find user with such login and password, please enter again!', 
        welcome.style.display = 'none')
    
    : result.innerHTML = 'The format of data is incorrect, please enter again!';
      
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
    notification.innerHTML = '';
    result.innerHTML = '';
    
});


const haveAccount = () => {
    inputLogin.style.display = 'none';
    inputAuthor.style.display = 'block';
    success.style.display = 'none';
    
}

haveAcc.addEventListener('click', () => {
    haveAccount();
    notification.innerHTML = '';
    result.innerHTML = '';
})