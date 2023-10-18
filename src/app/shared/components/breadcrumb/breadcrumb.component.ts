import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'breadcrumb',
    templateUrl: 'breadcrumb.component.html',
    standalone: true,
    imports: [RouterModule],
})
export class BreadcrubmComponent implements OnInit {
    @Input({ required: true }) currentPageName: string = '';
    constructor() {}

    ngOnInit() {}
}
