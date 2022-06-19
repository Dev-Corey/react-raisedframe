import React from "react";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
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
	);
};

export default HeaderSocials;
