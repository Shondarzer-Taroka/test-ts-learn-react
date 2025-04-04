import  { useState } from 'react';
import { Link } from 'react-router-dom';

const NavsWithMouseHover = () => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const menuItems = [
        { name: 'Home', path: '/', subMenu: [] },
        { name: 'Services', path: '/services', subMenu: [
            { name: 'Web Development', path: '/services/web-development' },
            { name: 'App Development', path: '/services/app-development' },
        ] },
        { name: 'About', path: '/about', subMenu: [] },
        { name: 'Contact', path: '/contact', subMenu: [] }
    ];

    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-6">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="relative"
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <Link to={item.path} className="hover:text-yellow-400">{item.name}</Link>
                        {item.subMenu.length > 0 && hoveredItem === index && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md p-2">
                                {item.subMenu.map((sub, subIndex) => (
                                    <li key={subIndex} className="p-2 hover:bg-gray-200">
                                        <Link to={sub.path}>{sub.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavsWithMouseHover;
