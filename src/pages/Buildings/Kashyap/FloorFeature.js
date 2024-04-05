import React, {useState} from 'react';

function Popup() {
    return (
        console.log("This is a popup")
    );
}
function HoverFeature() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter ={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered && <Popup />}
        </div>
    );
}

export default HoverFeature;
