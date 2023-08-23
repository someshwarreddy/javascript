let btns = document.querySelectorAll('.section-button');
let contentDiv = document.querySelectorAll('.content');
let contentIcon = document.querySelectorAll('.icon');
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        contentDiv.forEach(contentDiv => contentDiv.classList.remove('active'));;
        contentDiv[index].classList.toggle('active');
        contentIcon.forEach(contenticon => contenticon.classList.remove('active'));;
        contentIcon[index].classList.add('active');

    })
})