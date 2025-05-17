import { useEffect, useRef } from "react";

const ValueDisplay = ({ value }) => {
    const prevValueRef = useRef('');


    useEffect(() => {
        prevValueRef.current = value;
    }, [value]);


    return (
        <div>
            <p>Current value {value}</p>
            <p>Previous value {prevValueRef.current}</p>
        </div>
    )
}
export default ValueDisplay;

