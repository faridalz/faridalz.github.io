
let toggleNavStatus = false;
let toggleNav = function() {
    let getnav = document.querySelector('.dropt');
    let getvector = document.querySelector('.img1');
    let getvector2 = document.querySelector('.img2');
    if (toggleNavStatus === false) {
        getnav.style.display  = 'flex';
        getvector.style.visibility = 'hidden';
        getvector2.style.visibility = 'visible';
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getnav.style.display  = 'none';
        getvector2.style.visibility = 'hidden';
        getvector.style.visibility = 'visible';
        toggleNavStatus = false;
    }

} 


var dropnav2 = function() {
    var butt11 = document.querySelector('#butt1');
    butt11.style.backgroundColor = '##0099FA;';    
}


let dropnav = function() {
    let tools1 = document.querySelector('.tools1');
    let tools2 = document.querySelector('.tools2');
    let butt1 = document.querySelector('#butt1');
    let tools3 = document.querySelector('.tools3');
    let tools4 = document.querySelector('.tools4');
    let tools5 = document.querySelector('.tools5');
    let tools6 = document.querySelector('.tools6');
    let butt2 = document.querySelector('#butt2');
    if (toggleNavStatus === true) {
        tools1.style.display  = 'flex';
        tools2.style.display  = 'flex';
        butt1.style.backgroundColor = '#0d6094';
        butt1.style.borderColor = 'white';
        tools3.style.display  = 'none';
        tools4.style.display  = 'none';
        tools5.style.display  = 'none';
        tools6.style.display  = 'none';
        butt2.style.backgroundColor = '#2F353D';
        butt2.style.borderColor = 'white';
        toggleNavStatus = false;
        
    }
}


let dropnav3 = function() {
    let tools1 = document.querySelector('.tools1');
    let tools2 = document.querySelector('.tools2');
    let tools3 = document.querySelector('.tools3');
    let tools4 = document.querySelector('.tools4');
    let tools5 = document.querySelector('.tools5');
    let tools6 = document.querySelector('.tools6');
    let butt2 = document.querySelector('#butt2');
    if (toggleNavStatus === false) {
        tools1.style.display  = 'none';
        tools2.style.display  = 'none';
        butt1.style.backgroundColor = '#2F353D';
        butt1.style.borderColor = 'white';
        tools3.style.display  = 'flex';
        tools4.style.display  = 'flex';
        tools5.style.display  = 'flex';
        tools6.style.display  = 'block';
        butt2.style.backgroundColor = '#0d6094';
        butt2.style.borderColor = 'white';
        toggleNavStatus = true;
        }
}


const body = document.querySelector('body');
const logo1 = document.querySelector('.logo');
const nav = document.querySelector('nav');
const team11 = document.querySelector('.team1');
const team12 = document.querySelector('#team2');
const footer11 = document.querySelector('.panel-footer');
const toggle1 = document.querySelector('#toggle .indicator');


const logos1 = document.querySelectorAll('a');
const p111 = document.querySelectorAll('p');
const card111 = document.querySelectorAll('.card1');
const card112 = document.querySelectorAll('.card2');
const write311 = document.querySelectorAll('.write2 .write31');
const label11 = document.querySelectorAll('.write2 .col-md-6 form label');
const process11 = document.querySelectorAll('row section .process2');
const process12 = document.querySelectorAll('row section .process3');
const team222 = document.querySelectorAll('#team2 div div div section .team22');

const button111 = document.querySelectorAll('button');
const input11 = document.querySelectorAll('.write2 .col-md-6 form input');
const input12 = document.querySelectorAll('.write2 .col-md-6 form textarea');
const tools22 = document.querySelectorAll('.tools2 .col-md-4');
const tools23 = document.querySelectorAll('.tools2 .col-md-4 .card1');
const tools24 = document.querySelectorAll('.tools2 .col-md-4 .card2');

const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');
    logo1.classList.toggle('active');
    team11.classList.toggle('active');
    team12.classList.toggle('active');
    footer11.classList.toggle('active');
    toggle1.classList.toggle('active');
    logos1.forEach((item)=>{
        item.classList.toggle('active');
    });
    tools22.forEach((item)=>{
        item.classList.toggle('active');
    });
    tools23.forEach((item)=>{
        item.classList.toggle('active');
    });
    tools24.forEach((item)=>{
        item.classList.toggle('active');
    });
    input11.forEach((item)=>{
        item.classList.toggle('active');
    });
    input12.forEach((item)=>{
        item.classList.toggle('active');
    });
    p111.forEach((item)=>{
        item.classList.toggle('active');
    });
    button111.forEach((item)=>{
        item.classList.toggle('active');
    });
    card111.forEach((item)=>{
        item.classList.toggle('active');
    });
    card112.forEach((item)=>{
        item.classList.toggle('active');
    });
    process11.forEach((item)=>{
        item.classList.toggle('active');
    });
    process12.forEach((item)=>{
        item.classList.toggle('active');
    });
    team222.forEach((item)=>{
        item.classList.toggle('active');
    });
    write311.forEach((item)=>{
        item.classList.toggle('active');
    });
    label11.forEach((item)=>{
        item.classList.toggle('active');
    });
};

