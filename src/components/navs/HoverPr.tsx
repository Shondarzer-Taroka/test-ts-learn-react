import React, { useState, useRef, useEffect } from "react";

const HoverPr = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Services menu item */}
            <div
                className="bg-black text-white p-3 cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
            >
                <li className="list-none">Services</li>
            </div>

            {/* Dropdown Component */}
            {isOpen && (
                <div className="absolute left-0 mt-2 bg-white text-black p-4 shadow-lg rounded">
                    <p>Service 1</p>
                    <p>Service 2</p>
                    <p>Service 3</p>
                </div>
            )}
        </div>
    );
};

export default HoverPr;
