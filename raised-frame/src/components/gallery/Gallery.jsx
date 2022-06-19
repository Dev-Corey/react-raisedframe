// I am current redoing this section to implement the use of a video carousel of the compnay's videos off of their youtube page. At this time we are currently waiting for the company to ge their youtube channel up and running.

// import React from "react";
// // import { ImageViewer } from "react-image-viewer-dv";
// import Video from "../../assets/mainhero.mp4";
// import { Carousel } from "react-bootstrap";
// import ReactPlayer from "react-player";
// import "./gallery.css";

// const Gallery = () => {
// 	const videoProperties = [
// 		{
// 			id: 1,
// 			title: "Video 1",
// 			src: Video,
// 			credit: "Video By Raised Frame",
// 		},
// 		{
// 			id: 2,
// 			title: "Video 2",
// 			src: Video,
// 			credit: "Video By Raised Frame",
// 		},
// 		{
// 			id: 3,
// 			title: "Video 3",
// 			src: Video,
// 			credit: "Video By Raised Frame",
// 		},
// 		{
// 			id: 4,
// 			title: "Video 4",
// 			src: Video,
// 			credit: "Video By Raised Frame",
// 		},
// 		{
// 			id: 5,
// 			title: "Video 5",
// 			src: Video,
// 			credit: "Video By Raised Frame",
// 		},
// 	];

// 	return (
// 		<section id='gallery'>
// 			<h5>Check Out Our</h5>
// 			<h2>Video Gallery</h2>

// 			<Carousel>
// 				{videoProperties.map((videoObj) => {
// 					return (
// 						<Carousel.Item key={videoObj.id}>
// 							<ReactPlayer url={videoObj.src} pip={true} controls={true} playing={true} />
// 							<Carousel.Caption>
// 								<h3>{videoObj.title}</h3>
// 								<p>{videoObj.credit}</p>
// 							</Carousel.Caption>
// 						</Carousel.Item>
// 					);
// 				})}
// 			</Carousel>
// 		</section>
// 	);
// };

// export default Gallery;
