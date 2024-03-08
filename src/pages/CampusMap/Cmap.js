import React from 'react';
import './styles.css'; // Import external CSS file

const CampusMap = () => {
    // Function to handle tooltip visibility
    const toggleOn = (name, branch, floorCount) => {
        const element = document.getElementById("popup");
        element.innerHTML = `<img src="images/earth.webp">
            <p class="pt-12">Building Name: <b>${name}</b></p>
            <p class="py-6">Branch: <b>${branch}</b></p>
            <p>Floors: <b>${floorCount}</b></p>`;
        element.classList.remove('tooltipOff');
        element.classList.add('tooltipOn');
    };

    const toggleOff = () => {
        const element = document.getElementById("popup");
        element.classList.remove('tooltipOn');
        element.classList.add('tooltipOff');
    };

    return (
        <div className="flex justify-between items-center h-screen bg-gray-400 overflow-x-scroll text-sm p-10">
            <div className="relative w-auto h-full bg-gray-200 shadow-lg rounded-lg p-6 aspect-video">

                {/* Your map elements here */}

                <div id="popup" className="tooltipOn tooltipOff invisible"></div>
            </div>
        </div>
    );
};

export default CampusMap;
