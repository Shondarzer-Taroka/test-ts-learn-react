// import React, { useEffect, useRef, useState } from 'react';
// import { ServicesItems } from './ServicesItems'; // Assume this is a reusable dropdown component

// const menuItems = [
//     { key: 'pages', label: 'Pages', dropdown: <><p>Page 1</p><p>Page 2</p></> },
//     { key: 'services', label: 'Services', dropdown: <ServicesItems /> },
//     { key: 'about', label: 'About', dropdown: <><p>Team</p><p>Company</p></> },
//     { key: 'contact', label: 'Contact', dropdown: <><p>Email</p><p>Phone</p></> }
// ];

// const HoverPr4: React.FC = () => {
//     const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//     const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});

//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             console.log('values',Object.values(dropdownRefs.current));

//             const clickedInsideAny = Object.values(dropdownRefs.current).some(ref =>

//                 ref?.contains(event.target as Node)
//             );
//             console.log(clickedInsideAny);

//             if (!clickedInsideAny) {
//                 setOpenDropdown(null);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <div className='bg-black flex gap-6 p-4'>
//             {menuItems.map(({ key, label, dropdown }) => (
//                 <li
//                     key={key}
//                     className='relative list-none text-white cursor-pointer'
//                     ref={el => {
//                         dropdownRefs.current[key] = el;
//                     }}
//                     onMouseEnter={() => setOpenDropdown(key)}
//                 >
//                     <p>{label}</p>
//                     {openDropdown === key && (
//                         <div className='bg-gray-200 p-3 absolute top-6 left-0 text-black shadow rounded z-10'>
//                             {dropdown}
//                         </div>
//                     )}
//                 </li>
//             ))}
//         </div>
//     );
// };

// export default HoverPr4;


import React from 'react';
import { ServicesItems } from './ServicesItems';


const menuItems = [
    {
        key: "pages",
        label: "Pages",
        dropdown: <ServicesItems />
    },
    {
        key: "contact",
        label: "Contact",
        dropdown: <ServicesItems />
    },
    {
        key: "about",
        label: "About",
        dropdown: <ServicesItems />
    },
]
const HoverPr4: React.FC = () => {
    return (
        <section>
            <div className='bg-black text-white flex gap-4'>
                {
                    menuItems.map(({ key, label, dropdown }) => {
                        return <>
                            <li
                                className='list-none p-4 relative'
                            > {label}

                                <div className='absolute top-[59px] bg-gray-600 w-[60px]'>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                </div>

                            </li>
                        </>
                    })
                }
            </div>
        </section>
    );
};

export default HoverPr4;