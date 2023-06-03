import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function useJoke(name) {
    const [joke, setJokes] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            setJokes(data);
        };
        getJoke().then((r) => r);
    }, [name]);
    return joke;
}
