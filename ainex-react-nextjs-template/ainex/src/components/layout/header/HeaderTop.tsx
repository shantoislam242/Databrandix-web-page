"use client";

import Link from "next/link";
import { FC } from "react";

interface HeaderTopProps {
	type?: number;
}

const HeaderTop: FC<HeaderTopProps> = ({ type }) => {
	return (
		<div className={`header-top${type === 2 ? " style-2" : ""}`}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="header-top-content">
							<p className="topbar-text">
								<i className="tji-idea"></i>Insight. Decision. Develop.{" "}
								<Link href="/contact">Explore</Link>
							</p>
							<div className="header-info">
								<div className="info-item">
									<span>
										<i className="tji-envelop-2"></i>
									</span>
									<Link href="mailto:info@databrandix.com">info@databrandix.com</Link>
								</div>
								<div className="info-item">
									<span>
										<i className="tji-phone-2"></i>
									</span>
									<Link href="tel:+8801811699667">+8801811699667</Link>
								</div>
								<div className="info-item">
									<div className="social-links">
										<ul>
											<li>
												<Link href="https://www.facebook.com/Databrandix.Official" target="_blank">
													<i className="tji-facebook"></i>
												</Link>
											</li>
											<li>
												<Link href="https://www.instagram.com/databrandix.official/" target="_blank">
													<i className="tji-instagram"></i>
												</Link>
											</li>
											<li>
												<Link href="https://www.linkedin.com/company/databrandix/posts/?feedView=all" target="_blank">
													<i className="tji-linkedin"></i>
												</Link>
											</li>
											<li>
												<Link href="https://x.com/databrandix1" target="_blank">
													<i className="tji-x-twitter"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
