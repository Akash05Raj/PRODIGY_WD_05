    async function checkWeather(searchval){
        const response = await fetch(apiUrl+ searchval+ '&appid='+apiKey);
        var data = await response.json();     
        setTimeout(watingfun, 500);
        function watingfun()
        {
        
            if(data.message =='city not found'){
                document.querySelector('.warning').innerHTML ='Enter correct city name.';
            }
            else if(data.message =='Nothing to geocode'){
                document.querySelector('.warning').innerHTML ='Please enter city name.';
            }
            else{
        
                document.querySelector('.temp').innerHTML = data.main.temp+'ºc';
                document.querySelector('.city').innerHTML = data.name+','+data.sys.country;
                document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
                document.querySelector('.wind').innerHTML = (data.wind.speed*(18/5)).toFixed(2)+' km/h';
                const image_change = document.querySelector('.weather_icon');
                if(data.weather[0].main == 'Clouds'){
                    image_change.src ="Images/6.png";
                    console.log(image_change.src);
                }
                else if(data.weather[0].main == 'Sunny'){
                    image_change.src ="Images/4.png";
                    console.log(image_change.src);
                }
                else if(data.weather[0].main == 'Rain'){
                    image_change.src ="Images/1.png";
                    console.log(image_change.src);
                }
                else if(data.weather[0].main == 'Haze'){
                    image_change.src ="Images/5.png";
                    console.log(image_change.src);
                }
                const information = document.querySelector('.warning');
                information.style.color = 'white';
                document.querySelector('.warning').innerHTML ='Information about '+data.name +' city';
            }


        }
            
    }


const searchbtn = document.querySelector('.action_btn');
searchbtn.addEventListener('click',function(){
    const searchval = document.getElementById('searchval').value;
    const design = document.querySelector('.warning').innerHTML ='Just wait few secounds'; 
    checkWeather(searchval);
    document.getElementById('searchval').value = "";
})


