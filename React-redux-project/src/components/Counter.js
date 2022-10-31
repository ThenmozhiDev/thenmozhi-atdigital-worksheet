import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  

const incrementHandler = () => {
  dispatch(counterActions.increment());
}

const increaseHandler = () => {
  dispatch(counterActions.increase(10));
}

const decrementHandler = () => {
  dispatch(counterActions.decrement());
}
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

{/*
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {

  }
render() {
  return (
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    <div className={classes.value}>{this.props.counter}</div>
    <div>
    <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
    <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
    </div>
    <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
  </main>
  )
}
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  increment: () => dispatch({type: "INCREMENT"}),
  decrement: () => dispatch({type: "DECREMENT"}),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/}

export default Counter;
