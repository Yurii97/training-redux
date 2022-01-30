const counterReduser = (state=100, {type, payload}) => {
    switch (type) {
        case 'counter/decrement':
            return state-payload;
        case 'counter/increment':
            return state+payload;
        default: return state;
    }
}

export default counterReduser;