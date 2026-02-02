import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/CounterReducer";

const CounterReduxParent = () => {
  const dispatch = useDispatch();

  // 👇 MUST match reducer key + state shape
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h3>Global State (Redux) Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
};

export default CounterReduxParent;