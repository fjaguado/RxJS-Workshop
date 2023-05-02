import { SECTION } from "src/app/models/data.model";

export const OF_TAP_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      The Angular Tap RxJs operator returns an observable that is identical to the source. It does not modify the stream in any way. Tap operator is useful for logging the value, debugging the stream for the correct values, or perform any other side effects.
    </p>
    <p>
      The observable returned by tap is an exact mirror of the source, with one exception: Any error that occurs -- synchronously -- in a handler provided to tap will be emitted as an error from the returned observable.
      ⚠ Be careful! You can mutate objects as they pass through the tap operator's handlers.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      The most common use of tap is for debugging. You can place a tap(console.log) anywhere in your observable pipe, log out the notifications as they are emitted by the source returned by the previous operation.  
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { of } from 'rxjs';
    import { tap, map } from 'rxjs/operators';
    
    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
      tap(val => console.log(\`BEFORE MAP: \${val}\`)),
      map(val => val + 5),
      tap(val => console.log(\`AFTER MAP: \${val}\`))
    );
    
    //'tap' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(val => console.log(val));
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, showing the previous and next value before by adding 5 to value.
    </p>
    `,
  },
];
export const OF_FINALIZE_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      The Angular Tap RxJs operator returns an observable that is identical to the source. It does not modify the stream in any way. Tap operator is useful for logging the value, debugging the stream for the correct values, or perform any other side effects.
    </p>
    <p>
      The observable returned by tap is an exact mirror of the source, with one exception: Any error that occurs -- synchronously -- in a handler provided to tap will be emitted as an error from the returned observable.
      ⚠ Be careful! You can mutate objects as they pass through the tap operator's handlers.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      The most common use of tap is for debugging. You can place a tap(console.log) anywhere in your observable pipe, log out the notifications as they are emitted by the source returned by the previous operation.  
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { of } from 'rxjs';
    import { tap, map } from 'rxjs/operators';
    
    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
      tap(val => console.log(\`BEFORE MAP: \${val}\`)),
      map(val => val + 5),
      tap(val => console.log(\`AFTER MAP: \${val}\`))
    );
    
    //'tap' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(val => console.log(val));
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, showing the previous and next value before by adding 5 to value.
    </p>
    `,
  },
];