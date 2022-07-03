import * as React from "react";
import "../styles/Main.css";
import  {useState, useEffect} from "react";
import axios from "axios";
import Current from "./Current_weather";
import Hourly from "./Hourly_weather";
import Week from "./Week_weather";
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Main() {
    const [city, setCity] = useState('Москва'); // отслеживаем изменение города
    const [lat, setLat] = useState(55.7522); // отслеживаем изменение текущих координат, по умолчанию - Москва
    const [lon, setLon] = useState(37.6156);
    const [widget, setWidget] = useState('current'); // Отслеживаем какой виджет (компонент) показывать
    const [current, setCurrent] = useState([]);
    const [day, setHourly] = useState([]);
    const [week, setWeek] = useState([]);
    const [pict, setIcon] = useState('03n');
    const [key_ipgeolocation, setKey1] = useState();
    const [key_openweathermap, setKey2] = useState();
    const citilist = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород',
    'Челябинск', 'Самара', 'Ростов-на-Дону', 'Уфа', 'Омск', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград'];


    // Получаем ключи с моего ресурса
    useEffect(() => {
        axios.get(`https://home-update.ru/api/ipgeolocation`).then(res => {
            setKey1(res.data[0].key);
        });
    }, []);
    useEffect(() => {
        axios.get(`https://home-update.ru/api/openweathermap_yandex`).then(res => {
            setKey2(res.data[0].key);
        });
    }, []);


    // Наполняем содержимое select
    const options = citilist.map((text, index) => {
        return <option key={index}>{text}</option>;
    });


    // Функции вычисления текущей геопзиции
    function getMyPosition() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    function onSuccess(geolocationData) {
        setLat(geolocationData.coords.latitude);
        setLon(geolocationData.coords.longitude);
        setWidget("current");
        axios.get(`https://api.ipgeolocation.io/timezone?apiKey=${key_ipgeolocation}&lat=${lat}&lng=${lon}`).then(res => {
            setCity(res.data.geo.city);
        });
    };
    function onError(error) {
      console.log('Информация о местоположении недоступна');
      console.log(error.message);
    };


    // Получаем координаты выбранного города
    useEffect(() => {
        if (key_openweathermap !== undefined) {
            axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}','RUS'&limit=1&appid=${key_openweathermap}`).then(res => {
            setLat(res.data[0].lat);
            setLon(res.data[0].lon);
            console.log('координаты выбранного города', res.data[0].lat, res.data[0].lon)
        });
        };
    }, [city, key_openweathermap]);


    // Получаем данные о погоде на «сейчас»; «ближайшие два дня» (почасово на двое суток); «на этой неделе» (следующие семь дней).
    useEffect(() => {
        if (key_openweathermap !== undefined) {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key_openweathermap}&units=metric`).then(res => {
                setCurrent(res.data.current);
                setHourly(res.data.hourly);
                setWeek(res.data.daily);
                setIcon(res.data.current.weather[0].icon);
                console.log('res.data ', res.data)
            });
        };
    }, [lat, lon, key_openweathermap]);

    return (
        <main>
        <Routes>
        <Route path='/test' element={<Hourly />} />
            <div>
                {(widget === "current" && key_openweathermap !== undefined ) &&
                    <div>
                        <Current key1={key_openweathermap} lat={lat} lon={lon} city={city} />
                    </div>
                }

                {widget === "48hours" &&
                    <div>
                        <div className="city">{city}</div>
                        <div className="widgets">
                        {day.map((value,index) =>
                            <Hourly day={index} temp={value.temp} icon={value.weather[0].icon} key={value.dt}/>
                        )}
                        </div>
                    </div>
                }

                {widget === "week" &&
                    <div>
                        <div className="city">{city}</div>
                        <div className="widgets">
                            {week.map((value,index) =>
                                <Week day={index} temp={value.temp.day} icon={value.weather[0].icon} key={value.dt}/>
                            )}
                        </div>
                    </div>
                }
                <div className='button'>
                    <button onClick={getMyPosition}>Найти меня</button>
                    <select value={city} onChange={e=>setCity(e.target.value)}>
                        <option disabled>Выберите город</option>
                        {options}
                    </select>

                    <button onClick={e=>setWidget("current")}>Сегодня</button>
                    <button onClick={e=>setWidget("48hours")}>На 48 часов</button>
                    <button onClick={e=>setWidget("week")}>На неделю</button>
                </div>
            </div>
        </Route>
        </Routes>
        </BrowserRouter>
        </main>
    );
};

export default Main;
