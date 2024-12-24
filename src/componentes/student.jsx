import React from 'react';
import { useParams } from 'react-router-dom';
const Student = () => {
    const params = useParams()
    const studentId = params.id
    return (
        <div>
            <p>Details about student {studentId}</p>
        </div>
    );
}

export default Student;
