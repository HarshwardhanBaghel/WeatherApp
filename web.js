const cond = document.getElementById('condition')
const search = document.getElementById('search')
const city = document.getElementById('city')
const degree = document.getElementById('degree')
const chill = document.getElementById('chill')
const humid = document.getElementById('humid')
const sunrise = document.getElementById('sunrise')
const sunset = document.getElementById('sunset')


function searchbtn()
{
    if(search.value.length > 0 )
    {
        if(search.value == Number){
            console.log("Wrong Input")
        }
        city.innerText = search.value.toUpperCase()
    }
    else{
        city.innerText = "City"
    }
    try {
        const url1 = fetch('https://yahoo-weather5.p.rapidapi.com/weather?location='+`"${search.value}"`+'&format=json&u=f',{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f1073cd5f1msh58c8d27651fe685p17921cjsnfd84928a5734',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        }).then(res => res.json())
          .then(data => {
            const temp = (data.current_observation.condition.temperature - 32)*5/9
            cond.innerText = data.current_observation.condition.text ? data.current_observation.condition.text : " " 
            degree.innerText = temp.toFixed(1) ? temp.toFixed(1) : " " 
            chill.innerText = data.current_observation.wind.chill ? data.current_observation.wind.chill : " "
            humid.innerText = data.current_observation.atmosphere.humidity ? data.current_observation.atmosphere.humidity : " "
            sunrise.innerText = data.current_observation.astronomy.sunrise ? data.current_observation.astronomy.sunrise : " "
            sunset.innerText = data.current_observation.astronomy.sunset ? data.current_observation.astronomy.sunset : " "
            
        })
    } catch (error) {
        console.log(error);
    }
 
}
