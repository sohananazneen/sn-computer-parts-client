import React from "react";

const Contact = () => {
    return (
        <section className='my-28'>
            <div className='px-10 py-14 shadow-inner'>
                <div className='text-center pb-14'>
                    <h1 className='text-secondary text-xl font-bold uppercase'> Contact Us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5 shadow-md shadow-indigo-500/50 p-3 border'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input w-full max-w-md bg-secondary text-white'
                    />
                    <label>Subject</label>
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full max-w-md bg-secondary text-white'
                    />
                    <label>Message</label>
                    <textarea
                        className='textarea w-full max-w-md bg-secondary text-white'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;