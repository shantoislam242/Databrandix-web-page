import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
	const items = [
		{
			id: 1,
			iconName: "tji-discovery",
			title: "Discovery & Insight",
			desc: "We analyze your business, marketing performance, and operational data to identify growth opportunities.",
		},
		{
			id: 2,
			iconName: "tji-development",
			title: "System Design & Development",
			desc: "We build integrated systems using marketing strategy, AI automation, analytics, and technology.",
		},
		{
			id: 3,
			iconName: "tji-support",
			title: "Optimization & Growth",
			desc: "We monitor performance, optimize systems, and scale strategies for sustainable business growth.",
		},
	];
	return (
		<div className="tj-working-process-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
								<i className="tji-subtitle-2"></i>HOW WE WORK
							</span>
							<h2 className="sec-title text-anim">
								From Insight to Scalable Growth Systems
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div key={idx} className="col-lg-4">
									<ProcessCard2 item={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default Process2;
