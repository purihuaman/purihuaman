interface Repository {
	date: string;
	id: number;
	image: string;
	imageWebp: string;
	languages: string[];
	linkPage: string;
	titleRepo: string;
	urlCode: string;
	urlGithub: string;
}

interface ResponseOption {
	data: Repository[];
	error: string;
	success: boolean;
}

export { Repository, ResponseOption };
