/**
 * Types 
 */

 export const Types = {
     GET_REQUEST: 'todos/GET_REQUEST',
     GET_SUCCESS: 'todos/GET_SUCCESS',
     ADD_REQUEST: 'todos/ADD_REQUEST',
     ADD_SUCCESS: 'todos/ADD_SUCCESS',
     DELETE_REQUEST: 'todos/DELETE_REQUEST',
     DELETE_SUCCESS: 'todos/DELETE_SUCCESS',
     UPDATE_REQUEST: 'todos/UPDATE_REQUEST',
     UPDATE_SUCCESS: 'todos/UPDATE_SUCCESS',
 }


/**
 * Reducers 
 */

const INITIAL_STATE = {
    loading: false,
    data: [],
    error: null
};

export default function todos(state = INITIAL_STATE, action)
{
    switch(action.type)
    {

        case Types.GET_REQUEST:
            return {...state, loading: true };
        
        case Types.GET_SUCCESS:
            return {...state, loading: false, data: action.payload.data };

        case Types.ADD_REQUEST:
            return {...state, loading: true };

        case Types.ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: [...state.data, action.payload.data]
            }
        
        case Types.DELETE_REQUEST:
            return {...state, loading: true}
        
        case Types.DELETE_SUCCESS:
            return { ...state, loading:false, data: state.data.filter(todo => todo.id !== action.payload.id)}

        case Types.UPDATE_REQUEST:
            return {...state, loading: true}

        case Types.UPDATE_SUCCESS:
            return {...state, loading: false, data: state.data};
            

        default:
            return state;
    }
}

/**
 * Actions 
 */

 export const Creators = {

    getTaksRequest: () => ({type: Types.GET_REQUEST}),

    getTaksSucesses: data => ({
        type: Types.GET_SUCCESS,
        payload: {data},
    
    }),

    addTaskRequest: task => ({
        type: Types.ADD_REQUEST,
        payload: { task },
    }),

    addTaskSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: { data },
    }),

    removeTaskRequest: id => ({
        type: Types.DELETE_REQUEST,
        payload: { id }
    }),

    removeTaskSuccess: id => ({
        type: Types.DELETE_SUCCESS,
        payload: { id }
    }),

    updateTaskRequest: task => ({
        type: Types.UPDATE_REQUEST,
        payload: { task },
    }),

    updateTaskSuccess: task => ({
        type: Types.UPDATE_SUCCESS,
        payload: { task },
    })
 }