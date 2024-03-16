import React from 'react';

function Overlap() {
    return (
        <div style={{ position: 'relative'}}>
        <div style={{ position: 'absolute', top:0, left: 100, backgroundColor: 'red', zIndex: 2}}>
        </div>
        </div>
    );
}

export default Overlap;