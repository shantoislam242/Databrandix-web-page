import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Achievement from "@/components/sections/achievement/Achievement";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import Team1 from "@/components/sections/teams/Team1";
import BackToTop from "@/components/shared/others/BackToTop";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function About() {
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
		</div>
	);
}
