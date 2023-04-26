import React, {useState, useEffect, useMemo} from "react";

export function Throttle() {

    const [searchTerm, setSearchTerm] = useState(null);
    const [result, setResult] = useState({})

    // callback is function
    function throttle(callback, delay) {
        let prev = 0;
        return function(...args) {
            let curr = Date.now();
            let gap = curr - prev;
            if(gap > 0) {
                prev = curr + delay;
                callback.call(this, ...args);
            }
            return;
        }
    }    

    const getData = async(searchKey) => {
        const resp = await fetch(`https://api.agify.io/?name=${searchKey}`);
        const data = await resp.json();
        setResult(data);
    }

    const throttledFunction = useMemo(() => 
    throttle(getData, 5000), 
    []);

    useEffect(() => {
        throttledFunction(searchTerm);
    }, [searchTerm, result ]);


    return (
        <>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            Name - {result.name} age - {result.age}
        </>
    )
}
