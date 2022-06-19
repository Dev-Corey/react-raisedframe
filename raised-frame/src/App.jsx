import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
// import Gallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			{/* <Gallery />    This feature is waiting for companies youtube channel to be step up*/}
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
