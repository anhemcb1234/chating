import { useState } from "react";
import {userServices} from './services/userServices'

function Weather() {
    const[idCity, setIdCity] = useState('');
    const[data, setData] = useState([])
    const handlerLatitude = (e) => {
        setIdCity(e.target.value)
    }
    async function handlerClick() {
        const res = await userServices.getWeather(idCity);
        setData(res.data)
    }
    return (
        <div className="container mx-auto">
            <h1>Weather</h1>
            <label>Id city</label>
            <input onChange={e => handlerLatitude(e)} className="mx-5" placeholder="Latitude"/>
            <button onClick={handlerClick}>Click</button>
            {data? <p>{data.base}</p>     : ''}       
        </div>
    )
}
export default Weather