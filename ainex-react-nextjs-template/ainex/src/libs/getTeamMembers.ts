import teamMembers from "@/data/team-members.json";

interface TeamSocialLinks {
	facebook?: string;
	linkedin?: string;
	instagram?: string;
	x?: string;
}

interface TeamSkillType {
	category: string;
	proficiency: number;
}

export interface TeamSingleType {
	id: number;
	name: string;
	img: string;
	desig: string;
	shortBio?: string;
	professionalSkillsBio?: string;
	email?: string;
	phone?: string;
	workExperienceSummary?: string;
	yearsOfExperience?: string;
	socialLinks?: TeamSocialLinks;
	skills?: TeamSkillType[];
}

const getTeamMembers = () => {
	return [...(teamMembers as TeamSingleType[])].sort((a, b) => a.id - b.id);
};

export default getTeamMembers;
