import React, { useState } from 'react';

const Square = ( {value, onClickEvent} ) => {
    return (
        <button onClick={onClickEvent} className='square-box'>
            {value}
        </button>
    );
}

export default Square;
