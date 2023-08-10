import React from "react";

import { testimonials } from "../Constants";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="testimonial-wrapper">
                <p className="section-sub__text">What My Clients Have to Say</p>
                <h1 className="section-head__text">Testimonials</h1>

                <div className="testimonial-grid">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >

                        {testimonials.map((test)=>(
                            <SwiperSlide>
                                <div className="testimonial-card">
                                    {/* <span></span><br /> */}
                                    <p>{test.testimonial}</p>
                                    <div className="testimonial-info">
                                       <div>
                                        <h3>@{test.name}</h3>
                                        <h5>{test.designation} of {test.company}</h5>
                                       </div>
                                        <img src={test.image} alt={test.name} className="testmonial-img"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial