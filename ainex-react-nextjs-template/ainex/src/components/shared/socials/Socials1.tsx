import Link from "next/link";

const Socials1 = () => {
	return (
		<ul>
			<li>
				<Link href="https://www.facebook.com/Databrandix.Official" target="_blank">
					<i className="tji-facebook"></i>
				</Link>
			</li>
			<li>
				<Link href="https://www.linkedin.com/company/databrandix/posts/?feedView=all" target="_blank">
					<i className="tji-linkedin"></i>
				</Link>
			</li>
			<li>
				<Link href="https://www.instagram.com/databrandix.official/" target="_blank">
					<i className="tji-instagram"></i>
				</Link>
			</li>
			<li>
				<Link href="https://x.com/databrandix1" target="_blank">
					<i className="tji-x-twitter"></i>
				</Link>
			</li>
		</ul>
	);
};

export default Socials1;
