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
});

for(var i=0; i<5; i++){
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('button'+i));
    btn.addEventListener('click',function(){
      console.log(i)  
    })
    document.body.appendChild(btn)
}
