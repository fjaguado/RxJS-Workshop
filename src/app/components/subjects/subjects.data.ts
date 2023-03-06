import { SECTION } from '../../models/data.model';

export const SUBJECT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      It's a special type of Observable that allows values to be multicasted to many Observers. While <b>plain Observables are unicast</b> (each subscribed Observer owns an independent execution of the Observable), <b>Subjects are multicast</b>.
    </p>
    <p>
      A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: <b>they maintain a registry of many listeners.</b>
    </p>
    <p>
      For example, if we create a subject that has 3 subscribers. Once we emit a value through the subject, all 3 subscribers will receive it: 
    </p>
    <code>
    <pre>
    const subject = new Subject();

    subject.subscribe((value) => console.log(value));
    subject.subscribe((value) => console.log(value));
    subject.subscribe((value) => console.log(value));
    
    subject.next('some value');
    </pre>
    </code>
    <p>
    The above code demonstrates an interesting characteristic of a Subject: <b>it is both an Observable and an Observer</b>. 
    <ul>
      <li>
        <p>
          Since it’s an <u>Observable</u>, you can subscribe to it. It has the <b>subscribe()</b> method.
        </p>
        <code>
        <pre>
        const subject = new Subject();
        subject.subscribe(...);
        </pre>
        </code>
      </li>
      <li>
        <p>
          Since it’s an <u>Observer</u>, you can call the <b>next()</b> method on it. Just like you do when you create an observable and call the next method on an observer you get as a parameter.
        </p>
        <code>
        <pre>
        const subject = new Subject();        
        subject.next('some value');
        </pre>
        </code>
      </li>
    </ul>
    </p>
    `,
  },
];
