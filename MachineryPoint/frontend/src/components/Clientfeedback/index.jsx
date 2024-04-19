
import Textdesign from '../Textdesign';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'


// Initialize Swiper modules
// SwiperCore.use([Pagination]);

const ClientFeedback = () => {
  // Mock data for testimonial items
  const testimonials = [
    {
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "Ceo & Founder"
    },
    {
      quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer"
    }
  ];

  return (
    <>
      <Textdesign txt="What" text="Our Client Say" />

      <section id="testimonials" className="testimonials section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
       

          <Swiper
            className="mySwiper swiper"
            data-aos="fade-up"
            data-aos-delay="100"
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={2}
         
            // spaceBetween={20}
            loop={true}
            
          >
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src={testimonial.image} className="testimonial-img" alt="" />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.role}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ClientFeedback;
