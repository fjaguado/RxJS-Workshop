import { SECTION } from "src/app/models/data.model";

export const OF_DEBOUNCE_TIME_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This operator delays notifications emitted by the source Observable but drops previous pending delayed emissions if a new notification arrives at the source Observable.
    </p>
    <p>
      You can delay the emission of values from an input field, ensuring that only the latest value is emitted after a time of inactivity. This can help reduce unnecessary API requests and improve the overall performance of the application.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      It is commonly used when you simply need to return a value where an observable is expected or start an observable chain. 
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
export const OF_DISTINCT_UNTIL_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      When provided without parameters or with the first parameter (comparator), it behaves like this:
      <ul>
        <li>It will always emit the first value from the source.</li>
        <li>For all subsequent values pushed by the source, they will be compared to the previously emitted values using the provided comparator or an === equality check.</li>
        <li>If the value pushed by the source is determined to be unequal by this check, that value is emitted and becomes the new "previously emitted value" internally.</li>
      </ul>
    </p>
    <p>
      When a function parameter is provided, the behavior changes:
      <ul>
        <li>It will be used as a custom equality check function.</li>
        <li>This function will be called with two values, the previous and the current value, and should return a boolean indicating whether they are equal or not.</li>       
       </ul>
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      When you have an Observable that emits complex objects and you want to filter out the duplicates based on the object's contents. 
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { from } from 'rxjs';
    import { distinctUntilChanged } from 'rxjs/operators';
    
    // only output distinct values, based on the last emitted value
    const source$ = from([1, 1, 2, 2, 3, 3]);
    
    source$
      .pipe(distinctUntilChanged())
      // output: 1,2,3
      .subscribe(console.log);
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are removing the repeated values until we are receiving a different one.
    </p>
    `,
  },
];
export const OF_DISTINCT_UNTIL_KEY_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This function returns an Observable that emits items from the source Observable with distinct values based on the key specified.
    </p>
    <p>
      If a comparator function is provided, then it will be called for each item to test for whether that value should be emitted or not.
      If a comparator function is not provided, an equality check is used by default.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      It will filter the results based on the key value and only publish when a different key is provided.
      Uses a shallow comparison of the property values using the === operator.
      When you provide a comparison function to the distinctUntilKeyChanged operator, it uses that function to compare the values of the specified key instead of using the strict equality (===) operator.
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { of, distinctUntilKeyChanged } from 'rxjs';
    
    of(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    ).pipe(
      distinctUntilKeyChanged('name')
    )
    .subscribe(x => console.log(x));
    
    // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are selecting using the property 'Name' as key and only return the first distincts ones.
    </p>
    `,
  },
];
export const OF_FILTER_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      Is an operator that allows you to filter out emissions from an observable stream based on a predicate function.
    </p>
    <p>
      The first argument is the predicate function. This function is evaluated against each value of the source observable. Filter emits only those values which satisfies the predicate. The predicate function takes 2 parameters. The first one is the value emitted by the source. The second argument is zero based index. 
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      It is commonly used when you simply need to emit a value from the source if it passes a criterion function. 
    </p>
    <code>
    <pre>
    // RxJS v6+
    import { from } from 'rxjs';
    import { filter } from 'rxjs/operators';
    
    //emit (1,2,3,4,5)
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    const example = source.pipe(filter(num => num % 2 === 0));
    //output: "Even number: 2", "Even number: 4"
    const subscribe = example.subscribe(val => console.log(\`Even number: \${val}\`));
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are filtering ages below 25.
    </p>
    `,
  },
];
export const OF_TAKE_UNTIL_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      The takeUntil operator returns an Observable that emits value from the source Observable until the notifier Observable emits a value.
    </p>
    <p>
      TakeUntil emits the values from the Source Observable as long as it does not receive any value from the notifier observable
      When the notifier emits a value, the TakeUntil completes the Source observable.
    </p>
  `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      One of the use cases of takeUntil is to automatically unsubscribe all the observables. You can refer to it from the tutorial on Unsubscribing from an observable. 
    </p>
    <code>
    <pre>
 // RxJS v6+
	import { interval, timer } from 'rxjs';
	import { takeUntil } from 'rxjs/operators';
	
	//emit value every 1s
	const source = interval(1000);
	//after 5 seconds, emit value
	const timer$ = timer(5000);
	//when timer emits after 5s, complete source
	const example = source.pipe(takeUntil(timer$));
	//output: 0,1,2,3
	const subscribe = example.subscribe(val => console.log(val));
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we are showing number values until the Stop! button is clicked.
    </p>
    `,
  },
];