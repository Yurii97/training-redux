export const decrement = (step)=> ({
    type: 'counter/decrement',
    payload: step,
})

export const increment = (step)=>({
    type: 'counter/increment',
    payload: step,
})

// export const decrement = {
//     type: 'decrement',
//     payload: 1,
// }

// export const increment = {
//     type: 'increment',
//     payload: 1,
// }