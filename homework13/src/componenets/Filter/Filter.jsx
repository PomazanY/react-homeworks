import { useSelector, useDispatch } from "react-redux";

import { filterItem } from "../../redux/actionCreators";


const Filter = () => {

    const dispatch = useDispatch()
    const filter = useSelector(store => store.filter)


    const handleChange = event => {
        dispatch(filterItem(event.target.value))
    }
    return (
        <div>
            <input
                type="text"
                placeholder="filter users"
                value={filter}
                onChange={handleChange} />
        </div>
    )
}
export default Filter;