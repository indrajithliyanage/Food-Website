let menu = document.getElementById('menu-icon');
let navbar = document.getElementsByClassName('navbar');

menu.addEventListener('click', function(){
    if(navbar[0].classList !=undefined && !navbar[0].classList.contains('active')){
        navbar[0].classList.add('active');
    }else{
        navbar[0].classList.remove('active');
    }
});

window.onscroll = () => {
    if(navbar[0].classList !=undefined){
        navbar[0].classList.remove('active');
    }    
};