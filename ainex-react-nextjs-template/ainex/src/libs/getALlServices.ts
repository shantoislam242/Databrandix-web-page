import services from "@/data/services.json";

export interface ServiceFaqType {
	title: string;
	desc: string;
}

export interface ServiceDetailsSectionItemType {
	title: string;
	desc: string;
}

export interface ServiceDetailsContentType {
	heroTitle?: string;
	introParagraphs?: string[];
	leftColumnPoints?: string[];
	rightColumnPoints?: string[];
	servicesRangeTitle?: string;
	servicesRangeDesc?: string;
	sectionA?: ServiceDetailsSectionItemType[];
	sectionB?: ServiceDetailsSectionItemType[];
}

export interface ServiceType {
	id: number;
	title: string;
	img: string;
	img2: string;
	iconName: string;
	desc: string;
	bulletPoints?: string[];
	faq?: ServiceFaqType[];
	details?: ServiceDetailsContentType;
}
const getALlServices = () => {
	return services;
};

export default getALlServices;
