import { SECTION } from "src/app/models/data.model";

export const CATCH_ERROR_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This operator handles errors, but forwards along all other events to the resulting observable. If the source observable terminates with an error, it will map that error to a new observable, subscribe to it, and forward all of its events to the resulting observable.
    </p>
    <p>
      It only listens to the error channel and ignores notifications. Handles errors from the source observable, and maps them to a new observable. The error may also be rethrown, or a new error can be thrown to emit an error from the result.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      Usually needed it when we subscribe and start to receive the values from the obs observable, for example in the ngOnInit method. Then, when the observable stream throws an error, it invokes the error callback. 
      In the error callback, we decide what to do with the error and send back something to manage error results.  
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { fromEvent } from 'rxjs';
    import { debounceTime, map } from 'rxjs/operators';

    // elem ref
    const searchBox = document.getElementById('search');

    // streams
    const keyup$ = fromEvent(searchBox, 'keyup');

    // wait .5s between keyups to emit current value
    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(console.log);
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are waiting .5 sec between keyups to emit current value.
    </p>
    `,
  },
];