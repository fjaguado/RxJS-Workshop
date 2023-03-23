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
    <p>
      We have to take into account that the source and the combined observer <b>must</b> at least emit a value to emit a combined data. If both had emitted at least a value, even if the source or the combined stream emit data, they will collect the last emitted value from each stream.
    </p>
    <p>
      For example:
      <ol>
        <li>
          If we haven't emitted any data from any source and we click on the "Emit other data!", nothing will happen because this operator will wait until all of the streams emit at least a value (this applies also for the other button).
        </li>
        <li>
          If we emit data from both sources and we click on the "Emit other data!", it will emit the last emitted value from each source.
        </li>
      </ol>
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

export const WITH_LATEST_FROM_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      withLatestFrom combines the source observable with other streams and emits values calculated from the latest values of each, <b>only when the source emits.</b>
    </p>
    <p>
      Just as with combineLatest it still waits for at least one emitted value from each stream and may complete without a single emission when the guiding stream completes. It will never complete if the guiding stream doesn’t complete and will throw an error if any of the inner streams errors out.
    </p>
    `,
  },
  {
    title: 'Differences with combineLatest',
    body: `
    <p>
      While the similar combineLatest operator emits a new value whenever there’s a new emission from any of the input streams, <b>withLatestFrom emits a new value only if there’s a new emission from the source stream.</b>
    </p>
    `,
  },
  {
    title: 'Example with strings',
    body: `
    <p>
      We have to take into account that the source and the combined observer <b>must</b> at least emit a value to emit a combined data.
    </p>
    <p>
      For example:
      <ol>
        <li>
          If we haven't emitted any data from any source and we click on the "Send latest observer!", nothing will happen because this operator will wait until all of the streams emit at least a value (this applies also for the other button).
        </li>
        <li>
          If we emit data from both sources and we click on the "Send latest observer!", it will <b>NOT</b> emit any data because this operator <b>will wait until the source observable emits a value</b>. When the source observer emits data, it will collect both streams data (unless the combined stream hasn't emitted any data).
        </li>
      </ol>
    </p>
    `,
  },
];

export const CONCAT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      <b>concat</b> combines a number of observables streams and sequentially emits all values from every given input stream. It only has one active subscription at a time from which the values are passed down to an observer. Once the current active stream completes it subscribes to next observable in a sequence. As values from any combined sequence are produced, those values are emitted as part of the resulting sequence.
    </p>
    <p>
      Please note that concat will never complete if some of the input streams don’t complete. This also means that some streams will never be subscribed to.
    </p>
    `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      Use this operator if <b>the order of emissions is important</b> and you want to first see values emitted by streams that you pass first to the operator. For example, you may have an observable sequences that delivers values from a cache and another sequence that delivers values from a remote server. Use concat if you want to combine them and ensure that the value from cache is delivered first.
    </p>
    `,
  },
  {
    title: 'Example with strings',
    body: `
    <p>
      In this case, when we click on the "Concat!" button, all three observer will try to emit their values, but they will have to wait a specified time until they are able to emit a value. As we're using the concat operator, all values are going to be sent in an <b>ordered</b> sequence.
      <ol>
        <li>
          After two seconds, we'll receive the first observer's value.
        </li>
        <li>
          Then, we'll have to wait 6 seconds for the second observer to emit.
        </li>
        <li>
          Lastly, after we've received the second observer, we'll have to wait another 4 seconds for the third observer to emit.
        </li>
      </ol>
    </p>
    `,
  },
];

export const MERGE_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      <b>merge</b> combines a number of observables streams and concurrently emits all values from every given input stream. As values from any combined sequence are produced, those values are emitted as part of the resulting sequence. Such process is often referred to as flattening in documentation.
    </p>
    `,
  },
  {
    title: 'Usage',
    body: `
      <p>
        Use this operator if you’re not concerned with the order of emissions and is simply interested in all values coming out from multiple combined streams as if they were produced by one stream.
      </p>
    `,
  },
  {
    title: 'Example with strings',
    body: `
    <p>
      In this case, when we click on the "Merge!" button, all three observer will try to emit their values, but they will have to wait a specified time until they are able to emit a value. As we're using the merge operator, all values are going to be sent in an <b>unordered</b> sequence.
      <ol>
        <li>
          After two seconds, we'll receive the first observer's value.
        </li>
        <li>
          Then, we'll receive the third observer's value because we've waited 4 seconds for this observer to emit.
        </li>
        <li>
          Lastly, we'll receive the second observer's value because we've waited 6 seconds for this observer to emit.
        </li>
      </ol>
    </p>
    `,
  },
];

export const START_WITH_SECTION: SECTION[] = [
  {
    title: '',
    body: `
      <p>
        Returns an observable that, at the moment of subscription, will synchronously emit all values provided to this operator, then subscribe to the source and mirror all of its emissions to subscribers. This is a useful way to know when subscription has occurred on an existing observable. First emits its arguments in order, and then any emissions from the source.
      </p>
    `,
  },
  {
    title: 'Example with strings',
    body: `
      <p>
        In this case we'll be able to send an observable with a pre-defined order data because we'll be able to send either the first or second observer in the stream line.
      </p>
    `,
  },
];
