import React from 'react';
const API_KEY = '690c05e3da024d725c5a1d37a60fa29d';

const Form = () => {
    const handleSubmitWeather = event => {
        event.preventDefault(); // turn off default behavior of func 'onSubmit'
        const city = event.currentTarget.city.value.trim();
        console.log(city);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(body => {
                console.log(body);
            })
            .catch(e => console.log(e));
    }

    return (
        <div>
            <form onSubmit={handleSubmitWeather}>
                <input type='text' name='city' placeholder='City'/>
                <button type='submit'>Get weather</button>
            </form>
        </div>
    );
};

export default Form;