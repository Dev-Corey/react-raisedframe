import React from "react";
import "./footer.css";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				Raised Frame
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				{/* <li>
					<a href='#gallery'>Gallery</a>
				</li> */}
				<li>
					<a href='#services'>Services</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonials</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a href='https://tiktok.com' target='_blank' rel='noreferrer'>
					<SiTiktok />
				</a>
				<a href='https://instagram.com' target='_blank' rel='noreferrer'>
					<BsInstagram />
				</a>
				<a href='https://youtube.com' target='_blank' rel='noreferrer'>
					<BsYoutube />
				</a>
				<a href='https://twitter.com' target='_blank' rel='noreferrer'>
					<BsTwitter />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Raised Frame LLC. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
