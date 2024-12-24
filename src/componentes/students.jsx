import React from 'react';
import { Link } from 'react-router-dom';
const Students = () => {
    return (
        <div>
            <p>All Students</p>
            <Link to="/student/1">student 1</Link>
            {/* <Link to=`/student/${id}`>student 1</Link> */}
        </div>
    );
}

export default Students;
