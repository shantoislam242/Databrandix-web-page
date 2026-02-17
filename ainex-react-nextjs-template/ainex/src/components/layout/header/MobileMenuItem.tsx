"use client";

import Link from "next/link";
import { Children, FC, ReactNode, useState } from "react";

interface MobileMenuItemProps {
	children?: ReactNode;
	text: string;
	url?: string;
	submenuClass?: string;
}

const MobileMenuItem: FC<MobileMenuItemProps> = ({
	children,
	text,
	url,
	submenuClass,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const hasSubmenu = Children.count(children) > 0;

	const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (!hasSubmenu) return;
		handleToggle(e);
	};

	return (
		<li className={`has-dropdown ${isOpen ? "dropdown-opened" : ""}`}>
			<Link href={url ?? "#"} onClick={handleItemClick}>
				{text}
			</Link>

			{hasSubmenu && (
				<ul
					className={`sub-menu ${submenuClass ?? ""}`}
					style={{ display: !isOpen ? "none" : "" }}
				>
					{children}
				</ul>
			)}

			{hasSubmenu && (
				<button
					type="button"
					className={`mean-expand ${isOpen ? "mean-clicked" : ""}`}
					style={{ fontSize: "18px" }}
					onClick={handleToggle}
					aria-label={`${text} submenu toggle`}
					aria-expanded={isOpen}
				>
					<i className="tji-arrow-menu"></i>
				</button>
			)}
		</li>
	);
};

export default MobileMenuItem;
