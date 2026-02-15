import Link from "next/link";

const FooterServiceNavs = () => {
	return (
		<ul>
			<li>
				<Link href="/services/1">AI-Powered Solutions</Link>
			</li>
			<li>
				<Link href="/services/2">Custom Technology</Link>
			</li>
			<li>
				<Link href="/services/3">Predictive Analytics</Link>
			</li>
			<li>
				<Link href="/services/4">Machine Learning</Link>
			</li>
			<li>
				<Link href="/services/5">Language Processing</Link>
			</li>
			<li>
				<Link href="/services/6">Computer Vision</Link>
			</li>
		</ul>
	);
};

export default FooterServiceNavs;
