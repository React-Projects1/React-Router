import React from 'react';
import { useNavigate } from 'react-router-dom';
const Goback = () => {
    const x = useNavigate()
    return (
        <div>
            <button onClick={()=>x(-1) }>Goback</button>
        </div>
    );
}

export default Goback;
