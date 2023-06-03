function Card({ children }) {
    return <div className={'shadow rounded-lg overflow-hidden bg-white text-black'}>{children}</div>;
}

function Title({ children }) {
    return (
        <div className={'p-4 border-b'}>
            <h1 className={'text-xl '}> {children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className={'leading-relaxed p-4'}>{children}</div>;
}

function Footer({ children }) {
    return <div className={'flex bg-slate-50 px-2 py-2'}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
