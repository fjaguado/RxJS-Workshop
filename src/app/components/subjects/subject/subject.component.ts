import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SECTION } from '../../../models/data.model';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html',
})
export class SubjectComponent implements OnInit {
  public selectedData: SECTION[];

  constructor(private readonly route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data) => (this.selectedData = data.selectedData)
    );
  }
}
