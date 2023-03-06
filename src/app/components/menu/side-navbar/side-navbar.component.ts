import { Component, EventEmitter, Output } from '@angular/core';
import { Link, ROUTES } from '../../../models/menu.model';

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
      url: 'collapseChild-basic-definitions',
      isSelectable: false,
      isParent: true,
      childLinks: [
        {
          title: 'Introduction',
          url: ROUTES.INTRODUCTION,
          isSelectable: true,
        },
        {
          title: 'Observable',
          url: ROUTES.OBSERVABLE,
          isSelectable: true,
        },
        {
          title: 'Observer',
          url: ROUTES.OBSERVER,
          isSelectable: true,
        },
        {
          title: 'Operators',
          url: ROUTES.OPERATORS,
          isSelectable: true,
        },
        {
          title: 'Marble diagram',
          url: ROUTES.MARBLE_DIAGRAM,
          isSelectable: true,
        },
        {
          title: 'Subscription',
          url: ROUTES.SUBSCRIPTION,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Subjects',
      url: 'collapseChild-subjects',
      isSelectable: false,
      isParent: true,
      childLinks: [
        {
          title: 'Subject',
          url: ROUTES.SUBJECT,
          isSelectable: true,
        },
        {
          title: 'BehaviorSubject',
          url: ROUTES.BEHAVIOR_SUBJECT,
          isSelectable: true,
        },
        {
          title: 'ReplaySubject',
          url: ROUTES.REPLAY_SUBJECT,
          isSelectable: true,
        },
        {
          title: 'AsyncSubject',
          url: ROUTES.ASYNC_SUBJECT,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Creation operators',
      url: 'collapseChild-creation-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'of / from / fromEvent',
          url: ROUTES.OF_FROM_FROMEVENT,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Combination operators',
      url: 'collapseChild-combination-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'combineLatest',
          url: ROUTES.COMBINE_LATEST,
          isSelectable: true,
        },
        {
          title: 'withLatestFrom',
          url: ROUTES.WITH_LATEST_FROM,
          isSelectable: true,
        },
        {
          title: 'concat',
          url: ROUTES.CONCAT,
          isSelectable: true,
        },
        {
          title: 'merge',
          url: ROUTES.MERGE,
          isSelectable: true,
        },
        {
          title: 'startWith',
          url: ROUTES.START_WITH,
          isSelectable: true,
        },
        {
          title: 'forkJoin',
          url: ROUTES.FORK_JOIN,
          isSelectable: true,
        },
        {
          title: 'zip',
          url: ROUTES.ZIP,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Filtering operators',
      url: 'collapseChild-filtering-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'debounceTime',
          url: ROUTES.DEBOUNCE_TIME,
          isSelectable: true,
        },
        {
          title: 'distinctUntilChanged',
          url: ROUTES.DISTINCT_UNTIL_CHANGED,
          isSelectable: true,
        },
        {
          title: 'distinctUntilKeyChanged',
          url: ROUTES.DISTINCT_UNTIL_KEY_CHANGED,
          isSelectable: true,
        },
        {
          title: 'filter',
          url: ROUTES.FILTER,
          isSelectable: true,
        },
        {
          title: 'takeUntil',
          url: ROUTES.TAKE_UNTIL,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Multicasting operators',
      url: 'collapseChild-multicasting-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'shareReplay',
          url: ROUTES.SHARE_REPLAY,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Error handling operators',
      url: 'collapseChild-error-handling-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'catchError',
          url: ROUTES.CATCH_ERROR,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Transformation operators',
      url: 'collapseChild-transformation-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'map',
          url: ROUTES.MAP,
          isSelectable: true,
        },
        {
          title: 'concatMap',
          url: ROUTES.CONCAT_MAP,
          isSelectable: true,
        },
        {
          title: 'exhaustMap',
          url: ROUTES.EXHAUST_MAP,
          isSelectable: true,
        },
        {
          title: 'switchMap',
          url: ROUTES.SWITCH_MAP,
          isSelectable: true,
        },
      ],
    },
    {
      title: 'Utility operators',
      url: 'collapseChild-utility-operators',
      isParent: true,
      isSelectable: false,
      childLinks: [
        {
          title: 'tap',
          url: ROUTES.TAP,
          isSelectable: true,
        },
        {
          title: 'finalize',
          url: ROUTES.FINALIZE,
          isSelectable: true,
        },
      ],
    },
  ];

  public doSelectTitle(link: Link): void {
    if (link.isSelectable || (link.isParent && link.isSelectable)) {
      this.selectedTitle.emit(link);
    }
  }

  public getDropdownTarget({ isParent, url }: Link): string {
    return !isParent ? '' : `#${url}`;
  }
}
