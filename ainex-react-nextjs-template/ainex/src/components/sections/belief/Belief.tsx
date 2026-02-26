import Image from "next/image";

const Belief = () => {
	return (
		<section className="tj-achievement-section belief-section section-gap-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="heading-wrap-content">
								<p className="desc wow fadeInUp" data-wow-delay=".3s">
									We believe sustainable growth requires alignment
									 between marketing, operations, and measurable
									decision-making.
								</p>
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-subtitle-2"></i>Our Belief
									</span>
									<h2 className="sec-title text-anim">
										Growth without clarity is expensive.
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-lg-6 order-1 order-lg-1">
						<div
							className="achievement-area belief-copy-area wow fadeInRight"
							data-wow-delay=".3s"
						>
							<h5 className="belief-copy-title">Our Approach</h5>
							<div className="achievement-item">
								<div className="content">
									<span className="no">•</span>
									<div className="belief-point">
										<h4 className="title">Align systems before scaling activity</h4>
										<p className="mini-desc">
											 Structure creates predictable performance.
										</p>
									</div>
								</div>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">•</span>
									<div className="belief-point">
										<h4 className="title">Replace assumptions with evidence</h4>
										<p className="mini-desc">
											Data informs every strategic decision.
										</p>
									</div>
								</div>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">•</span>
									<div className="belief-point">
										<h4 className="title">Performance must be measurable</h4>
										<p className="mini-desc">
											Every initiative connects to business impact.
										</p>
									</div>
								</div>
							</div>
							<div className="achievement-item">
								<div className="content">
									<span className="no">•</span>
									<div className="belief-point">
										<h4 className="title">Growth must be owned</h4>
										<p className="mini-desc">
											Execution and outcome stay aligned.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-2 order-lg-2">
						<div
							className="achievement-img wow fadeInLeft"
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
				</div>
			</div>
		</section>
	);
};

export default Belief;
