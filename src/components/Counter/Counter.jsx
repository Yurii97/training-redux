import s from './Counter.module.css'
import { increment, decrement } from "../../redux/counter/counterActions";
import { connect } from 'react-redux'


function Counter({counterProp, increment, decrement}) {
        const step = 11;
       
    return (
        <div className={s.counter}>
            <span>{counterProp}</span>
            <ul className={s.list}>
                <li><button type='button' onClick={()=>decrement(step)}>decrement {step}</button></li>
                <li><button type='button' onClick={()=>increment(step)}>increment {step}</button></li>
            </ul>
        </div>);
}

const mSTP = (state) => ({
    counterProp: state.counter,
})

// const mDTP = (dispatch)=>({
//     incMrthod: ()=>dispatch(increment),
//     decMethod: ()=>dispatch(decrement),
// })

// const mDTP = (dispatch)=>({
//     incMrthod: (value)=>dispatch(increment(value)),
//     decMethod: (value)=>dispatch(decrement(value)),
// })

// const mDTP = {
//     incMrthod: increment,
//     decMethod: (value)=>dispatch(decrement(value)),
// }

const mDTP = {
    increment,
    decrement,
}

export default connect(mSTP, mDTP)(Counter);