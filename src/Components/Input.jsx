// export default function Input({ type = 'text', ...props }) {
//     return (
//         <input
//             {...props}
//             className={
//                 'transition duration-1000 w-full focus:outline-none focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
//             }
//             type={type}
//         />
//     );
// }

import { useEffect } from 'react';
import { useRef } from 'react';
import { forwardRef } from 'react';

const Input = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            {...props}
            className={
                'transition duration-1000 w-full focus:outline-none focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg text-black'
            }
            type={type}
        />
    );
};

export default Input;
