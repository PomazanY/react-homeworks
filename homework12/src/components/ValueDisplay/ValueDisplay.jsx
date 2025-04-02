import { useEffect, useRef, useState } from "react";

const ValueDisplay = ({ value }) => {
    const prevValueRef = useRef('');
    const [prev, setPrev] = useState('')

    useEffect(() => {
        setPrev(prevValueRef.current)
        prevValueRef.current = value;
    }, [value])

    return (
        <div>
            <p>Current value {value}</p>
            <p>Previous value {prev}</p>
        </div>
    )
}
export default ValueDisplay;

