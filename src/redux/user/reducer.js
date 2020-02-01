const initialState = {
  user: [],
};

export function user(state = initialState, action) {
  switch (action.type) {
    case 1:
      return 'test';
    default:
      return state;
  }
}
