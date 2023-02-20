export interface Link {
  title: string;
  isSelectable?: boolean;
  isParent?: boolean;
  url?: string;
  childLinks?: Link[];
}

export enum ROUTES {
  BASIC_DEFINITIONS = 'basic-definitions',
  SUBJECTS = 'subjects',
  OF_FROM_FROMEVENT = 'of-from-fromevent',
  COMBINE_LATEST = 'combine-latest',
  WITH_LATEST_FROM = 'with-latestFrom',
  CONCAT = 'concat',
  MERGE = 'merge',
  START_WITH = 'start-with',
  FORK_JOIN = 'fork-join',
  ZIP = 'zip',
  DEBOUNCE_TIME = 'debounce-time',
  DISTINCT_UNTIL_CHANGED = 'distinct-until-changed',
  DISTINCT_UNTIL_KEY_CHANGED = 'distinct-until-key-changed',
  FILTER = 'filter',
  TAKE_UNTIL = 'take-until',
  SHARE_REPLAY = 'share-replay',
  CATCH_ERROR = 'catch-error',
  MAP = 'map',
  CONCAT_MAP = 'concat-map',
  EXHAUST_MAP = 'exhaust-map',
  SWITCH_MAP = 'switch-map',
  TAP = 'tap',
  FINALIZE = 'finalize',
}
