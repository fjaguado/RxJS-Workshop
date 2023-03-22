import { SECTION } from '../../../models/data.model';

export const COMBINE_LATEST_WITH_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      It allows to merge several streams by taking the most recent value from each input observable and emitting those values to the observer as a combined output (usually as an array). The operators caches the last value for each input observable and only once all input observables produced at least one value it emits the combined cached values to the observer.
    </p>
    <p>
      <b>The resulting stream completes when all inner streams complete</b> and will throw an error if any of the inner streams throws an error. <b>It will never complete if any of the inner streams doesn’t complete.</b> 
    </p>
    <p>
      On the other hand, if any stream does not emit value but completes, resulting stream will complete at the same moment without emitting anything, since it will be now impossible to include value from completed input stream in resulting sequence. Also, if some input stream does not emit any value and never completes, combineLatestWith will also never emit and never complete, since, again, it will wait for all streams to emit some value.
    </p>
    `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      This operator can be useful if you need to evaluate some combination of state which needs to be kept up-to-date when part of the state changes. A simple example would be a monitoring system. Each service is represented by a sequence that returns a Boolean indicating the availability of a said service. The monitoring status is green if all services are available so the projection function should simply perform a logical AND.
    </p>
    `,
  },
  {
    title: 'Example with strings',
    body: `
    <p>
      In this example we can send any string value and the combineLatestWith operator will get the last emitted value from each stream and will concat them into an array.
    </p>
    `,
  },
  {
    title: 'Example with BTC API requests',
    body: `
    <p>
      In this example we are getting BTC values from two different APIs and this operator will wmit the last emitted value from each API source and will concatenate them into an array. 
    </p>
    <p>
      <b>P.S: The APIs refresh their values within 1 minute, so try to combine streams betweeen this time margin</b>
    </p>
    `,
  },
];
