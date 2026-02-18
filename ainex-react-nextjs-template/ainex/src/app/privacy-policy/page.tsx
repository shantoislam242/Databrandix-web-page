import type { Metadata } from "next";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata: Metadata = {
	title: "Privacy Policy | Databrandix",
	description:
		"Read the Databrandix Privacy Policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
	return (
		<div className="legal-page">
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<HeroInner title="Privacy Policy" text="Privacy Policy" />
						<section className="section-gap">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 mx-auto">
										<div
											className="p-4 p-md-5 rounded-4"
											style={{ backgroundColor: "var(--tj-color-theme-bg)" }}
										>
											<h1 className="mb-4 fs-2">Privacy Policy</h1>

											<h3 className="mb-3 fs-4">1. Introduction</h3>
											<p className="mb-4">
												This Privacy Policy explains who Databrandix is, why this
												policy exists, and who it applies to. It applies to
												visitors, clients, and users of our website, services,
												and related communication channels.
											</p>

											<h3 className="mb-3 fs-4">2. Information We Collect</h3>
											<p className="mb-4">
												We may collect Personal Information (such as name, email,
												and phone), Business Information, Technical Data (such as
												IP address, browser details, and cookies), and Usage Data
												related to how users interact with our website and
												services.
											</p>

											<h3 className="mb-3 fs-4">3. How We Use Information</h3>
											<p className="mb-4">
												Information is used for service delivery, communication,
												analytics and performance improvement, security monitoring,
												and legal compliance.
											</p>

											<h3 className="mb-3 fs-4">4. Data Sharing & Disclosure</h3>
											<p className="mb-4">
												We may share information with trusted third-party tools
												such as CRM, analytics, and hosting providers, or when
												required by law. We do not sell personal data.
											</p>

											<h3 className="mb-3 fs-4">5. Data Security</h3>
											<p className="mb-4">
												We use reasonable safeguards including encryption where
												applicable, access controls, and internal data-handling
												discipline to protect information.
											</p>

											<h3 className="mb-3 fs-4">6. Cookies & Tracking</h3>
											<p className="mb-4">
												Our website may use cookies and similar technologies to
												maintain functionality, improve user experience, and
												measure usage. Users can manage or disable cookies through
												browser settings.
											</p>

											<h3 className="mb-3 fs-4">7. Data Retention</h3>
											<p className="mb-4">
												We retain data only as long as needed for business,
												operational, and legal purposes. Data is deleted or
												anonymized when no longer required.
											</p>

											<h3 className="mb-3 fs-4">8. User Rights</h3>
											<p className="mb-0">
												Users may request access, correction, deletion, or
												opt-out where applicable. Requests can be made through our
												official contact channels.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
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
