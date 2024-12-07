import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../../assets/css/shopPageCSS/topSection.css";
import { Link } from "react-router-dom";
import Circle from "./Circle";

// Slider Data
const sliderData = [
	{
		id: 1,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg1.webp"),
		title: "Figma Doodle Socks",
		slugs: "figma-doodle-socks",
	},
	{
		id: 2,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg2.webp"),
		slugs: "chunky-glyph-tee",
		title: "Chunky Glyph Tee",
	},
	{
		id: 3,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg3.webp"),
		slugs: "chunky-glyph-cap",
		title: "Chunky Glyph Cap",
	},
	{
		id: 4,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg4.webp"),
		slugs: "butterfly-tote",
		title: "Butterfly Tote",
	},
	{
		id: 5,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg5.webp"),
		title: "Tidy Up Crewneck",
		slugs: "tidy-up-crewneck",
	},
	{
		id: 6,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg6.webp"),
		slugs: "all-smile-nalgene",
		title: "All Smiles Nalgene",
	},
	{
		id: 7,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg7.webp"),
		slugs: "inkblot-tee",
		title: "Inkblot Tee",
	},
	{
		id: 8,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg8.webp"),
		slugs: "tidy-up-crewneck",
		title: "Tidy Up Crewneck",
	},
	{
		id: 9,
		imgSrc: require("../../assets/images/shopImgs/topSectionImgs/coverImg9.webp"),
		slugs: "local-styles-crewneck",
		title: "Local Styles Crewneck",
	},
];

// TopSection Component
const TopSection = () => {
	const [hoverIndex, setHoverIndex] = useState(null);

	return (
		<>
			<div className="shop-top-slider-section-container">
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={4} // Default slides for large screens
					navigation
					loop={true}
					className="shop-top-slider"
					breakpoints={{
						320: {
							slidesPerView: 1, // 1 slide for small screens
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2, // 2 slides for tablets
							spaceBetween: 15,
						},
						1024: {
							slidesPerView: 4, // 4 slides for larger screens
							spaceBetween: 20,
						},
					}}
				>
					{sliderData.map((slide, index) => (
						<SwiperSlide key={slide.id}>
							<div
								className="shop-top-slider-section-content-box"
								style={{ backgroundImage: `url(${slide.imgSrc})` }}
								onMouseEnter={() => setHoverIndex(index)}
								onMouseLeave={() => setHoverIndex(null)}
							>
								{hoverIndex === index && (
									<Link to={`/products/${slide.slugs}`} className="router-link">
										<div className="shop-top-slider-section-content-box-span">
											<h3>{slide.title}</h3>
										</div>
									</Link>
								)}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<Circle circleClass="shop-top-section-circle" />
		</>
	);
};

export default TopSection;
