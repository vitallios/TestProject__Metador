const mobailBtn = document.querySelector('.mobail__btn')
const mobailMenu = document.querySelector('.mobail__menu')
const body = document.querySelector('body')

mobailBtn.addEventListener('click',()=>{
   mobailBtn.classList.toggle('mobail__btn-active')
   mobailMenu.classList.toggle('mobail__menu-active')
   body.classList.toggle('body__hiden')
})

const mobailMenuLink = document.querySelectorAll('.mobail__menu-link')

mobailMenuLink.forEach((e)=>{
    e.addEventListener('click',()=>{
     console.dir(e)   
     mobailMenu.classList.remove('mobail__menu-active')
   body.classList.remove('body__hiden')
   mobailBtn.classList.remove('mobail__btn-active')


    })
})