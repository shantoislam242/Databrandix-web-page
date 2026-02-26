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
						gsap.to(panel, {
							scrollTrigger: {
								trigger: panel,
								start: `top-=${startOffset} top`,
								endTrigger: isAboutPanel
									? aboutReadMoreButton || aboutArea || container
									: container,
								end: isAboutPanel
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
