const w = new Weather;
const ui = new UI;

const searchIcon = document.querySelector('.search-icon');
const searchInputs = document.querySelectorAll('input');
const searchSm = document.querySelector('#search-input-sm');
const searchLg = document.querySelector('#search-input-lg');
const searchIcons = document.querySelectorAll('.fa-search');


// let l = '';


// searchInputs.forEach(input => {
//   input.addEventListener('keyup', e => {

//     l= e.target.value;
//      console.log(l);
//     e.preventDefault();
//   })
// })

searchIcons.forEach(icon => {
    icon.addEventListener('click', e => {

       if(searchLg.value !== '')
       {
         console.log(searchLg.value); 
       }
        else if(searchSm.value !== '')
        {
          console.log(searchSm.value); 
        }
      e.preventDefault();
    })
});




searchIcon.addEventListener('click' , () => {
    if(searchSm.classList.contains('active')){
         searchSm.classList.remove('active');
    }
    else{
        searchSm.classList.add('active');
    }
})

