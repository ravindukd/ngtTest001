import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() { }

}
