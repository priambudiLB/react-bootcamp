import Axios from 'axios';
import { useState, useEffect } from 'react';

function CatFact() {
    const [data, setData] = useState('')
    useEffect(() => {
        Axios.get('https://catfact.ninja/fact')
            .then(response => {
                setData(response.data.fact)
            })
    }, [])
    return <p>{data}</p>
}

export default CatFact;