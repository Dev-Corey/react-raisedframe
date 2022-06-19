import React from "react";
import "./header.css";
import CTA from "../header/CTA";
import mainhero from "../../assets/mainhero.mp4";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='overlay'>
					<video src={mainhero} autoPlay loop muted />
					<div className='header__container'>
						<h1 className='company__name'>Raised Frame</h1>
						<h5>Elevate Your Footage</h5>
						<h5 className='text-light'>Certified Drone Sevices</h5>
						<CTA />
						<HeaderSocials />
						<a href='#contact' className='scroll__down'>
							Scroll Down
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
