import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      let temp;
      temp=state.filter(item => item.id !== id);
      return temp;
    },

    'add'(state, { payload: id }) {


      state[0] = { name: 'c777cc', id: 7 };

      var c=  [{ name: 'c777cc', id: 7 }, { name: 'ddd', id: 4 }];
      return c;
    },

  },
};
