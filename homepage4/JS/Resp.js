burger = document.querySelector('.burger')
respnav = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click ',()=>{
    rightnav.classList.toggle('hidden');
    navlist.classList.toggle('hidden');
   
})


