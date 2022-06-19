import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
	return (
		<section id='services'>
			<h5>Check Out Our</h5>
			<h2>Services</h2>

			<div className='container services__container'>
				{/* Card 1 Starts */}
				<article className='service'>
					<div className='service__head'>
						<h3>Service 1</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>

						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* Card 1 Ends */}
				{/* Card 2 Starts */}
				<article className='service'>
					<div className='service__head'>
						<h3>Service 2</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* Card 2 Ends */}
				{/* Card 3 Starts */}
				<article className='service'>
					<div className='service__head'>
						<h3>Service 3</h3>
					</div>

					<ul className='service__list'>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
						<li>
							<BiCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						</li>
					</ul>
				</article>
				{/* Card 3 Ends */}
			</div>
		</section>
	);
};

export default Services;
