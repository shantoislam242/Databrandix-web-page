"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
	headerType: number;
	isStickyHeader: boolean;
}

const Logo: FC<LogoProps> = ({ headerType, isStickyHeader }) => {
	const logoSrc = "/images/logos/Xlogo.webp";

	return (
		<div className="site_logo logo-container">
			<Link className="logo logo-link" href="/">
				<Image
					src={logoSrc}
					alt="Logo"
					fill
					className="logo-image"
					sizes="(max-width: 575px) 173px, (max-width: 991px) 198px, 231px"
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
