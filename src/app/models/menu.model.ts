export interface Link {
  title: string;
  isSelectable?: boolean;
  isParent?: boolean;
  url?: string;
  childLinks?: Link[];
}

export enum ROUTES {
  INTRODUCTION = 'introduction',
  OBSERVABLE = 'observable',
  OBSERVER = 'observer',
  OPERATORS = 'operators',
  SUBSCRIPTION = 'subscription',
  MARBLE_DIAGRAM = 'marble-diagram',
  SUBJECT = 'subject',
  BEHAVIOR_SUBJECT = 'behavior-subject',
  REPLAY_SUBJECT = 'replay-subject',
  ASYNC_SUBJECT = 'async-subject',
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

export const werfenLogo = `data:image/png;base64,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`;
