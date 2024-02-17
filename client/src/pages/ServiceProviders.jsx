import React, { useEffect, useState } from 'react'
import "./ServiceProviders.css"
import services from "../images/services.png"
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import anime from '../images/anime.png'
import tom from "../images/tom.png"
import data from "../data"
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const ServiceProviders = () => {

    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <div>
            <div className='main__services'>

                <img src={services} alt='servicesproviders' />
                <div className='service__text'>
                    <h1>Greater Accra</h1>
                    <p>
                        We offer a wide range of healthcare covers for our clients.<br />
                        Our clients benefit by getting personalized, quality service that is beyond comparison.
                    </p>
                </div>
            </div>
            <section className='filter-section'>
                <div className='container filter__search'>
                    <button class="filter-button"><FaFilter /> Filter</button>
                    <div class="search-container">
                        <IoIosSearch className='search-icon' />
                        <input type="text" className="search-bar" placeholder="Search users by country, Region or District" />
                    </div>
                </div>
            </section>

            <section className='provider-container'>
                <div className='container service__cards'>
                    <h4>DOSH <br />INSURANCE PACKAGES</h4>
                    <hr className='underline'></hr>

                    <div className='anime'>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 365</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 750</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 1000</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 2500</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 5000</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" />
                            <p>DOSH 10000</p>
                            <small>Plan</small>
                            <button className='anime-btn'>Sign up</button>
                        </div>
                    </div>
                    <div className='anime-sect'>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='plan'>
                            <p>Need a plan today ? Call us to Assist you.</p>
                            <button type='button' className='plan-btn'>Call us</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='serviceslider'>
                <h1 className='title'>Testimonial
                </h1>
                <div className='section-center'>
                    {
                        people.map((item, indexPeople) => {
                            const { id, quote } = item;
                            let position = "nextSlide";
                            if (indexPeople === index) {
                                position = "activeSlide";
                            }
                            if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                                position = "lastSlide"
                            }
                            return (
                                <div>
                                    <article className={position} key={id}>
                                        <div className='divide'>
                                            <img src={tom} alt='person' className="person-img" />
                                            <p className='service-quote'>{quote}</p>
                                            <Link to='/'>Read more
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    fill="currentColor"
                                                    class="bi bi-arrow-right"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>

                                    </article>
                                    <button className='prev' onClick={() => setIndex(index - 1)}>
                                        <FaArrowLeftLong />
                                    </button>
                                    <button className='next' onClick={() => setIndex(index + 1)}>
                                        <FaArrowRightLong />
                                    </button>
                                </div>

                            )
                        })
                    }


                </div>

            </section>
        </div>
    )
}

export default ServiceProviders
