document.querySelector('.menu-button')
.addEventListener('click', function(){
    document.querySelector('.mobile-navigation') 
    .classList.add(
        'open'
    )
})
document.querySelector('.close-button')
.addEventListener('click', function(){
    document.querySelector('.mobile-navigation') 
    .classList.remove(
        'open'
    )
})

