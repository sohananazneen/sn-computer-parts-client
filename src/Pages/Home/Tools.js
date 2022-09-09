import React from 'react';
import useTools from '../../hooks/useTools';
import Tool from './Tool';
const Tools = () => {
    const [services] = useTools();
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h1 className='text-secondary text-xl font-bold uppercase'>Computer Tools</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Tool
                        key={service._id}
                        service={service}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;