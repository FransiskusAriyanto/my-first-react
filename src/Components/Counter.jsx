import { useState } from 'react';
import Button from './Button';

export default function Counter({ intialValue }) {
    const [count, setCount] = useState(intialValue);

    function handleClick() {
        setCount((x) => x + 1);
    }

    function handleClickMin() {
        setCount((x) => x - 1);
    }
    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex items-center gap-4'>
                <Button onClick={handleClick}>Count + 1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}>
                    Count + 3
                </Button>
            </div>
            <div className='mt-5 flex items-center gap-4'>
                <Button onClick={handleClickMin}>Count - 1</Button>
                <Button
                    onClick={() => {
                        handleClickMin();
                        handleClickMin();
                        handleClickMin();
                    }}>
                    Count - 3
                </Button>
            </div>
        </div>
    );
}
