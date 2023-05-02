import { SECTION } from "src/app/models/data.model";

export const OF_MAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Applies a given project function to each value emitted by the source Observable and emits the resulting values as an Observable.
    </p>
    <p>
     It takes an observable source as input. It applies a project function to each of the values emitted by the source observable and transforms it into a new value. It then emits the new value to the subscribers.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      This function is useful when you want to transform the values emitted by an observable into a new set of values. You can use it to convert data from one format to another or to extract specific properties from an object.  
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { from } from 'rxjs';
    import { map } from 'rxjs/operators';
    
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //add 10 to each value
    const example = source.pipe(map(val => val + 10));
    //output: 11,12,13,14,15
    const subscribe = example.subscribe(val => console.log(val));
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are adding 5 to the values of the array.
    </p>
    `,
  },
];
export const OF_CONCAT_MAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Map values to inner observable, subscribe and emit in order.
    </p>
    <p>
      ConcatMap maps each value from the source observable into an inner observable, subscribes to it, and then starts emitting the values from it replacing the original value. It creates a new inner observable for every value it receives from the Source. It merges the values from all its inner observables in the order in which they are subscribed and emits the values back into the stream. 
      Unlike SwitchMap, ConcatMap does not cancel any of its inner observables. 
      It is like MergeMap except for one difference that it maintains the order of its inner observables.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      It is useful when you want to maintain the order of emissions of an observable while also performing some operation that returns a new observable for each value emitted by the source observable. It is especially useful for scenarios where you need to make sequential HTTP requests or any other operation that depends on the result of the previous operation.
      Emissions are processed sequentially, one at a time.
      Order matters.
      Insert, update and delete operations.
  
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { fromEvent, concatMap, interval, take } from 'rxjs';
 
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))
    );
    result.subscribe(x => console.log(x));
     
    // Results in the following:
    // (results are not concurrent)
    // For every click on the "document" it will emit values 0 to 3 spaced
    // on a 1000ms interval
    // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are sending five http request but waiting the prior response to request a new one.
    </p>
    `,
  },
];
export const OF_MERGE_MAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Applies a given project function to each value emitted by the source Observable and emits the resulting values as an Observable.
    </p>
    <p>
      MergeMap maps each value from the source observable into an inner observable, subscribes to it, and then starts emitting the values from it replacing the original value. It creates a new inner observable for every value it receives from the Source. Unlike SwitchMap, MergeMap does not cancel any of its inner observables. It merges the values from all of its inner observables and emits the values back into the stream.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      It is useful when needs to process concurrently the information (often more performant)
      Order does not matter.
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { of, mergeMap, interval, map } from 'rxjs';
 
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x + i)))
    );
     
    result.subscribe(x => console.log(x));
     
    // Results in the following:
    // a0
    // b0
    // c0
    // a1
    // b1
    // c1
    // continues to list a, b, c every second with respective ascending integers
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are sending five http request at the same time and receiving the information as they come.
    </p>
    `,
  },
];
export const OF_EXHAUST_MAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Map to inner observable, ignore other values until that observable completes.
    </p>
    <p>
      ExhaustMap  is used to handle scenarios when you have multiple events firing concurrently and you want to ignore events until a previous event completes.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
     The operator is often used in situations where you have some long-running process that may emit multiple events before it completes, and you only want to handle the events from the latest process, ignoring any intermediate events from previous processes. 
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { fromEvent, interval } from 'rxjs';
    import { exhaustMap, take } from 'rxjs/operators';
    
    const button = document.querySelector('button');
    const output = document.querySelector('output');
    
    fromEvent(button, 'click')
      .pipe(
        exhaustMap(() => interval(1000).pipe(take(5)))
      )
      .subscribe(
        value => output.textContent = value.toString(),
        err => console.error(err),
        () => console.log('Completed')
      );
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are executing the inner observables before continue with the main one.
    </p>
    `,
  },
];
export const OF_SWITCH_MAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.
    </p>
    <p>
      SwitchMap maps each value from the source observable into an inner observable, subscribes to it, and then starts emitting the values from it. It creates a new inner observable for every value it receives from the Source. Whenever it creates a new inner observable, it unsubscribes from all the previously created inner observables. Basically, it switches to the newest observable discarding all other.
      Stop/Cancel processing of prior emitted value.
      Switches to the new emitted value.
      Performs the mapping operation.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
       Only the latest emission matters.
       Allows you to switch to a new observable whenever a new value is emitted and ensure that only the most recent observable is subscribed to. It is commonly used when you have an observable that emits values, and you want to use these values to fetch new data. 
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { from, of } from 'rxjs';
    import { switchMap } from 'rxjs/operators';
    
    const array$ = from([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const modifiedArray$ = array$.pipe(
      switchMap(arr => of(arr.map(num => num * 2)))
    );
    
    modifiedArray$.subscribe(console.log); // Output: [2, 4, 6], [8, 10, 12], [14, 16, 18]

  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are performing five calls and only receiving the information from the last one.
    </p>
    `,
  },
];
