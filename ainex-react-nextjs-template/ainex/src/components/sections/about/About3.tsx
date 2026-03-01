import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const About3 = () => {
	return (
		<section className="tj-about-section-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="about-content-area style-3">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-subtitle-2"></i>About our Company
								</span>
								<h2 className="sec-title title-highlight">
									Driving Innovations Through Our and Technology, Delivering Our
									Expert Solutions are Best that Transform Businesses.
								</h2>
							</div>
							<div className="about-bottom-area-3">
								<div className="process-item">
									<span className="process-number">01</span>
									<h4 className="process-title">Insight</h4>
									<p className="process-desc">
										We identify structural gaps not surface symptoms.
										Data, funnel behavior, and operational friction are mapped before action begins.
									</p>
								</div>
								<div className="process-item">
									<span className="process-number">02</span>
									<h4 className="process-title">Decision</h4>
									<p className="process-desc">
										Insights become structured decisions.
										Targets are defined, metrics selected, ownership assigned nothing moves without clarity.
									</p>
								</div>
								<div className="process-item">
									<span className="process-number">03</span>
									<h4 className="process-title">System</h4>
									<p className="process-desc">
										Marketing, AI, automation, and development operate inside one integrated growth architecture.
										Tools are connected..
									</p>
								</div>
								<div className="process-item">
									<span className="process-number">04</span>
									<h4 className="process-title">Outcome</h4>
									<p className="process-desc">
										Performance is tracked weekly against defined benchmarks.
										Issues trigger correction. Progress triggers scale.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="about-img-area-2">
							<div
								className="about-img wow fadeInLeft"
								data-wow-delay=".3s"
								data-wow-duration="0.8s"
							>
								<Image
									width={768}
									height={1029}
									src="/images/about/about-img-3.webp"
									alt="Image"
								/>
							</div>
							<div className="video-wrap">
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span className="video-text">Let’s See How we did it.</span>
										<span className="video-icon">
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About3;
