import freeze from 'deep-freeze';
import {handleActions} from 'redux-actions';
import * as actions from './actions';

export const name = 'Home';

const initialState = freeze({
  data: {},
  isLoading: false,
  payment: [],
  contacts: [],
  motels: [],
  tabs: 'Payments',
});

export default handleActions(
  {
    [actions.fetchAllPayment]: (state, action) => {
      return freeze({
        ...state,
        data: action.payload,
        isloading: true,
      });
    },
    [actions.fetchAllPaymentSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        payment: action.payload.data,
      });
    },
    [actions.fetchAllContactsSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        contacts: action.payload.data,
      });
    },
    [actions.fetchAllMotelsSuccess]: (state, action) => {
      return freeze({
        ...state,
        isloading: false,
        motels: action.payload.data,
      });
    },
    [actions.onChangeTab]: (state, action) => {
      return freeze({
        ...state,
        tabs: action.payload.value,
      });
    },
  },
  initialState,
);
