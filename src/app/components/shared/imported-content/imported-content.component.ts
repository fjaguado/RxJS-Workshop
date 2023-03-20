import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imported-content',
  templateUrl: './imported-content.component.html',
  styleUrls: ['./imported-content.component.scss'],
})
export class ImportedContentComponent implements OnInit {
  @Input() public videoSrc: string = undefined;
  @Input() public imgSrc: string = undefined;

  constructor() {}

  ngOnInit() {}
}
