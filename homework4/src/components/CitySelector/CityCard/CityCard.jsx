const CityCard = ({ city }) => {
    // if (!city) return <p>Выберите город, чтобы увидеть информацию</p>;
    const elements = city.facts.map((fact, i) => <li key={i}>{fact}</li>)
    return (
        <div>
            <h2>{city.name}</h2>
            <img src={city.imageUrl} alt={city.description} width='500'/>
            <p>{city.description}</p>
            <ul>
                {elements}
            </ul>
        </div>
    )
}
export default CityCard;