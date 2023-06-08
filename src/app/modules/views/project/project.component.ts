import { inject } from "@angular/core";
import { Component } from "@angular/core";
import { repositoryApiMapper } from "@core/constants/mapper";
import { Repository } from "@core/interfaces/repository";
import { RepositoryService } from "@services/repository.service";
import { Observable, catchError, map, of, tap } from "rxjs";

@Component({
	selector: "app-project",
	templateUrl: "./project.component.html",
	styleUrls: ["./project.component.scss"],
})
export class ProjectComponent {
	private repositoryservice: RepositoryService = inject(RepositoryService);
	projects: Repository[] = [];
	loading: boolean = false;
	isError: boolean = false;
	errorMessage: string = "";

	ngOnInit(): void {
		this.repositoryservice
			.getRepository()
			.pipe(
				// tap((resp: Object) => {
				// 	const repositories = Object.values(resp).filter(
				// 		(repository) => repository.default_branch === "start"
				// 	);

				// 	repositories
				// 		.map((repo) => repositoryApiMapper(repo))
				// 		.sort(
				// 			(a: { date: string }, b: { date: string }) =>
				// 				new Date(b.date).getTime() - new Date(a.date).getTime()
				// 		);
				// }),

				map((response: Object) => {
					const repositories = Object.values(response).filter(
						(repository) => repository.default_branch === "start"
					);

					return repositories
						.map((repo) => repositoryApiMapper(repo))
						.sort(
							(a: { date: string }, b: { date: string }) =>
								new Date(b.date).getTime() - new Date(a.date).getTime()
						);
				}),
				catchError((error: any) => {
					this.isError = true;
					if (error?.status) {
						this.errorMessage =
							"No se pudo cargar los datos. Por favor, inténtalo de nuevo más tarde.";
						// console.log("Ocurrio un error", error);
					}

					return of([]);
				})
			)
			.subscribe((repository: Repository[]) => {
				// console.log(repository);
				this.loading = true;
				this.projects = repository;
			});
	}
}
