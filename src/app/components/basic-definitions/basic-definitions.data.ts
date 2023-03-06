import { SECTION } from '../../models/data.model';

export const BASIC_INTRODUCTION: SECTION[] = [
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
