const hamburger = document.getElementById('hamburger')
const navmobile = document.getElementsByClassName('nav-mobile')[0]

hamburger.addEventListener('click', function(){
    navmobile.classList.toggle('d-none')
})