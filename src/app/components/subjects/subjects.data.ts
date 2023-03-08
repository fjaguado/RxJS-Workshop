import { SECTION } from '../../models/data.model';

export const SUBJECT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      It's a special type of Observable that allows values to be multicasted to many Observers. While <b>plain Observables are unicast</b> (each subscribed Observer owns an independent execution of the Observable), <b>Subjects are multicast</b>.
    </p>
    `,
  },
  {
    title: 'How it works',
    body: `
    <p>
      A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: <b>they maintain a registry of many listeners.</b>
    </p>
    <p>
      For example, if we create a subject that has 3 subscribers. Once we emit a value through the subject, all 3 subscribers will receive it: 
    </p>
    <code>
    <pre>
    import { Subject } from 'rxjs';

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
        To <u>prevent outside code from calling next on a subject</u>, the method <b>asObservable()</b> exists. For example, we can create a method that returns the observable of the subject, so everyone that subscribes to it are able to listen to it:
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
  {
    title: 'Example',
    body: `
    <p>
      When we define a new Subject and try to send a new value (in this
      case, sending a new value with the Subject Observer input), the Subject will not emit
      any value. This is because, by default, <b>Subjects are lazy</b> and that
      means that they need someone to be subscribed and listen to what they are
      emitting.
    </p>
    <p>
      In this case, when we try to send a new value with the left input, nothing
      is going to happen because we're not subscribed to the Subject. Once we
      hit the <b>Open subscriptions</b> button, we're going to be able to listen
      to what the Subject is emitting.
    </p>
    <p>
      By default,
      <b
        >Subjects don't have an initial value and don't return the current value
      </b>
      in the moment that we're subscribing to it, they are going to receive only
      values sent by the <b>next()</b> method <u>while they're subscribed</u>.
    </p>
    <p>
      This is why if we sent a value while we're not subscribed and later we
      subscribe, we're not going to receive anything until we open the
      subscription and send a new value.
    </p>
    `
  }
];

