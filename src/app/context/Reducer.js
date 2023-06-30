export const initialState = {
  tasks: [],
};

//separate actions
const ACTIONS = {
  ADD_TO_TASK: "ADD_TO_TASK",
  REMOVE_FROM_TASK: "REMOVE_FROM_TASK",
  TASK_COMPLETE: "TASK_COMPLETE",
  GET_TASK: "GET_TASK",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { task: action.payload, completed: false }],
      };
    case ACTIONS.REMOVE_FROM_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((p) => p.task !== action.payload.task),
      };
    case ACTIONS.TASK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.filter((p) =>
          p.completed === action.payload.completed
            ? (action.payload.completed = true)
            : action.payload.completed
        ),
      };

    case ACTIONS.GET_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((p) =>
          p.task
            .toString()
            .toLowerCase()
            .includes(action.query.toString().toLowerCase())
        ),
      };

    default:
      return state;
  }
};
