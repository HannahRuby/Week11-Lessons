function counterReducer(state, action) {
  switch ((action, type)) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`unhandled action type: ${action.type}`);
  }
}
