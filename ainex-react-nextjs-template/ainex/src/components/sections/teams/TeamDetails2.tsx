import Socials1 from "@/components/shared/socials/Socials1";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";

interface PropType {
	currentItemId?: number | string;
}

const fallbackSkills = [
	{ category: "Business Consultants", proficiency: 82 },
	{ category: "Client Communication", proficiency: 90 },
];

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

const TeamDetails2 = ({ currentItemId }: PropType) => {
	const items = getTeamMembers();
	const currentItem = items?.find(({ id }) => currentItemId === id);
	const {
		name,
		desig,
		img = "/images/team/team-1.webp",
		shortBio,
		professionalSkillsBio,
		email,
		phone,
		workExperienceSummary,
		yearsOfExperience,
		socialLinks,
		skills,
	} = currentItem || {};

	const phoneHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : "tel:10095447818";
	const hasCustomSocialLinks = Boolean(
		socialLinks?.facebook ||
			socialLinks?.linkedin ||
			socialLinks?.instagram ||
			socialLinks?.x,
	);
	const skillsToRender = skills && skills.length > 0 ? skills : fallbackSkills;

	return (
		<section className="team-details sidebar-sticky-container">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-5">
						<div className="team-details__img sidebar-sticky">
							<Image
								width={616}
								height={864}
								style={{
									width: "100%",
									height: "auto",
									objectFit: "cover",
									display: "block",
									mixBlendMode: "normal",
								}}
								src={img}
								alt=""
							/>
						</div>
					</div>
					<div className="col-12 col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name">Hello, I am {name}</h2>
							<span className="team-details__desig">{desig}</span>
							<p>
								{shortBio ||
									"Our mission is to empowers businesses sizes thrive businesses ev changing marketplace We are committed to the delivering exceptional value through strategic inset innovative approaches. Our consulting of our missing empower."}
							</p>
							<div className="team-details__contact-info">
								<ul>
									<li>
										<span>Email address</span>
										<Link href={`mailto:${email || "eade.marren@ainex.com"}`}>
											{email || "eade.marren@ainex.com"}
										</Link>
									</li>
									<li>
										<span>Phone number</span>
										<Link href={phoneHref}>{phone || "+1 (009) 544-7818"}</Link>
									</li>
								</ul>
							</div>
							<div className="social-links style-2">
								{hasCustomSocialLinks ? (
									<ul>
										{socialLinks?.facebook ? (
											<li>
												<Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
													<i className="tji-facebook"></i>
												</Link>
											</li>
										) : null}
										{socialLinks?.linkedin ? (
											<li>
												<Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
													<i className="tji-linkedin"></i>
												</Link>
											</li>
										) : null}
										{socialLinks?.instagram ? (
											<li>
												<Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
													<i className="tji-instagram"></i>
												</Link>
											</li>
										) : null}
										{socialLinks?.x ? (
											<li>
												<Link href={socialLinks.x} target="_blank" rel="noopener noreferrer">
													<i className="tji-x-twitter"></i>
												</Link>
											</li>
										) : null}
									</ul>
								) : (
									<Socials1 />
								)}
							</div>
							<div className="team-details__experience">
								<h4 className="team-details__subtitle">Work experience</h4>
								<p>
									{workExperienceSummary ||
										"Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are committed to the delivering exceptionals the value thro strategic ins innovative approaches. Our consulting of our missing empowers businesses of all sizes Committed to the delivering exceptional in the values"}
								</p>
								<div className="team-details__experience__list">
									<ul>
										<li>
											<i className="tji-check-2"></i>
											<p>
												{yearsOfExperience
													? `${yearsOfExperience} years of professional experience`
													: "We believe that the human essential start any successful project."}
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="team-details__skills">
								<h4 className="team-details__subtitle">Professional skills</h4>
								<p>
									{professionalSkillsBio ||
										"Focused on practical HR execution, policy-aligned operations, and measurable team support through structured processes and disciplined coordination."}
								</p>
								<ul className="tj-progress-list">
									{skillsToRender.map((skill, idx) => (
										<li key={`${skill.category}-${idx}`}>
											<h6 className="tj-progress-title">{skill.category}</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">
													{skill.proficiency}%
												</span>
												<div
													className="tj-progress-bar"
													data-percent={String(skill.proficiency)}
													style={{ width: `${clampPercent(skill.proficiency)}%` }}
												></div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails2;
