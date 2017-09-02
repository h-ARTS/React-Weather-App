import React from 'react';

const About = props => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a Weather Application based on <a href="https://facebook.github.io/react/">React</a> view framework. It uses <a href="http://foundation.zurb.com">Foundation</a> for styling and <a href="http://www.heroku.com">Heroku</a> for the deployment. Also to fetch the desired weather, I used <a href="https://openweathermap.org">OpenWeatherMap</a> API.</p>
        </div>
    );
};

export default About;