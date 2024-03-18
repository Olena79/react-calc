import './index.css';

export default function Button ({ children, style, onClick, value  }) {
    return (
        <div data-value={value} onClick={onClick} style={style && style} className='button'>{children}</div>
    );
}; 