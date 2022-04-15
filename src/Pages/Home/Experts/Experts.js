import React from 'react';
import './Experts.css'

import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Mehedi', img: expert1 },
    { id: 2, name: 'tehedi', img: expert2 },
    { id: 3, name: 'will smith', img: expert3 },
    { id: 4, name: 'Cris rock', img: expert4 },
    { id: 5, name: 'Messi vai', img: expert5 },
    { id: 6, name: 'Ronaldo Bro', img: expert6 }
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h2 className='text-center text-primary my-4'>Our Experts</h2>
            <div className='row gy-3'>
                {
                    experts.map(expert => <Expert key={expert.id}
                        expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;