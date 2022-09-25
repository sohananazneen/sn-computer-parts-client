import React from 'react';
import { useState } from 'react';
import useTools from '../../hooks/useTools';
import SingleTool from './SingleTool';

const Tools = () => {
    const [tools, setTools] = useTools();

    return (
        <section className='my-28'>
            <div className='text-center pb-14'>
                <h1 className='text-secondary text-xl font-bold uppercase'>Computer Tools</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.map(service => <SingleTool
                        key={service._id}
                        service={service}
                    ></SingleTool>)
                }
            </div>
        </section>
    );
};

export default Tools;