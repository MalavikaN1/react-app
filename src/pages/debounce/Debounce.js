import React, {useState, useEffect} from "react";

export function Debounce() {

    const [searchTerm, setSearchTerm] = useState(null);
    const [debouncedTerm, setDebouncedTerm] = useState(null);
    const [result, setResult] = useState({})

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 2000);

        return () => {
            clearTimeout(handler);
        }
    }, [searchTerm]);

    useEffect(() => {
        getData(debouncedTerm);
    }, [debouncedTerm]);

    const getData = async(searchKey) => {
        const resp = await fetch(`https://api.agify.io/?name=${searchKey}`);
        const data = await resp.json();
        setResult(data);
    }

    return (
        <>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            Name - {result.name} age - {result.age}
        </>
    )
}
