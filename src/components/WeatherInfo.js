import React from 'react';

const WeatherInfo = props => {

    console.log(props)

      

    return (

        <div className="container flex mx-auto w-full items-center justify-center">
            {
                props.error &&

                <div className="alert alert-danger">
                <p>{props.error}</p>
                </div>

            }

            {
                props.temperature ?
                <div className="flex flex-col bg-gray-100 p-4 font-mono">
                    <p>
                    Location: {props.city}. {props.country}
                    </p>
                    <p>
                    Temperature: {props.temperature} °C, {props.description}
                    </p>
                    <p>
                    Humidity: {props.humidity}
                    </p>
                    <p>
                    Wind Speed: {props.wind_speed}
                    </p>
                </div>

                :

                
                    <div class="py-3 px-5 mb-4 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200 flex items-center" role="alert">
                        <div class="w-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span> No request yet — check it out!</span>
                    </div>
                


            }

            
        </div>

        
    )

}

export default WeatherInfo;