export const initToDos = {
    list: [
        {
            item: 'Complete module project',
            completed: false,
            id: 123456
        }
    ],
    completed: [] 
}

const formReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { ...state, list: [action.value, ...state.list] }
        case 'TOGGLE_TODO':
            state.list.forEach(item => {
                if(item.id === action.id) {
                    item.completed = !item.completed;
                    return item;
                }
            })
            return { ...state };
        case 'DEL_TODO':
            const completedArr = state.list.filter(item => item.completed);
            const checkIfEmpty = (arr) => {
                if(arr.length <= 0) {
                    return [ ...state.completed ]
                }
            return [arr, state.completed ]
            }
            return { ...state, list: state.list.filter(item => item.completed === false), completed: checkIfEmpty(completedArr) }
        default: 
            return state;
    }  
}

export default formReducer;