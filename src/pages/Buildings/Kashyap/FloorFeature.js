import React, {useState} from 'react';

function Popup() {
    return (
        <div className="popup absolute w-[8vh] h-[10vh] bg-black">This is the popup content!</div>
    );
}
function HoverFeature() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onmouseenter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered && <Popup />}
        </div>
    );
}

export default HoverFeature;
