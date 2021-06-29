import React from 'react';

const WeatherForm = props => (
    <div className="container flex mx-auto w-full items-center justify-center py-10">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your city name" className="bg-purple-white shadow rounded border-0 p-3" autoFocus />   
            </div>
            <br />
            <div className="form-group">
                <input type="text" name="country" placeholder="Your country name" className="bg-purple-white shadow rounded border-0 p-3" />
            </div>
            <br />
            <button className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">Get Weather</button>
        </form>

    </div>
)

export default WeatherForm;