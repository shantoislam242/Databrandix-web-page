"use client";
import FaqItem from "@/components/shared/faq/FaqItem";
import PrevNextNav, {
	OptionType,
} from "@/components/shared/others/PrevNextNav";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { ServiceType } from "@/libs/getALlServices";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

interface PropType {
	option: OptionType;
	items: ServiceType[];
	currentItem: ServiceType;
}

const ServicesDetailsPrimary = ({ option, items, currentItem }: PropType) => {
	const { currentId } = option || {};
	const { img2 = "/images/service/service-details-1.webp", details } =
		currentItem || {};
	const sidebarItems = items?.slice(0, 6);
	const faqItems =
		currentItem?.faq?.map((item, idx) => ({
			...item,
			initActive: idx === 0,
		})) || [];

	const introParagraphs = details?.introParagraphs || [
		"We specialize in crafting bespoke technology solutions tailored to the unique needs of your business. From custom software development and IoT integration to AI-powered tools and cloud computing, we provide innovative systems that streamline processes, enhance productivity, and drive growth.",
		"With a deep understanding of your business, we deliver powerful tools that solve current challenges and position your company for long-term success in an evolving digital market.",
	];
	const leftColumnPoints = details?.leftColumnPoints || [
		"Discover our expertise",
		"Journey and commitment to explained",
		"Meet our team and learn",
	];
	const rightColumnPoints = details?.rightColumnPoints || [
		"Meet our team",
		"Consultation and Discovery",
		"Routine Maintenance",
		"Troubleshooting",
	];
	const servicesRangeTitle =
		details?.servicesRangeTitle || "Our Range of Maintenance Services";
	const servicesRangeDesc =
		details?.servicesRangeDesc ||
		"We specialize in crafting bespoke technology solutions tailored to your business goals. Our delivery combines strategy, implementation, and performance optimization to generate sustainable growth.";
	const sectionA = details?.sectionA || [
		{
			title: "Unmatched Precision in Every Build",
			desc: "Our dedicated team brings your vision to life with craftsmanship and attention to detail.",
		},
		{
			title: "Sustainable Technical Practices",
			desc: "We implement future-proof practices so systems stay reliable and adaptable over time.",
		},
		{
			title: "Comprehensive Project Management",
			desc: "From planning to delivery, we ensure execution stays aligned with your business priorities.",
		},
	];
	const sectionB = details?.sectionB || [];
	const allServiceBlocks = [...sectionA, ...sectionB];
	const heroTitle =
		details?.heroTitle ||
		"Empowering Innovation with Custom Technology Solutions.";

	return (
		<section className="tj-blog-section section-gap">
			<div className="container sidebar-sticky-container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images">
								<Image
									width={870}
									height={450}
									style={{ height: "auto" }}
									src={img2}
									alt="Images"
								/>
							</div>
							<h2 className="title">{heroTitle}</h2>
							<div className="blog-text">
								{introParagraphs.map((paragraph, idx) => (
									<p key={idx}>{paragraph}</p>
								))}
								<div className="row">
									<div className="col-sm-6">
										<ul className="service-points-list">
											{leftColumnPoints.map((point, idx) => (
												<li key={idx}>
													<span>
														<i className="tji-check-2"></i>
													</span>
													{point}
												</li>
											))}
										</ul>
									</div>
									<div className="col-sm-6">
										<ul className="service-points-list">
											{rightColumnPoints.map((point, idx) => (
												<li key={idx}>
													<span>
														<i className="tji-check-2"></i>
													</span>
													{point}
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src="/images/service/service-7.webp"
													alt="Image"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="image-box">
												<Image
													width={420}
													height={420}
													style={{ height: "auto" }}
													src="/images/service/service-8.webp"
													alt="Image"
												/>
											</div>
										</div>
									</div>
								</div>
								<h3>{servicesRangeTitle}</h3>
								<p>{servicesRangeDesc}</p>
								<div className="details-content-box">
									{allServiceBlocks.map((item, idx) => (
										<div key={idx} className="service-details-item">
											<div className="service-number">
												<span className="number">{`${idx + 1}.`}</span>
												<h6 className="title">{item.title}</h6>
												<div className="desc">
													<p>{item.desc}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="tj-main-sidebar sidebar-sticky service-sidebar-sticky-delayed">
							<div className="tj-sidebar-widget service-categories">
								<h4 className="widget-title">More services</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ title, id }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentId === id ? "active" : ""}`}
														href={`/services/${id}`}
													>
														{title}
														<span className="icon">
															<i className="tji-arrow-right-3"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
							</div>
							<div className="tj-sidebar-widget widget-feature-item">
								<CtaSidebar />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-text">
								<h3>Frequently asked questions</h3>
								<BootstrapWrapper>
									<div className="accordion tj-faq style-2" id="faqOne">
										{faqItems?.length
											? faqItems.map((item, idx) => (
													<FaqItem key={idx} item={item} idx={idx} />
											  ))
											: ""}
									</div>
								</BootstrapWrapper>
								<div className="service-details-sticky-end">
									<PrevNextNav option={option} itemsUrl="/services" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
