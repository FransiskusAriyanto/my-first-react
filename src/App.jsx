import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Counter from './components/Counter';
import Input from './components/Input';
import Lable from './components/Lable';
import PlaceContentCenter from './components/PlaceContentCenter';
import Todo from './components/Todo';
import useJoke from './hooks/useJoke';

function App(props) {
    // const type = 'submit';
    // const onClick = () => console.log('Login With Another Style!!!!!!');
    // return (
    //     <div className={'bg-slate-100 text-slate-800 tracking-tight anitialiased flex items-center justify-center min-h-screen'}>
    //         <div className={'max-w-md w-full'}>
    //             <Card>
    //                 <Card.Title>Hello World</Card.Title>
    //                 <Card.Body>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui amet consectetur veritatis perspiciatis porro magnam
    //                     facere ipsum aliquid, corrupti quibusdam neque? Ex at quos id commodi numquam unde atque!
    //                 </Card.Body>
    //                 <Card.Footer>
    //                     <Button {...{ type: 'submit', onClick: () => console.log('Login with another style') }}>
    //                         <IconBrandFacebook />
    //                         Login
    //                     </Button>
    //                     <Button {...{ type, onClick }} className='bg-sky-600'>
    //                         <IconBrandTwitter />
    //                         Login
    //                     </Button>
    //                     <Button className='bg-black' onClick={() => console.log('Login')} type='button'>
    //                         <IconBrandGithub />
    //                         Login
    //                     </Button>
    //                     <Button className='bg-green-600' onClick={() => console.log('Login')}>
    //                         Login WithOut Children/icon
    //                     </Button>
    //                 </Card.Footer>
    //             </Card>
    //         </div>
    //     </div>
    // );

    // return (
    //     <PlaceContentCenter>
    //         <Counter intialValue={0} />
    //     </PlaceContentCenter>
    // );

    //Form Login & Register

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    // });

    // function onChange(event) {
    //     setForm({ ...form, [event.target.name]: event.target.value });
    // }

    // function submit(event) {
    //     event.preventDefault();
    //     console.log(form);
    // }

    // return (
    //     <PlaceContentCenter>
    //         <Card>
    //             <Card.Title>Sing up for new account!</Card.Title>
    //             <form onSubmit={submit}>
    //                 <div className={'mb-5 border rounded-lg p-4'}>
    //                     <p>Name : {form.name || '.....'}</p>
    //                     <p>Email : {form.email || '.....'}</p>
    //                 </div>

    //                 <Card.Body>
    //                     <div className='mb-6'>
    //                         <Lable htmlFor='name' value={'Name'} />
    //                         <Input value={form.name} onChange={onChange} id={'name'} name={'name'} />
    //                     </div>

    //                     <div className='mb-6'>
    //                         <Lable htmlFor='email' value={'Email'} />
    //                         <Input value={form.email} onChange={onChange} id={'email'} name={'email'} />
    //                     </div>
    //                 </Card.Body>

    //                 <Card.Footer>
    //                     <Button>
    //                         <IconBrandGithub />
    //                         Register
    //                     </Button>
    //                 </Card.Footer>
    //             </form>
    //         </Card>
    //     </PlaceContentCenter>
    // );

    // Todo
    // return (
    //     <PlaceContentCenter>
    //         <Todo />
    //     </PlaceContentCenter>
    // );

    // userRef
    // const [tick, setTick] = useState(0);

    // current untuk mengambil value
    // ketika ingin state yang tidak rerender, gunakan useRef
    // ketika ingin state yang render, gunakan useState

    // const inputRef = useRef(null);

    // function handleClick() {
    //     // inputRef.current.focus();
    //     // console.log(inputRef);
    //     // tick.current = tick.current + 1
    //     // console.log(tick.current);
    //     // const nextTick = tick + 1;
    //     // setTick(nextTick);
    //     // console.log(nextTick);
    // }

    // return (
    //     <PlaceContentCenter>
    //         <Card>
    //             <Card.Title>useRef Hooks</Card.Title>
    //             <Card.Body>
    //                 {/* <input className={'border border-slate-500'} ref={inputRef} /> */}
    //                 <Input isFocused className={'border border-slate-500'} />
    //                 <Button onClick={handleClick}>Tick</Button>
    //             </Card.Body>
    //             {/* <Card.Footer>You clicked {tick.current} times</Card.Footer> */}
    //         </Card>
    //     </PlaceContentCenter>
    // );

    // belajar useEffect

    // const [name, setName] = useState('');
    // const [online, setOnline] = useState(false);
    // const [scrollPosition, setScrollPosition] = useState(window.scroll);

    // useEffect(() => {
    //     // console.log('I always render');
    // });

    // useEffect(() => {
    //     // console.log('First render');
    // }, []);

    // useEffect(() => {
    //     // console.log(`I am now ${online ? 'online' : 'offline' }.`);
    // }, [online]);

    // function updateScrollPosition() {
    //     const windowScrolling = window.scrollY;
    //     console.log(`Window scroll position: ${windowScrolling}`);
    //     setScrollPosition(windowScrolling);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', updateScrollPosition);
    // }, []);

    // return (
    //     <div className={'h-[4000px]'}>
    //         <Input value={name} onChange={(e) => setName(e.target.value)} />
    //         <Button onClick={(e) => setOnline(online => !online)}>Set Online</Button>
    //     </div>
    // );

    // api consume
    // const [loading, setLoading] = useState(false)
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     async function getUsers() {
    //         setLoading(true)
    //         try {
    //             const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    //             setUsers(data);
    //             setLoading(false)
    //         } catch (e) {
    //             setLoading(false)
    //             console.log(e);
    //         }
    //     }
    //     getUsers().then((r) => r);
    // }, []);

    // return (
    //     <PlaceContentCenter>
    //         <Card>
    //             <Card.Title>Users: {users.length}</Card.Title>
    //             <Card.Body>
    //                 {loading ? <div>Loading....</div> : <ol>
    //                         {users.map((user) => (
    //                             <li key={user.id}>
    //                                 {user.name} ({user.username})
    //                             </li>
    //                         ))}
    //                     </ol>}

    //             </Card.Body>
    //         </Card>
    //     </PlaceContentCenter>
    // );

    // belajar hook

    const nameRef = useRef();
    const [name, setName] = useState('Biji');
    const joke = useJoke(name);

    const generateJoke = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Joke</Card.Title>
                <Card.Body>
                    <p className={'mb-4'}>{joke.value}</p>

                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateJoke}>Generate Joke</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
