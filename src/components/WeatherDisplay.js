import React from 'react'

function WeatherDisplay({weather}) {

    const {temperature, conditions} = weather;

    const tempStyle = {
        color: temperature>20?'red':'blue'

    }
  return (
    <div>
      <p style={tempStyle}>{temperature}°C</p>
      <p>{conditions}</p>
    </div>
  )
}

export default WeatherDisplay
