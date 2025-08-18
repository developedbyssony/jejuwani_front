function reducer(state = defaultData, action) {
    if(action.type === 'addItem') {
        let item = action.payload.findId;
        let newState = [...State];
        newState.push({
            id:item.id,
            title : item.title,
            quan : 1
        })
        return newState;
    } else if (action.type === 'plus') {
        let id = action.payload;
        let newState = [...state];
        newState[id].quan++;
        return newState;
    } else if (action.type === 'minus') {
        let id = action.payload;
        let newState = [...state];
        if (newState[id].quan > 0) {
            newState[id].quan--;
        }
        return newState;
    } else {
        return state;
    }
}