export const BEHAVIOR_SUBJECT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      BehaviorSubject is a variant of a Subject which has a notion of the current value that it stores and emits to all new subscriptions. This <u>current value</u> is either <b>the item most recently emitted by the source observable</b> or <b>a seed/default value</b> if none has yet been emitted. 
    </p>
    `,
  },
  {
    title: 'How it works',
    body: `
    <code>
    <pre class="mt-4">

    import { BehaviorSubject } from 'rxjs';

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
    title: 'Accessing its value',
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
    `,
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
  {
    title: 'Example',
    body: `
    <p>Following the Subject's example, in this case:</p>
    <ul>
      <li>
        <p>
          If we click on the <b>Storaged value</b>, a Toast will be displayed
          showing the last emitted value (or the last storaged value) from this
          BehaviorSubject.
        </p>
      </li>
      <li>
        <p>
          If we initially click on the <b>Open Subscriptions</b> button, every
          Subject input will be filled with the last BehaviorSubject's emitted
          value.
        </p>
      </li>
      <li>
        <p>
          If we haven't subscribed yet to the BehaviorSubject and we sent a new
          value with the <b>BehaviorSubject's next() method</b>, that value will
          not be emitted, but it will be storaged in the BehaviorSubject's
          <b>value</b> property. Later, when we subscribe to it, it will emit
          the last storaged value.
        </p>
      </li>
    </ul>
    `
  }
];

export const REPLAY_SUBJECT_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      ReplaySubject is a variant of a Subject which keeps a cache of previous values emitted by a source observable and sends them to all new observers immediately on subscription. This behavior of replaying a sequence of old values to new subscribers is where the name for this type of a subject comes from.
    </p>
    `,
  },
  {
    title: 'How it works',
    body: `
    <code>
    <pre class="mt-4">
    
    import { ReplaySubject } from 'rxjs';

    const subject = new ReplaySubject(<i>bufferSize</i>, <i>windowTime</i>);

    // bufferSize (optional): this will determine how many items are stored in the buffer, defaults to infinite.
    // windowTime (optional): determine in milliseconds the amount of time to hold a value in the buffer before removing it from the buffer.
    </pre>
    </code>
    <p>
     When an observer subscribes to a ReplaySubject, the subject begins by first emitting all values from the cache and then continues to emit any other items emitted by the source observable after the subscription. 
    </p>
    <p>
      When creating a ReplaySubject you can specify how many values you want to store in the buffer (bufferSize) and the amount of time to hold a value in the buffer before removing it from it (windowTime). Both configurations may exist simultaneously.
    </p>
    `,
  },
  {
    title: 'Differences with BehaviorSubject',
    body: `
    <p>
    ReplaySubject will replay the cached sequence of values even if the observer subscribes much later than the values were cached. This feature is similar to the BehaviorSubject in the way that it can send cached values to new subscribers, but <b>instead of just one current value, it can record and replay a whole series of values.</b>
   </p>
   <p>
   There’s another more crucial difference: 
   <ul>
     <li>
       <p>
         Once <u>BehaviorSubject</u> receives the complete or the error notification and transitions into a stopped state, <b>all subsequent subscriptions will only receive the complete or the error notification</b> and will not receive the current value.
       </p>
     </li>
     <li>
       <p>
         In contrast, even in the stopped state in case of a completion or an error on the source observable, <u>ReplaySubject</u> still <b>replays the cached values before sending the complete or the error notification</b> to new subsequent subscriptions.
       </p>
     </li>
   </ul>
    `,
  },
  {
    title: '',
    body: `
    <div class="d-flex justify-content-center">
      <video id="player" playsinline controls>
        <source src="https://images.indepth.dev/references/rxjs/subjects/replay-subject.mp4" type="video/mp4" />
      </video>
    </div>
    `,
  },
  {
    title: 'Common usage',
    body: `
    <p>
      ReplaySubject is commonly used when you need to replay an event or a series of events. Since ReplaySubject doesn’t need a default value as opposed to BehaviorSubject, it’s a handy mechanism to use if an event may never even occur.
    </p>
    <code>
    <pre>
    import { ReplaySubject } from 'rxjs';
  
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers
     
    subject.subscribe(v => console.log('observerA:', v'));
     
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
     
    subject.subscribe(v => console.log('observerB:', 'v'));
     
    subject.next(5);
     
    // Logs:
    // observerA: 1
    // observerA: 2
    // observerA: 3
    // observerA: 4
  
    // When ObserverB starts to receive data, it will emit the last 3 recorded values by this subject
    // observerB: 2
    // observerB: 3
    // observerB: 4
  
    // observerA: 5
    // observerB: 5
    </pre>
    </code>
    `,
  },
  {
    title: 'Example',
    body: `
    <p>
      In this case the ReplaySubject will store the last X amount of records
      setted in the <b>Amount</b> input. For example:
    </p>
    <ul>
      <li>
        <p>
          If we set an amount of 3 records and store (with <b>Next</b>) 5
          values, whenever any of the three subscriptions <b>Open</b>, they will
          store the last 3 recorded values by the ReplaySubject.
        </p>
      </li>
      <li>
        <p>
          While the subscription is still open, the subscription is going to
          continue receiving values sent by the ReplaySubject and will store it
          in a local variable.
        </p>
      </li>
      <li>
        <p>
          If we don't want to keep receiving data, we can <b>Close</b> the
          stream of data and any value sent by the ReplaySubject won't be
          stored.
        </p>
      </li>
      <li>
        <p>
          If the subscriptions is closed and later is opened again, the
          ReplaySubject will emit the last X recorded values to the subscription
          and the input will be loaded with the previous values and the new
          ones.
        </p>
      </li>
      <li>
        <p>
          Any of the subscriptions are able to be restarted with the
          <b>Restart</b> button and able to start again and receive data again
          after clicking on the <b>Open</b> button.
        </p>
      </li>
      <li>
        <p>
          The whole process is able to be restarted with the
          <b>Restart ReplaySubject</b> button.
        </p>
      </li>
    </ul>
    `
  }
];
