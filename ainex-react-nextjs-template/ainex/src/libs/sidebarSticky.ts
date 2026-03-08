import { gsap } from "@/libs/gsap.config";

const sidebarSticky = (): void => {
	const animItems = gsap.utils.toArray<HTMLElement>(
		".sidebar-sticky-container"
	);

	if (animItems.length) {
		animItems.forEach((container: HTMLElement) => {
			const panels = container.querySelectorAll<HTMLElement>(".sidebar-sticky");
			if (panels.length) {
				const mediaMatch = gsap.matchMedia();
				mediaMatch.add("(min-width: 992px)", () => {
					const startOffset = 30;
					const delayedStartOffset = 210;
					const serviceStickyTop = 130;
					const lastIdx = panels.length - 1;
					const lastPanel = panels[lastIdx];
					const paddingBottom =
						parseInt(getComputedStyle(container).paddingBottom) || 0;
					const aboutReadMoreButton = container.querySelector<HTMLElement>(
						".about-bottom-area-2 .tj-primary-btn"
					);
					const aboutArea = container.querySelector<HTMLElement>(".about-area");
					panels.forEach((panel: HTMLElement) => {
						const isAboutPanel = panel.classList.contains("sidebar-sticky-about");
						const isDelayedServiceSidebar = panel.classList.contains(
							"service-sidebar-sticky-delayed"
						);
						const serviceStickyEnd = container.querySelector<HTMLElement>(
							".service-details-sticky-end"
						);
						const serviceMaxShift = () => {
							const availableHeight = window.innerHeight - serviceStickyTop;
							return Math.max(panel.offsetHeight - availableHeight, 0);
						};
						gsap.to(panel, {
							y: isDelayedServiceSidebar ? () => -serviceMaxShift() : 0,
							scrollTrigger: {
								trigger: panel,
								start: isDelayedServiceSidebar
									? `top+=${delayedStartOffset} top+=${serviceStickyTop}`
									: `top-=${startOffset} top`,
								endTrigger: isDelayedServiceSidebar
									? serviceStickyEnd || container
									: isAboutPanel
										? aboutReadMoreButton || aboutArea || container
										: container,
								end: isDelayedServiceSidebar
									? "bottom bottom"
									: isAboutPanel
										? "bottom bottom"
										: () =>
												`bottom top+=${
													lastPanel.offsetHeight + startOffset + paddingBottom
												}`,
								pin: true,
								pinSpacing: false,
								scrub: true,
								markers: false,
								invalidateOnRefresh: true,
							},
							ease: "circ",
						});
					});
				});
			}
		});
	}
};

export default sidebarSticky;
