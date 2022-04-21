const defaultState = {
    tasks:[]
}

export const ADD_TASK_LOW = 'ADD_TASK_LOW';
export const REMOVE_TASK_LOW='REMOVE_TASK_LOW';

export const lowListReducer = (state = defaultState, action) => {

    switch(action.type){

        case ADD_TASK_LOW:
        return{
          ...state, tasks:[...state.tasks, action.payload]
        }

        case REMOVE_TASK_LOW:
        return{
          ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)
        }

        default : return state;
    }
}

export const addTaskActionLow = (payload) => ({type: ADD_TASK_LOW, payload});
export const removeTaskActionLow = (payload) => ({type: REMOVE_TASK_LOW, payload});