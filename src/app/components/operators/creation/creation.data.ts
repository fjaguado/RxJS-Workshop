import { SECTION } from '../../../models/data.model';

export const OF_CREATION_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This operator is used to emit arguments as values in a sequence and then <b>complete the stream.</b>
    </p>
    <p>
      Unlike <b>from</b>, it does not do any flattening or conversion and emits each argument as the same type it receives as arguments. If you pass it an Array (including array-like objects), a Promise and an iterable object it won’t be flattened into an observable sequence of values. <b>Those arguments will be emitted as the same type, i.e. an Array, a Promise or an Iterable object <u>without any conversion</u>.</b>
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
    import { of } from 'rxjs';
  
    // Without an observer
    of(10, 20, 30)
      .subscribe(
        value => console.log('value: ', value),
        err => console.log('error: ', err),
        () => console.log('the end')
      );

    // Outputs
    // value: 10
    // value: 20
    // value: 30
    // the end

    // With an observer
    of(10, 20, 30)
      .subscribe({
        next: value => console.log('next: ', value),
        error: err => console.log('error: ', err),
        complete: () => console.log('the end'),
      });
    
    // Outputs
    // next: 10
    // next: 20
    // next: 30
    // the end
    </pre>
    </code>
  `,
  },
  {
    title: '',
    body: `
    <p>
      In this case, we're simply sending a string as a stream of data.
    </p>
    `,
  },
];

export const FROM_CREATION_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      It is used to convert pure JavaScript object types like an Array, a Promise and an iterable object into an observable sequence of values. 
    </p>
    <p>
      In the case of arrays and iterables, all contained values will be emitted as a sequence. The operator also emits a string as a sequence of characters. 
    </p>
    <p>
      When a promise needs to be used as part of an observable chain, <b>from is often used to convert a promise into an observable.</b>
    </p>
    `,
  },
  {
    title: 'Usage',
    body: `
    <p>
      from is commonly used operator when you need to create an observable sequence out of pure JavaScript types. 
    </p>
    <code>
    <pre>
    import { from } from 'rxjs';

    const array = [10, 20, 30];
    const result = from(array);
    
    result.subscribe(x => console.log(x));
    
    // Logs:
    // 10
    // 20
    // 30
    </pre>
    </code>
    `,
  },
  {
    title: 'Array example',
    body: `
    <p>
      In this case, we're transforming an array of data into an Observable stream that will send each value of the array as an Observable.
    </p>
    `,
  },
  {
    title: 'Promise example',
    body: `
    <p>
      In this case, we're transforming a Promise into an Observable stream that will send each value of the Promise as an Observable. The Promise is created thanks to the Javascript method fetch() that will return a Promise.
    </p>
    `,
  },
];
