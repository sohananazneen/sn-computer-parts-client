import React from 'react';
import ppImg from '../../assets/images/pp.jpg'
import project1 from '../../assets/images/Projects/project1.png'
import project2 from '../../assets/images/Projects/project2.png'
import project3 from '../../assets/images/Projects/project3.png'
import { FaLaptopCode } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { GrCodepen } from 'react-icons/gr';
import { FaCentercode } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div className='flex h-screen justify-center items-center text-center'>
            <div className="card w-max bg-base-100 shadow-xl image-full">
                <figure>
                    <img src={ppImg} alt="pp" />
                </figure>
                <div className="card-body">
                    {/* Info  */}
                    <div className='my-4'>
                        <h1 className='text-xl font-bold'>Portfolio:</h1>
                        <h2 className='text-xl'>Sohana Nazneen</h2>
                        <div className="tooltip" data-tip="sohana.nazneen.1@gmail.com">
                            <p>E-mail |</p>
                        </div>
                        <div className="tooltip" data-tip="B.Sc. (Hons) in CSE">
                            <p>| Educational Background</p>
                        </div>

                    </div>

                    {/* Techcno  */}
                    <div className='my-4'>
                        <h1 className='font-bold text-xl'>Technologies or Skills:</h1>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <h2>Web Design</h2>
                                </div>
                                <div className="stat-value text-primary"><FaLaptopCode /></div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <h2>Web Development</h2>
                                </div>
                                <div className="stat-value text-secondary"><BsCodeSlash /></div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <h2>Graphics Design</h2>
                                </div>
                                <div className="stat-value text-primary"><FaCentercode /></div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <h2>AutoCad Design</h2>
                                </div>
                                <div className="stat-value text-secondary"><GrCodepen /></div>
                            </div>
                        </div>

                    </div>

                    {/* Site link  */}
                    <div className='my-4'>
                        <h1 className='font-bold text-xl'>My Projects:</h1>

                        {/* car parts  */}
                        <div className='my-4'>
                            <label htmlFor="my-modal-1" className="btn modal-button btn-secondary">Car Parts Website</label>
                            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <a className="link link-hover text-secondary font-bold" href="https://sn-car-parts-co.web.app/">Live Link</a>
                                    <figure>
                                        <img src={project1} alt="pp" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* Halal Grocery */}
                        <div className='my-4'>
                            <label htmlFor="my-modal-2" className="btn modal-button btn-secondary">Halal Grocery Website</label>

                            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <a className="link link-hover text-secondary font-bold" href="https://halal-grocery.web.app/">Live Link</a>
                                    <figure>
                                        <img src={project2} alt="pp" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/*  TRAVEL website */}
                        <div className='my-4'>
                            <label htmlFor="my-modal-3" className="btn modal-button btn-secondary">TRAVEL Website</label>

                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <a className="link link-hover text-secondary font-bold" href="https://snaz-travel.web.app/">Live Link</a>
                                    <figure>
                                        <img src={project3} alt="pp" />
                                    </figure>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Portfolio;