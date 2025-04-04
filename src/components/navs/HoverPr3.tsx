// import React from 'react';

// const HoverPr3 = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default HoverPr3;













import React, { useEffect, useRef, useState } from 'react';
import { ServicesItems } from './ServicesItems'; // Assume this is a reusable dropdown component

const menuItems = [
    { key: 'pages', label: 'Pages', dropdown: <><p>Page 1</p><p>Page 2</p></> },
    { key: 'services', label: 'Services', dropdown: <ServicesItems /> },
    { key: 'about', label: 'About', dropdown: <><p>Team</p><p>Company</p></> },
    { key: 'contact', label: 'Contact', dropdown: <><p>Email</p><p>Phone</p></> }
];

const HoverPr3: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedInsideAny = Object.values(dropdownRefs.current).some(ref =>
                ref?.contains(event.target as Node)
            );
            if (!clickedInsideAny) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='bg-black flex gap-6 p-4'>
            {menuItems.map(({ key, label, dropdown }) => (
                <li
                    key={key}
                    className='relative list-none text-white cursor-pointer'
                    ref={el => (dropdownRefs.current[key] = el)}
                    onMouseEnter={() => setOpenDropdown(key)}
                >
                    <p>{label}</p>
                    {openDropdown === key && (
                        <div className='bg-gray-200 p-3 absolute top-6 left-0 text-black shadow rounded z-10'>
                            {dropdown}
                        </div>
                    )}
                </li>
            ))}
        </div>
    );
};

export default HoverPr3;
