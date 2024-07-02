import React from 'react'

function WeatherDisplay({weather}) {

    const {temperature, conditions} = weather;

    const tempStyle = {
        color: temperature>20?'red':'blue'

    }
  return (
    <div>
      <div style={tempStyle}>{temperature}°C</div>
      <div>{conditions}</div>
    </div>
  )
}

export default WeatherDisplay
