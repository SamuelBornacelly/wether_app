import { useState } from "react"

const WetherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className="article__container">
      <h1 className="article__h1">Weather App</h1>
      <h2 className="article__h2">{weather?.name}, {weather?.sys.country}</h2>
      <div className="article__div_container">
        <div className="article__div_img">
        <img className="article__img" 
        src={weather && `https://openweathermap.org/img/wn/${weather['weather'][0]['icon']}@4x.png`}
        alt=""
        />
        </div>
        <section className="article__section">
          <h3 className="article__h3">"{weather?.weather[0].description}"</h3>
          <ul className="article__ul">
            <li className="article__li"><span className="article__span_1">Wind Speed </span><span className="article__span_2">{weather?.wind.speed} m/s</span></li>
            <li className="article__li"><span className="article__span_1">Clouds </span><span className="article__span_2">{weather?.clouds.all} %</span></li>
            <li className="article__li"><span className="article__span_1">Pressure </span><span className="article__span_2">{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2 className="article__h2">{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit} °F`}</h2>
      <button className="article__button" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F': 'Change to °C'}</button>
      <img className='container__img' src="../public/4.png" alt="" />
    </article>
  )
}

export default WetherCard