import Weather from "./weather.js";
const w = new Weather;
const ui = new UI;

const searchIcon = document.querySelector('.search-icon');
const searchInputs = document.querySelectorAll('input');
const searchSm = document.querySelector('#search-input-sm');
const searchLg = document.querySelector('#search-input-lg');
const searchIcons = document.querySelectorAll('.search-icon');
const cities = document.querySelectorAll('#city');


document.addEventListener("DOMContentLoaded", function(event) {
      let locationName = '';
      if(localStorage.getItem('locationName') === null){
         
      }
      else{

        locationName = localStorage.getItem('locationName').toLowerCase();
             
        w.getWeatherDetails(locationName).then(data => {
          if(data.message === 'city not found'){
              console.log( "Please enter a valid city name");
            }
            else{
              // console.log(data);
              ui.setWeatherDetails(data);
            }
         }).catch(e => {
           console.log(e);
         });
      }
});

cities.forEach(city =>{
  city.addEventListener('click', (e) => {
    let locationName = '';
      locationName = e.target.innerText;
      localStorage.setItem('locationName', locationName);

      
        
      locationName = localStorage.getItem('locationName').toLowerCase();
        
      w.getWeatherDetails(locationName).then(data => {
       if(data.message === 'city not found'){
           console.log( "Please enter a valid city name");
         }
         else{
           // console.log(data);
           ui.setWeatherDetails(data);
         }
      }).catch(e => {
        console.log(e);
      });

     

    e.preventDefault()
  })
})


// let l = '';
// searchInputs.forEach(input => {
//   input.addEventListener('keyup', e => {

//     l= e.target.value;
//      console.log(l);
//     e.preventDefault();
//   })
// })
searchLg.addEventListener("keyup", e => {
    let locationName = '';
    if (e.keyCode === 13) {
      localStorage.setItem('locationName', searchLg.value);

      locationName = localStorage.getItem('locationName').toLowerCase();
             
      w.getWeatherDetails(locationName).then(data => {
        if(data.message === 'city not found'){
            console.log( "Please enter a valid city name");
          }
          else{
            // console.log(data);
            ui.setWeatherDetails(data);
          }
       }).catch(e => {
         console.log(e);
       }); 

       clearValue(searchLg);
    }
    e.preventDefault();
});


searchIcons.forEach(icon => {
    icon.addEventListener('click', e => {
      let locationName = '';
       if(searchLg.value !== '')
       {
         localStorage.setItem('locationName', searchLg.value);
           
         locationName = localStorage.getItem('locationName').toLowerCase();
           
         w.getWeatherDetails(locationName).then(data => {
          if(data.message === 'city not found'){
              console.log( "Please enter a valid city name");
            }
            else{
              // console.log(data);
              ui.setWeatherDetails(data);
            }
         }).catch(e => {
           console.log(e);
         });

        

         clearValue(searchLg);
       }
        else if(searchSm.value !== '')
        {
          let locationName = '';
          localStorage.setItem('locationName', searchSm.value);

          locationName =  localStorage.getItem('locationName').toLowerCase();


         w.getWeatherDetails(locationName).then(data => {
            if(data.message === 'city not found'){
              console.log( "Please enter a valid city name");
              }
              else{
                 // console.log(data);
                  ui.setWeatherDetails(data);
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
