import { Component, EventEmitter, Output } from '@angular/core';

export interface Link {
  title: string;
  isSelectable: boolean;
  url?: string;
  childLinks?: Link[];
}

@Component({
  selector: 'app-side-navbar',
  templateUrl: 'side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent {
  @Output() selectedTitle = new EventEmitter<Link>();

  public links: Link[] = [
    {
      title: 'Basic definitions',
      isSelectable: true,
    },
    {
      title: 'Subjects',
      isSelectable: true,
    },
    {
      title: 'Creation operators',
      url: 'collapseChild-creation-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'of / from / fromEvent',
          url: 'of-from-fromevent',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Combination operators',
      url: 'collapseChild-combination-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'combineLatest',
          url: 'combine-latest',
          isSelectable: true,
        },
        {
          title: 'withLatestFrom',
          url: 'with-latestFrom',
          isSelectable: true,
        },
        {
          title: 'concat',
          url: 'concat',
          isSelectable: true,
        },
        {
          title: 'merge',
          url: 'merge',
          isSelectable: true,
        },
        {
          title: 'startWith',
          url: 'start-with',
          isSelectable: true,
        },
        {
          title: 'forkJoin',
          url: 'fork-join',
          isSelectable: true,
        },
        {
          title: 'zip',
          url: 'zip',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Filtering operators',
      url: 'collapseChild-filtering-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'debounceTime',
          url: 'debounce-time',
          isSelectable: true,
        },
        {
          title: 'distinctUntilChanged',
          url: 'distinct-until-changed',
          isSelectable: true,
        },
        {
          title: 'distinctUntilKeyChanged',
          url: 'distinct-until-key-changed',
          isSelectable: true,
        },
        {
          title: 'filter',
          url: 'filter',
          isSelectable: true,
        },
        {
          title: 'takeUntil',
          url: 'takeUntil',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Multicasting operators',
      url: 'collapseChild-multicasting-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'shareReplay',
          url: 'share-replay',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Error handling operators',
      url: 'collapseChild-error-handling-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'catchError',
          url: 'catch-error',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Transformation operators',
      url: 'collapseChild-transformation-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'map',
          url: 'map',
          isSelectable: true,
        },
        {
          title: 'concatMap',
          url: 'concat-map',
          isSelectable: true,
        },
        {
          title: 'exhaustMap',
          url: 'exhaust-map',
          isSelectable: true,
        },
        {
          title: 'switchMap',
          url: 'switch-map',
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Utility operators',
      url: 'collapseChild-utility-operators',
      isSelectable: false,
      childLinks: [
        {
          title: 'tap',
          url: 'tap',
          isSelectable: true,
        },
        {
          title: 'finalize',
          url: 'finalize',
          isSelectable: true,
        },
      ],
    },
  ];

  public doSelectTitle(link: Link): void {
    if (link.isSelectable) {
      this.selectedTitle.emit(link);
    }
  }
}
