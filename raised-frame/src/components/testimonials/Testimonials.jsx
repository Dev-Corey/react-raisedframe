import React from "react";
import "./testimonials.css";
import Client1 from "../../assets/client__img/client1.png";
import Client2 from "../../assets/client__img/client2.png";
import Client3 from "../../assets/client__img/client3.png";
import Client4 from "../../assets/client__img/client4.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";

const data = [
	{
		avatar: Client1,
		name: "Caleb Riley",
		review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
	},
	{
		avatar: Client2,
		name: "Paige Koren",
		review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
	},
	{
		avatar: Client3,
		name: "Allie Dawson",
		review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
	},
	{
		avatar: Client4,
		name: "Corey Boensch",
		review: "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?",
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<div className='container testimonials__container'>
				<Swiper
					// install Swiper modules
					modules={[Pagination]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}>
					{data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide key={index} className='testimonial'>
								<div className='client__avatar'>
									<img src={avatar} alt='Client' />
								</div>
								<h5 className='client__name'>{name}</h5>
								<p className='client__review'>{review}</p>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
