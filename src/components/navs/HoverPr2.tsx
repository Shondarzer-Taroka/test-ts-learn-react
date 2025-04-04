import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HoverPr2: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const drop = useRef<HTMLLIElement | null>(null)

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
            <div className='bg-black flex gap-6'>
                <li className='relative list-none  text-white'

                    ref={drop}
                    onMouseEnter={() => setIsOpen(true)}
                >
                    <p>Pages</p>

                    {isOpen && <div className='bg-gray-200 p-3 absolute top-6'>
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