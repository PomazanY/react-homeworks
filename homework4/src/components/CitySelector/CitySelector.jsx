import styles from "./CitySelector.module.css";

const CitySelector = ({ items, onSelectCity }) => {
    const elements = items.map((item, index) => (
        <option key={index} value={item.name}>{item.name}
        </option>
      ))
   
    return (
        <div>
          <h2>Выберите город:</h2>
          <select onChange={(event) => onSelectCity(event.target.value)}>
            <option>{items[0].name}</option>
            {elements}
          </select>
        </div>
      );
}
export default CitySelector;

 


