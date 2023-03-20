import { SECTION } from '../../../models/data.model';

export const OF_CREATION_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      This operator is used to emit arguments as values in a sequence and then complete the stream.
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
      It is commonly used when you simply need to return a value where an observable is expected or start an observable chain. This is a common need when using combination operators like mergeMap. Here’s an example that checks if there’s a cached value for the URL and if so, returns the value immediately, otherwise it makes a request:
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
];
