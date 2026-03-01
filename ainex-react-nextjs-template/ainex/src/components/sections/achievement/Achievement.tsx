import Image from "next/image";

const Achievement = () => {
	return (
		<section className="tj-achievement-section how-work-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-12">
						<div className="how-work-heading-wrap">
							<div className="row row-gap-4 align-items-end">
								<div className="col-lg-7">
									<div className="sec-heading how-work-heading">
										<span
											className="sub-title wow fadeInUp"
											data-wow-delay=".3s"
										>
											<i className="tji-subtitle-2"></i>How We Work
										</span>
										<h2 className="sec-title text-anim how-work-title">
											Structure <span>Growth</span>
											<br />
											Framework
										</h2>
									</div>
								</div>
								<div className="col-lg-5">
									<p className="how-work-intro wow fadeInUp" data-wow-delay=".4s">
										Our operating model turns insight into execution through a
										clear, accountable four-step workflow.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-2 order-lg-1">
						<div
							className="how-work-image wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<Image
								width={645}
								height={487}
								src="/images/achievement/achievement.webp"
								alt="Image"
							/>
						</div>
					</div>
					<div className="col-lg-6 order-1 order-lg-2">
						<div
							className="how-work-list how-work-list-card wow fadeInRight"
							data-wow-delay=".3s"
						>
							<div className="how-work-item">
								<div className="how-work-top">
									<span className="no">01</span>
									<h4 className="title">Insight</h4>
								</div>
								<p className="desc">
									We identify structural gaps not surface symptoms.
									Data, funnel behavior, and operational friction are mapped
									before action begins.
								</p>
							</div>
							<div className="how-work-item">
								<div className="how-work-top">
									<span className="no">02</span>
									<h4 className="title">Decision</h4>
								</div>
								<p className="desc">
									Insights become structured decisions. Targets are defined,
									metrics selected, ownership assigned nothing moves without
									clarity.
								</p>
							</div>
							<div className="how-work-item">
								<div className="how-work-top">
									<span className="no">03</span>
									<h4 className="title">System</h4>
								</div>
								<p className="desc">
									Marketing, AI, automation, and development operate inside one
									integrated growth architecture. Tools are connected not
									isolated.
								</p>
							</div>
							<div className="how-work-item">
								<div className="how-work-top">
									<span className="no">04</span>
									<h4 className="title">Outcome</h4>
								</div>
								<p className="desc">
									Performance is tracked weekly against defined benchmarks.
									Issues trigger correction. Progress triggers scale.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Achievement;
