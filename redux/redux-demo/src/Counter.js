import {increment,decrement,count} from './reducer/CounterSlice';
import {useDispatch,useSelector} from 'react-redux';

function Counter() {
    const dispatch = useDispatch();
    const countValue = useSelector(count);
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <p>{countValue}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}
export default Counter;