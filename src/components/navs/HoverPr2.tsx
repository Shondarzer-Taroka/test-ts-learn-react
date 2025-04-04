import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HoverPr2: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const drop = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        console.log(drop.current);
        function handleClickOutside(event: MouseEvent) {
            console.log(event);

            if (drop.current && !drop.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div>
            <div>
                <li className='relative list-none bg-black text-white'

                    ref={drop}
                    onMouseEnter={() => setIsOpen(true)}
                >
                    <Link to={'/pages'}>Pages</Link>

                    {isOpen && <div className='bg-gray-200 p-3'>
                        <p>Service 1</p>
                        <p>Service 1</p>
                        <p>Service 1</p>
                    </div>}

                </li>
            </div>
        </div>
    );
};

export default HoverPr2;