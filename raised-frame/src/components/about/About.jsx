import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaPhotoVideo } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const About = () => {
	return (
		<section id='about'>
			<h5>Find Out More</h5>
			<h2>About Us</h2>

			<div className='container about__container'>
				<a href='#contact'>
					<div className='about__me'>
						<div className='about__me-image'>
							<img src={ME} alt='Javys Carrero, CEO' />
						</div>
					</div>
				</a>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Certified</h5>
							<small>FAA Part 107 Drone Certification</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>Privates Residences - Corperate Construction</small>
						</article>
						<article className='about__card'>
							<FaPhotoVideo className='about__icon' />
							<h5>Quality</h5>
							<small>High Resolution, Professionally Edited</small>
						</article>
					</div>

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut, mollitia eligendi ut atque cumque nobis quis, voluptatibus at necessitatibus beatae accusamus, dolores
						iure pariatur et eveniet porro dolorum ab.
					</p>

					<a href='#contact' className='btn btn__primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
