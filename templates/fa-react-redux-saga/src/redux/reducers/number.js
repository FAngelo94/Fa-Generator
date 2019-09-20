import produce from 'immer';
import {
  SET_NUMBER,
  CHANGE_NUMBER,
} from '../actions/number';

const initialState = {
  number: null // null for not loaded
};

export default (state = initialState, action) => (

  produce(state, draft => {
    console.log(state,action)
    switch (action.type) {
        
      case SET_NUMBER:
        draft.number = 0;
        break;

      case CHANGE_NUMBER:
          draft.number = action.value;
          break;

      default:
        break;
    }
  })
)

