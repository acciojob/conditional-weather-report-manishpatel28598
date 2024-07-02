import React from 'react'

function WeatherDisplay({weather}) {

    const {temperature, conditions} = weather;

    const tempStyle = {
        color: temperature>20?'red':'blue'

    }
  return (
    <div> 
      <span style={tempStyle}>Temperature: {temperature}
      <p>{conditions}</p>
      </span>

    </div>
  )
}

export default WeatherDisplay
