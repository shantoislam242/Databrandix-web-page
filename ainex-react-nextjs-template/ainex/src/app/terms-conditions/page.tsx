import type { Metadata } from "next";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata: Metadata = {
	title: "Terms & Conditions | Databrandix",
	description:
		"Review the Databrandix Terms & Conditions for website usage, service terms, responsibilities, and limitations.",
};

export default function TermsConditionsPage() {
	return (
		<div className="legal-page">
			<Header isStickyHeader={true} headerType={2} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<div className="top-gap-20"></div>
					<Header headerType={2} isNotAbsolute={true} />
					<main>
						<HeroInner title="Terms & Conditions" text="Terms & Conditions" />
						<section className="section-gap">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 mx-auto">
										<div
											className="p-4 p-md-5 rounded-4"
											style={{ backgroundColor: "var(--tj-color-theme-bg)" }}
										>
											<h1 className="mb-4 fs-2">Terms & Conditions</h1>

											<h3 className="mb-3 fs-4">1. Introduction</h3>
											<p className="mb-4">
												By accessing or using the Databrandix website and
												services, you agree to these Terms & Conditions. These
												terms form a binding agreement between you and
												Databrandix regarding your use of our website, products,
												and professional services.
											</p>

											<h3 className="mb-3 fs-4">2. Services Overview</h3>
											<p className="mb-4">
												Databrandix provides digital, AI, data, and technology
												solutions based on agreed project scope. We do not
												guarantee specific business outcomes, and performance can
												vary depending on data quality, implementation
												environment, and client-side collaboration.
											</p>

											<h3 className="mb-3 fs-4">3. Intellectual Property</h3>
											<p className="mb-4">
												All website content, branding, design elements, and
												materials on this site are owned by Databrandix unless
												otherwise stated. Client project ownership terms will be
												defined in project agreements. Unauthorized use of the
												Databrandix name, logo, or branding is prohibited.
											</p>

											<h3 className="mb-3 fs-4">4. User Responsibilities</h3>
											<p className="mb-4">
												Users must provide accurate information, use services
												responsibly, and avoid misuse of the website or systems.
												Any unlawful activity, abuse, or unauthorized access
												attempts are strictly prohibited.
											</p>

											<h3 className="mb-3 fs-4">
												5. Payment & Engagement Terms (If Applicable)
											</h3>
											<p className="mb-4">
												Projects may be delivered under fixed, milestone, or
												retainer engagement models as agreed in writing. Payment
												schedules, invoices, and due dates are defined in the
												service agreement. Refund terms, if applicable, will be
												clearly documented in the respective contract.
											</p>

											<h3 className="mb-3 fs-4">6. Limitation of Liability</h3>
											<p className="mb-4">
												Databrandix is not liable for indirect, incidental, or
												consequential damages arising from use of the website or
												services. Results may vary due to multiple external and
												operational factors beyond our control.
											</p>

											<h3 className="mb-3 fs-4">7. Termination</h3>
											<p className="mb-4">
												We reserve the right to suspend or terminate services,
												accounts, or access in cases of policy breach, misuse,
												non-payment, or legal risk. Service termination conditions
												for active projects are governed by contract terms.
											</p>

											<h3 className="mb-3 fs-4">8. Governing Law</h3>
											<p className="mb-4">
												These Terms & Conditions are governed by the laws of
												Bangladesh. Where applicable, additional international
												compliance references may be introduced in future updates.
											</p>

											<h3 className="mb-3 fs-4">9. Changes to Terms</h3>
											<p className="mb-0">
												Databrandix may update these terms from time to time. Any
												material updates will be posted on this page with an
												updated effective date. Continued use of our services
												after changes means acceptance of revised terms.
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
