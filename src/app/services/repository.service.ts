import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { API_HOST } from "@core/constants/api";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class RepositoryService {
	private httpClient: HttpClient = inject(HttpClient);

	constructor() {}

	ngOnInit(): void {}

	public getRepository(): Observable<Object> {
		return this.httpClient.get(API_HOST);
	}
}
