import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ModalService {
	private _openModal$ = new BehaviorSubject(false);
	public openModal$ = this._openModal$.asObservable();

	constructor() {}

	public setOpenModal(flag: boolean): void {
		this._openModal$.next(flag);
	}
}
