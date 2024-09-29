let menu=document.queryselector('menu-icon');
let navbar=document.queryselector('navbar');

menu.onclick =()=>{
    navbar.classlist.toggle('active');
}

window.onscroll =() => {
    navbar.classlist.toggle('active');

}