import React, { useEffect, useState } from 'react'
import './ProductServices.css';
import product from '../images/product.png'
import doctor from "../images/doctor.png"
import productservice from "../images/productservice.png"
import data from '../data'

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const ProductServices = () => {

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
            <div className='main__product'>

                <img src={product} alt='product&services' />
                <div className='product__text'>

                    <p>Protect Your <b>Future</b> with Our
                        Comprehensive Insurance Policies
                    </p>
                </div>
            </div>
            <section className='product'>
                <div className='container products'>
                    <div className='product-left'>
                        <img src={productservice} alt='productservice' />
                    </div>
                    <div className='product-right'>
                        <h4>DOSH <br />SERVICES</h4>
                        <hr className='underline'></hr>
                        <p>
                            Financial inclusion is the key to participation
                            and advancement in the global economy. DOSH's mission
                            is to provide unrivaled solutions to individuals, SOHO
                            and SMB in emerging markets where access to financial
                            services has previously been inaccessible or prohibitively
                            expensive. DOSH has fabricated an unprecedented synthesis of
                            leading-edge technologies that offer fast, reliable and dependable
                            access to cutting-edge financial services at the lowest possible cost.
                            We empower markets to bridge the financial divide.
                        </p>
                    </div>
                </div>
            </section>

            <section className='productslider'>
                <h1 className='title'>Streamlined Financial Solutions<br />
                    Achieve your Dreams with Seamless Funding Solutions
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
                                            <div className='left'>
                                                <h4>DOSH <br />INSURANCE</h4>
                                                <hr className='underline'></hr>
                                                <p className='quote'>{quote}</p>
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
                                            <div className='right'>
                                                <img src={doctor} alt='person' className="person-img" />
                                            </div>

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

            <section className='video__section'>
                <div className='container video'>
                    <div className='video__left'></div>
                    <div className='video__right'>
                        <h5>Success Stories Video</h5>
                        <h6>“ Affordable health insurance for you and your loved ones.</h6>
                        <small> Dial *915# to sign up with as low as GHS 365 and get GHS 9000 worth of cover at any medical facility. Join the DOSH Revolution!. ”</small>
            </div>
            </div>
                    </section>
                
        </div>
    )
}

export default ProductServices
