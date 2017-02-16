import { Component, OnInit } from '@angular/core';
import { IUser } from './../user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
    product: IUser[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
     }

    onBack(): void {
        this._router.navigate(['/users']);
    }
}


