import { useState, useEffect} from 'react';
import env from 'react-dotenv';
const Kanye = () => {

    const [quote, setQuote] = useState(undefined);

    useEffect(() => {
        fetch(env.KANYE_API_URL)
        .then((res) => {
            return res.json();
        })
        .then((data => {
            setQuote(data.quote);
        }))
        .catch((err) => {

        })
    },[]);

    return(
        <div>{quote}</div>
    );
}

export default Kanye;