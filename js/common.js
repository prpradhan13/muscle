let hamMenu = document.getElementById('ham_menu');
let phoneMenu = document.getElementById('phone_menu');
let closeMenu = document.getElementById('close_phn_menu')

const showPhoneMenu = () =>{
    phoneMenu.style.display = 'flex';
}

const closePhoneMenu = () =>{
    phoneMenu.style.display = 'none';
}

hamMenu.addEventListener('click',showPhoneMenu);
closeMenu.addEventListener('click',closePhoneMenu);