let buttonOpen = document.querySelector('.button-open');
let modalActive = document.querySelector('.modal-content')
let closeButton = document.querySelector('.close-button')

buttonOpen.addEventListener('click',()=>{
    modalActive.classList.add('active')
});
closeButton.addEventListener('click',()=>{
    modalActive.classList.remove('active')
})