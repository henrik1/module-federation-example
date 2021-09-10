const initialState = {
  appName: 'BAR Micro-frontend',
  value: 0
};

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';

export const increment = () => {
  return { type: INCREMENT };
};

export const reset = () => {
  return { type: RESET };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        value: ++state.value
      };
    }
    case RESET: {
      return {
        ...state,
        value: 0
      };
    }
  }
  return state;
};

export default reducer;
