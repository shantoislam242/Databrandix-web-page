"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LogoProps {
	headerType: number;
	isStickyHeader: boolean;
}

const Logo: FC<LogoProps> = ({ headerType, isStickyHeader }) => {
	const logoSrc = "/images/logos/logo.webp";

	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={logoSrc}
					alt="Logo"
					width={636}
					height={154}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
