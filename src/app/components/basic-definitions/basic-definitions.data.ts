import { SECTION } from '../../models/data.model';

export const BASIC_INTRODUCTION_SECTION: SECTION[] = [
  {
    title: 'What is RxJs?',
    body: `RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides:
    <ol class="pt-3">
      <li>
        <b>One core type</b>
      </li>
      <li>
        <b>An Observable</b>
      </li>
      <li>
        <b>Satellite types</b> (Observer, Schedulers, Subjects)
      </li>
      <li>
        <b>Operators inspired by Array methods </b> (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.
      </li>
    </ol>
    <p>ReactiveX combines the <a href="https://en.wikipedia.org/wiki/Observer_pattern">Observer pattern</a> with the <a href="https://en.wikipedia.org/wiki/Iterator_pattern">Iterator pattern</a> and <a href="http://martinfowler.com/articles/collection-pipeline/#NestedOperatorExpressions">functional programming with collections</a> to fill the need for an ideal way of managing sequences of events.</p>
    `,
  },
  {
    title: 'Data streams',
    body: `Data streams are the spine of reactive programming. Everything that might change or
    happen over time (you don't know when exactly) is represented as a stream, such as data,
    events, notifications, and messages. Reactive programming is about reacting to changes as
    soon as they are emitted!`,
  },
  {
    title: 'Observer pattern',
    body: `The observer pattern is based on two main roles: a publisher and a subscriber.
    <ul class="pt-3">
      <li>
        A <b>PUBLISHER</b> maintains a list of subscribers and notifies them or propagates a change every time there is an update.
      </li>
      <li>
        On the other hand, a <b>SUBSCRIBER</b> performs an update or executes a
        side effect every time they receive a notification from the publisher.
      </li>
    </ul>
    <p>
      So, to get notified about any updates, you need to subscribe to the publisher. A real-world analogy would be a newsletter; you don't get any emails if you don't subscribe to a newsletter.
    </p>
    This leads us to the building blocks of RxJS:
    <ol class="pt-3">
      <li>
        <b>Observables</b>: These are a representation of the data streams that notify the
      observers of any change.
      </li>
      <li>
        <b>Observers</b>: These are the consumers of the data streams emitted by observables.
      </li>
    </ol>
    `,
  },
];

export const OBSERVABLE_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      An Observable represents a sequence of values which may be observed. Observables are attached to streams of data, and are responsible for processing that data and deliver it to Observers.
    </p>
    <p>
      RxJS library implements the Observable primitive and adds operators that allow  composing sequences of asynchronous events together.
    </p>
    <p>
      Observable is a very simple type for a unified API that can represent a wide variety of things: 
      <ul>
        <li>events</li>
        <li>multiple values</li>
        <li>single values</li>
        <li>user interactions</li>
        <li>streaming data</li>
        <li>synchronous values</li>
        <li>asynchronous values</li>
      </ul>
    </p>
    `,
  },
  {
    title: 'Observables are composable',
    body: `
    Observables can be composed with higher-order combinators (switchMap, concatMap, exhaustMap, etc.), so we're able to, for example, concatenate two streams of data.
    `,
  },
  {
    title: 'Observables are lazy',
    body: `
    Because they don't emit any data until the observable is subscribed. In contrast, a Promise executes a function passed to the constructor immediately without waiting for the call to then or other methods..
    `,
  },
  {
    title: 'Observables are cancellable',
    body: `
    Because once we call the unsubscribe method on an object returned by subscribe the observable will execute the cleanup function.
    `,
  },
  {
    title: 'What does an Observable guarantee?',
    body: `
    <ul>
      <li>
        Once it's complete, errored, or unsubscribed, you will get no more messages
      </li>
      <li>
        Registered teardown will occur
      </li>
      <li>
        If you complete, error, or unsubscribe, you are guaranteed to clean up resources
      </li>
    </ul>
    `,
  },
];

export const OBSERVER_SECTION: SECTION[] = [
  {
    title: '',
    body: `
    <p>
      An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete. 
    </p>
    <p>
      The following is an example of a typical Observer object:
    </p>
    <code>
    <pre>
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    </pre>
    </code>
    <p>
      <b>Observers are just objects with three callbacks</b>, one for each type of notification that an Observable may deliver.
    </p>
    `,
  },
  {
    title: 'How do I use an Observer?',
    body: `
    <p>
      To use the Observer, provide it to the subscribe of an Observable:
    </p>
    <code>
    <pre>
    observable.subscribe(observer);
    </pre>
    </code>
    `,
  },
  {
    title: 'Observers are partial',
    body: `
    <p>
    If you don't provide one of the callbacks, the execution of the Observable will still happen normally, except some types of notifications will be ignored, because they don't have a corresponding callback in the Observer.
    </p>
    <code>
    <pre>
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
    };
    </pre>
    </code>
    `,
  },
];
