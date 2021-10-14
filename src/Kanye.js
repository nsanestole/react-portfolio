import { useState, useEffect} from 'react';
import env from 'react-dotenv';
const Kanye = () => {

    const [quote, setQuote] = useState(undefined);

    useEffect(() => {
       
    },[]);

    return(
        <div>{quote}</div>
    );
}

export default Kanye;