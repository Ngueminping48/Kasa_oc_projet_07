import data from '../../assets/data.json';
import { useState } from 'react';
import './collapse.css';

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }
    console.log(data);
    return (
        <details className={`collapse ${isOpen ? 'open' : 'closed'}`}>
            <summary className='collapse-title' onClick={toggleOpen}>{title}
            <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`} ></i>
            </summary>
            <div className='collapse-content'>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index} className='collapse-item'>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </details>
    );
};

export default Collapse
