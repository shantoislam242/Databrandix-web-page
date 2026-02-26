import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TextMarqueeSlider from "@/components/shared/sliders/TextMarqueeSlider";
import Image from "next/image";
interface PropType {
	type?: number | string;
}
const About2 = ({ type }: PropType) => {
	return (
		<section
			className={`tj-about-section-2 section-gap-x ${
				type === 2
					? ""
					: "section-gap-top sidebar-sticky-container about-team-sticky-style"
			}`}
		>
			<div className="about-wrapper">
				<div className="about-area">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="about-content-area style-2">
									<div className="sec-heading style-2">
										<span
											className="sub-title wow fadeInUp"
											data-wow-delay=".3s"
										>
											Explore Our Services
										</span>
										<h2 className="sec-title text-anim">
											Driving Innovation Through AI and New Technology,
											Delivering Tailored
										</h2>
									</div>
									<div
										className="mission-vision-box about-intro-box wow fadeInUp"
										data-wow-delay=".4s"
									>
										<h4 className="title">About</h4>
										<p className="desc">
											Databrandix was built from a simple belief: growth should
											never be driven by guesswork. In a world full of noise,
											metrics, and tools, businesses don&apos;t just need more
											marketing-they need clarity. Databrandix exists to bring
											that clarity through data.
										</p>
									</div>
									<div className="about-bottom-area-2">
										<div
											className="company-logo wow fadeInLeft"
											data-wow-delay=".3s"
										>
											<Image
												width={199}
												height={228}
												style={{ height: "auto" }}
												src="/images/logos/logo3.png"
												alt="Image"
											/>
										</div>
										<div className="mission-vision-wrap">
											<div
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h4 className="title">Our Mission</h4>
												<p className="desc">
													Databrandix integrates data, marketing, automation, and operations to drive measurable, outcome-driven growth.
												</p>
											</div>
											<div
												className="mission-vision-box wow fadeInRight"
												data-wow-delay=".5s"
											>
												<h4 className="title">Our Vision</h4>
												<p className="desc">
													To become a globally trusted, data-driven growth company that powers business decisions through integrated marketing, analytics, automation, and technology systems.

												</p>
											</div>
											<div className=" wow fadeInUp" data-wow-delay=".5s"></div>
											<ButtonPrimary
												text="Read More"
												url="/about"
												className="style-2"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`about-img-area ${
							type === 2 ? "" : "sidebar-sticky sidebar-sticky-about"
						}`}
					>
						<div
							className="about-img wow fadeInLeft"
							data-wow-delay=".3s"
							data-wow-duration="0.8s"
						>
							<Image
								width={1250}
								height={1205}
								loading="eager"
								priority
								src="/images/about/about-img-2.webp"
								alt="Image"
							/>
						</div>
					</div>
				</div>
				<TextMarqueeSlider />
			</div>
		</section>
	);
};

export default About2;
