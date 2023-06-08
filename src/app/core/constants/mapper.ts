import { Repository } from "@core/interfaces/repository";
import { environment } from "@env/environments.prod";

export const repositoryApiMapper = (repositoryObject: any): Repository => ({
	date: `${repositoryObject?.created_at.slice(0, 10)}`,
	id: repositoryObject?.id,
	image: `${environment.ROUTE_IMAGE}/${repositoryObject?.name}.jpg`,
	imageWebp: `${
		environment.ROUTE_IMAGE_WEBP
	}/${repositoryObject?.name.toLowerCase()}.webp`,
	languages: repositoryObject?.topics,
	linkPage: repositoryObject?.homepage,
	titleRepo: `${repositoryObject?.name.replaceAll("-", " ")}`,
	urlCode: repositoryObject?.url,
	urlGithub: repositoryObject?.svn_url,
});
