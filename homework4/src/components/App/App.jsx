import CitySelector from '../CitySelector/CitySelector.jsx';
import CityCard from '../CitySelector/CityCard/CityCard.jsx';
import MathQuiz from '../MathQuiz/MathQuiz.jsx';
import Answer from '../MathQuiz/Answer/Answer.jsx';

import './App.css'
import { citiesData } from '../CitySelector/citySelector.js';
import { useState } from 'react';

function App() {
  const [selectCity, setSelectCity] = useState(citiesData[0])

  const handleSelectCity = (cityName) => {
    const city = citiesData.find((c) => c.name === cityName);
    setSelectCity(city);
  };

  return (
    <>
      Задание 1
      <CitySelector items={citiesData} onSelectCity={handleSelectCity} />
      <CityCard city={selectCity} />
      Задание 2
      <MathQuiz/>
      
    </>
  )
}

export default App
