const initState = {
    users:[
        {id:1,name:'viet'},
        {id:2,name:'hieu'}
    ]
}
const rootReducer = (state = initState,action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let current = state.users
            current.filter(item => item.id !== action.payload.id)
            console.log(current)
            return {...state,current};
        default:
            return state;
    }
}
export default rootReducer;