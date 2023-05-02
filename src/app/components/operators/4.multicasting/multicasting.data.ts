import { SECTION } from "src/app/models/data.model";

export const OF_SHARE_REPLAY_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This operator is a specialization of replay that connects to a source observable and multicasts through a ReplaySubject constructed with the specified arguments. 
    </p>
    <p>
      A successfully completed source will stay cached in the shareReplayed observable forever, but an errored source can be retried.
      When using the ShareReplayConfig configuration object, this operator has two options:
      <ul>
        <li>bufferSize: The maximum number of values to replay from the observable.</li>
        <li>refCount: If true, the observable will automatically unsubscribe when all subscribers have unsubscribed.</li>
      </ul>
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
       You generally want to use shareReplay when you have side-effects or taxing computations that you do not wish to be executed amongst multiple subscribers. It may also be valuable in situations where you know you will have late subscribers to a stream that need access to previously emitted values. This ability to replay values on subscription is what differentiates share and shareReplay.    </p>
    <code>
    <pre>
    // RxJS v6+
    import { interval, take, shareReplay } from 'rxjs';
 
    const shared$ = interval(2000).pipe(
      take(6),
      shareReplay(3)
    );
     
    shared$.subscribe(x => console.log('sub A: ', x));
    shared$.subscribe(y => console.log('sub B: ', y));
     
    setTimeout(() => {
      shared$.subscribe(y => console.log('sub C: ', y));
    }, 11000);
   
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, two subscribers will receive all the numbers from the very beginning and a third one will get only the last 3 values when it being subscribed.
    </p>
    `,
  },
];