import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Achievement from "@/components/sections/achievement/Achievement";
import Belief from "@/components/sections/belief/Belief";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import Team1 from "@/components/sections/teams/Team1";
import BackToTop from "@/components/shared/others/BackToTop";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function About() {
	const architectureCards = [
		{
			icon: "tji-chart",
			title: "Integrated Growth Systems",
			desc: "Connects every growth lever into one unified operating system built for scale.",
		},
		{
			icon: "tji-budget",
			title: "Full-Funnel Analytics",
			desc: "Tracks every touchpoint from awareness to revenue with clear attribution models.",
		},
		{
			icon: "tji-chat",
			title: "Workflow Automation & AI Agents",
			desc: "Replaces manual processes with intelligent agents that execute 24/7 without error.",
		},
		{
			icon: "tji-development",
			title: "Performance-Driven Execution",
			desc: "Delivers measurable outcomes with real-time feedback loops and clear KPIs.",
		},
	];

	return (
		<div>
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<HeroInner title="About Us" text="About Us" />
						<section className="tj-growth-systems-section section-gap">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 mx-auto text-center">
										<div className="growth-systems-wrap">
											<h2 className="growth-systems-title text-anim">
												<span className="growth-line">We Design and Develop</span>
												<span className="growth-line growth-line-primary">
													Intelligent Growth
												</span>
												<span className="growth-line growth-line-primary">
													Systems.
												</span>
											</h2>
											<p className="growth-desc wow fadeInUp" data-wow-delay=".3s">
												Marketing, AI, automation, and development -
												<strong>
													{" "}
													aligned into measurable business outcomes.
												</strong>
											</p>
											<div className="growth-cta-wrap">
												<ButtonPrimary text="Explore Our Operating Model" url="#" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<About2 />
						<Achievement />
						<Belief />
						<section className="tj-achievement-section section-gap-bottom">
							<div className="container">
								<div className="row align-items-center row-gap-4">
									<div className="col-lg-5">
										<div className="sec-heading">
											<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
												<i className="tji-subtitle-2"></i>WHAT WE ACTUALLY DO
											</span>
											<h2 className="sec-title text-anim">
												Building <span style={{ color: "#4f7fff" }}>Structured</span>
												<br />
												Growth Architecture
											</h2>
											<p className="desc wow fadeInUp" data-wow-delay=".4s">
												We integrate strategy, technology, and execution into a connected
												growth architecture. Every function aligned to performance and
												accountability.
											</p>
										</div>
									</div>
									<div className="col-lg-7">
										<div
											className="row g-0"
											style={{ border: "1px solid rgba(255, 255, 255, 0.06)" }}
										>
											{architectureCards.map((card, idx) => (
												<div
													key={card.title}
													className="col-md-6 wow fadeInUp d-flex"
													data-wow-delay={`${0.2 + idx * 0.1}s`}
												>
													<div
														className="choose-box h-100 w-100 mb-0"
														style={{
															borderRadius: 0,
															minHeight: "280px",
															padding: "36px 30px",
															borderRight:
																idx % 2 === 0 ? "1px solid rgba(255, 255, 255, 0.06)" : 0,
															borderBottom:
																idx < 2 ? "1px solid rgba(255, 255, 255, 0.06)" : 0,
															backgroundColor: "rgba(10, 16, 30, 0.65)",
														}}
													>
														<div className="choose-icon" style={{ marginBottom: "24px" }}>
															<i className={card.icon}></i>
														</div>
														<div className="choose-content">
															<h4
																className="title architecture-card-title"
																style={{ fontSize: "16.5px" }}
															>
																{card.title}
															</h4>
															<p
																className="desc architecture-card-desc"
																style={{ color: "#4e5870" }}
															>
																{card.desc}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>
						<Team1 />
						<Faq2 />
						<Cta />
					</main>
					<Footer />
					<div className="bottom-gap-30"></div>
				</div>
			</div>
			<ClientWrapper />
			<BackToTop />
			<style>{`
				.choose-box .architecture-card-title,
				.choose-box .architecture-card-desc {
					transition: color 0.3s ease;
				}
				.choose-box:hover .architecture-card-title,
				.choose-box:hover .architecture-card-desc {
					color: #ffffff !important;
				}
			`}</style>
		</div>
	);
}
