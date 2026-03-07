"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero3 = () => {
	const items = [
		{
			title: "Build\nSmarter\u00A0Growth\nWith Data",
			subtitle: "ENGINEERED BUSINESS GROWTH",
			desc: "Powered by data intelligence,\nAI automation and integrated marketing systems.",
			img: "/images/hero/slider-1.webp",
			linkText: "Explore Our Approach",
			url: "/contact",
		},
		{
			title: "Build\nSmarter\u00A0Growth\nWith Data",
			subtitle: "ENGINEERED BUSINESS GROWTH",
			desc: "Powered by data intelligence,\nAI automation and integrated marketing systems.",
			img: "/images/hero/slider-2.webp",
			linkText: "Explore Our Approach",
			url: "/contact",
		},
		{
			title: "Build\nSmarter\u00A0Growth\nWith Data",
			subtitle: "ENGINEERED BUSINESS GROWTH",
			desc: "Powered by data intelligence,\nAI automation and integrated marketing systems.",
			img: "/images/hero/slider-3.webp",
			linkText: "Explore Our Approach",
			url: "/contact",
		},
	];
	return (
		<section className="tj-slider-section">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				effect="fade"
				loop={true}
				speed={1400}
				autoplay={{
					delay: 4000,
				}}
				navigation={{
					nextEl: ".slider-next",
					prevEl: ".slider-prev",
				}}
				pagination={{
					el: ".hero-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' + className + '">' + "0" + (index + 1) + "</span>"
						);
					},
				}}
				modules={[Pagination, Navigation, Autoplay, EffectFade]}
				className="hero-slider"
			>
				{items?.length
					? items?.map(
							(
								{
									title,
									subtitle,
									img = "/images/hero/slider-1.webp",
									desc,
									linkText,
									url,
								},
								idx
							) => (
								<SwiperSlide key={idx} className="tj-slider-item">
									<div
										className="slider-bg-image"
										style={{ backgroundImage: `url("${img}")` }}
									></div>
									<div className="slider-wrapper">
										<div className="slider-content">
											<div className="slider-title-area">
												<span className="sub-title">
													<i className="tji-subtitle-2"></i>
													{subtitle}
												</span>
												<h1 className="slider-title" style={{ whiteSpace: "pre-line" }}>
													{title}
												</h1>
											</div>
											<div className="slider-meta-area">
												<div className="slider-desc" style={{ whiteSpace: "pre-line" }}>
													{desc}
												</div>
												<div className="slider-btn">
													<ButtonPrimary
														className="hero-cta-btn"
														text={linkText}
														url={url}
													/>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
					  )
					: ""}
				<div className="hero-navigation">
					<div className="slider-prev">
						<span className="anim-icon">
							<i className="tji-arrow-left-long"></i>
							<i className="tji-arrow-left-long"></i>
						</span>
					</div>
					<div className="slider-next">
						<span className="anim-icon">
							<i className="tji-arrow-right-long"></i>
							<i className="tji-arrow-right-long"></i>
						</span>
					</div>
				</div>
				<div className="swiper-pagination hero-pagination"></div>
			</Swiper>
		</section>
	);
};

export default Hero3;
