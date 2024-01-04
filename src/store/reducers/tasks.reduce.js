import { GETTASKS, GETSUBTASKS, UPLOADTASK, UPLOADSUBTASK} from "../actions/tasks.actions"

const initialState = {
    tasks: [],
    subtasks: []
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case GETTASKS:
            return {
                ...state,
                tasks: action.tasks,
            }
        case GETSUBTASKS:
                return {
                    ...state,
                    subtasks: action.subtasks,
                }
                case UPLOADTASK:
                    return {
                        ...state,
                        tasks: action.tasks,
                    }
                    case UPLOADSUBTASK:
                        return {
                            ...state,
                            subtasks: action.subtasks,
                        }
            default:
                return state
    }
}

export default tasksReducer