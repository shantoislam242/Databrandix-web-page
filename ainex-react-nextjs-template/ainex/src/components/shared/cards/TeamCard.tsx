import { TeamSingleType } from "@/libs/getTeamMembers";
import Image from "next/image";
import Link from "next/link";

interface PropType {
	item: TeamSingleType;
}

const TeamCard = ({ item }: PropType) => {
	const { id, name, desig, img = "/images/team/team-1.webp", socialLinks } = item || {};
	const effectiveSocialLinks = {
		facebook:
			socialLinks?.facebook || "https://www.facebook.com/Databrandix.Official",
		linkedin:
			socialLinks?.linkedin ||
			"https://www.linkedin.com/company/databrandix/posts/?feedView=all",
		instagram:
			socialLinks?.instagram || "https://www.instagram.com/databrandix.official/",
		x: socialLinks?.x || "https://x.com/databrandix1",
	};

	return (
		<div className="team-item">
			<div className="team-img">
				<Image
					width={616}
					height={864}
					style={{ height: "auto" }}
					src={img}
					alt=""
				/>
			</div>
			<div className="team-content">
				<h5 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h5>
				<span className="designation">{desig}</span>
			</div>
			<div className="social-links style-2">
				<span className="share-icon">
					<i className="tji-share"></i>
				</span>
				<ul>
					<li>
						<Link href={effectiveSocialLinks.facebook} target="_blank" rel="noopener noreferrer">
							<i className="tji-facebook"></i>
						</Link>
					</li>
					<li>
						<Link href={effectiveSocialLinks.linkedin} target="_blank" rel="noopener noreferrer">
							<i className="tji-linkedin"></i>
						</Link>
					</li>
					<li>
						<Link href={effectiveSocialLinks.instagram} target="_blank" rel="noopener noreferrer">
							<i className="tji-instagram"></i>
						</Link>
					</li>
					<li>
						<Link href={effectiveSocialLinks.x} target="_blank" rel="noopener noreferrer">
							<i className="tji-x-twitter"></i>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default TeamCard;
