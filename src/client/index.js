import { run } from '@cycle/rxjs-run';
import { Observable, Scheduler } from 'rxjs';
import { h, div, makeDOMDriver } from '@cycle/dom';


const main = ({ DOM }) => {

  const vdom$ = DOM.select( '#render' )
    .events( 'click' )
    .startWith( false )
    .map( renderMainView );

  const sinks = {
    DOM: vdom$,
  }

  return sinks;
};

const drivers = () => ({
  DOM: makeDOMDriver('#app_container'),
});

window.onload = () => run(main, drivers());
