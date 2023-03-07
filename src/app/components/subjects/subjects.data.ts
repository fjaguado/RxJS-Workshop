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
        subject.subscribe(x => console.log(x));
        </pre>
        </code>
        <p>
          You could use a function inside this method or an Observer.
        </p>
        <code>
        <pre>
        const subject = new Subject();        
        subject.subscribe({ 
          next: (x) => console.log(x),
          error: (x) => console.log(x),
          complete: (x) => console.log(x)
        });
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
  {
    title: '',
    body: `
    <div class="d-flex justify-content-center">
      <video id="player" playsinline controls>
        <source src="https://images.indepth.dev/references/rxjs/subjects/subject.mp4" type="video/mp4" />
      </video>
    </div>
    `,
  },
  {
    title: 'Observer privacy',
    body: `
      <p>
        To prevent outside code from <u>calling next on a subject</u>, the method <b>asObservable()</b> exists. For example, we can create a method that returns the observable of the subject, so everyone that subscribes to it are able to listen to it:
      </p>
      <code>
      <pre>
      private listen(): Observable<<span>any</span>> {
        const subject = new Subject();
        return subject.asObservable();
      }
      </pre>
      </code>
      <p>
        In the code snippet above only the code inside the listen function can call .next method. If outside code calls the method, the error Property next does not exist on type Observable‹unknown› is thrown:
      </p>
      <code>
      <pre>
      const subject = listen();
      subject.next('d'); // produces the error
      </pre>
      </code>
    `,
  },
];

export const BEHAVIOR_SUBJECT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      BehaviorSubject is a variant of a Subject which has a notion of the current value that it stores and emits to all new subscriptions. This <u>current value</u> is either <b>the item most recently emitted by the source observable</b> or <b>a seed/default value</b> if none has yet been emitted. 
    </p>
    <code>
    <pre>
    const behaviorSubject = new BehaviorSubject<string>('Initial value');

    // <i>you can synchronously access to its value with its .value property</i>
    const value = behaviorSubject.value;
    console.log(value); // 'Initial value'

    // <i>you can asynchronously access to its value with a simple Subscription</i>
    behaviorSubject.subscribe(x => console.log(x)); // 'Initial Value'

    // <i>or with an Observer object inside a Subscription</i>
    behaviorSubject.subscribe({ 
      next: (x) => console.log(x),
      error: (x) => console.log(x),
      complete: (x) => console.log(x)
    });
    </pre>
    </code>
    <p>
      <b>Since there must always be a current value, BehaviorSubject requires an initial value during initialization</b> (if you want the last emitted value(s) on subscription, but do not want to supply a seed value, check out ReplaySubject instead).
      This behavior means that you can always directly get the last emitted value from  the BehaviorSubject even if the subscriber subscribes much later than the value was stored. 
    </p>
    <p>
      When an observer subscribes to a BehaviorSubject, it begins by first emitting the current value and then continues to emit any other items emitted by the source Observable(s) after the subscription. However, if the BehaviorSubject is in the stopped state, it will only emit COMPLETE or ERROR notification.
    </p>
    <p>
      In case of an error on the source observable, BehaviorSubject will not emit any items to subsequent subscriptions. Instead, it will simply pass along the error notification from the source Observable to new subscriptions.
    </p>
    `,
  },
  {
    title: 'Accessing to its value',
    body: `
    <p> We have two ways to get the value of a BehaviorSubject:</p>
    <ul>
      <li>
        <p>By accessing the .value property (synchronous)</p>
        <code>
          <pre>
  const subject = new BehaviorSubject('Initial value');
  const subjectValue = subject.value;
  console.log(subjectValue); // 'Initial value'
          </pre>
        </code>
      </li>
      <li>
        <p>
          By opening a new subscription to the Subject (asynchronous)
        </p>
        <code>
          <pre>
  const subject = new BehaviorSubject('Initial value');
  subject.subscribe(value => console.log(value)); // 'Initial value'
          </pre>
        </code>
      </li>
    </ul>
    `
  },
  {
    title: '',
    body: `
    <div class="d-flex justify-content-center">
      <video id="player" playsinline controls>
        <source src="https://images.indepth.dev/references/rxjs/subjects/behavior-subject.mp4" type="video/mp4" />
      </video>
    </div>
    `,
  },
  {
    title: 'Common usage',
    body: `
    <p>
      A most common use case for BehaviorSubject is to act as a store or a cache that subscribers can read the latest value when they need it. Here’s an example that demonstrates a basic implementation of a store:
    </p>
    <code>
    <pre>
    interface State {
      name: string;
      age: number
    }

    export class BehaviorSubjectExample implements OnInit {

      public state1: State = { name: 'James', age: 33 };
      public state2: State = { name: 'Anna', age: 27 };
      
      public store = new BehaviorSubject(this.state1);
      
      public ngOnInit(): void {          
        const v1 = this.getValueFromStore();
        console.log(v1.name); // 'James'
        
        this.updateStore(this.state2);
        
        const v2 = this.getValueFromStore();
        console.log(v2.name); // 'Anna'
        
        this.selectFromStore().subscribe(v => console.log(v)); // 27
      }
      
      private updateStore(v): void {
        store.next(v);
      }
      
      private getValueFromStore(): State {
        return store.value;
      }
      
      private selectFromStore(): Observable<number> {
        return this.store.asObservable().pipe(
            map(state => state.age) // this will get the stored state's age and will return it
        );
      }
    }
    </pre>
    </code>
    `,
  },
];
