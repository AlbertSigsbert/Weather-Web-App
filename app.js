const w = new Weather;
const ui = new UI;

const searchIcon = document.querySelector('.search-icon');
const searchInputs = document.querySelectorAll('input');
const searchSm = document.querySelector('#search-input-sm');
const searchLg = document.querySelector('#search-input-lg');
const searchIcons = document.querySelectorAll('.search-icon');


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
         localStorage.setItem('locationName', searchLg.value);
           
         locationName = localStorage.getItem('locationName').toLowerCase();
           
         w.getWeatherDetails(locationName).then(data => {
          if(data.message === 'city not found'){
              console.log( "Please enter a valid city name");
            }
            else{
              console.log(data);
            }
         }).catch(e => {
           console.log(e);
         });

        

         clearValue(searchLg);
       }
        else if(searchSm.value !== '')
        {
          localStorage.setItem('locationName', searchSm.value);

          locationName =  localStorage.getItem('locationName').toLowerCase();


         w.getWeatherDetails(locationName).then(data => {
            if(data.message === 'city not found'){
              console.log( "Please enter a valid city name");
              }
              else{
                console.log(data);
            }
         }).catch(e => {
           console.log(e);
         });

          clearValue(searchSm);
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

function  clearValue(input)
{
     input.value = ' ';
}