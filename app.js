let button = document.querySelector('.button');
let ul = document.querySelector('ul');


button.addEventListener('click', (e) => {


    let notifications = ul.querySelector('li:last-child');


    notifications.className += " tranzitie";


    setTimeout(() => {
        ul.removeChild(notifications);
    }, 300);






})