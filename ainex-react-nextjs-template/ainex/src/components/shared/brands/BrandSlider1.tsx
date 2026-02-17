"use client";

import getBrands from "@/libs/getBrands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider1 = () => {
	const brands = getBrands();
	return (
		<div className="swiper client-slider">
			<Swiper
				slidesPerView="auto"
				spaceBetween={0}
				freeMode={true}
				centeredSlides={true}
				loop={true}
				speed={5000}
				allowTouchMove={false}
				autoplay={{
					delay: 0,
					disableOnInteraction: false,
				}}
				className={`client-slider`}
				modules={[Autoplay]}
			>
				{brands?.length
					? brands?.map(({ img = "/images/brands/brand-1.webp" }, idx) => (
							<SwiperSlide key={idx} className="client-item">
								<div className="client-logo">
									<div className="client-logo-media">
										<Image
											fill
											className="client-logo-image"
											sizes="(max-width: 767px) 130px, 150px"
											src={img}
											alt="Brand"
										/>
									</div>
								</div>
							</SwiperSlide>
					  ))
					: ""}
			</Swiper>
		</div>
	);
};

export default BrandSlider1;
