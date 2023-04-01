import { createStore } from 'vuex';

export default createStore({
  state: {
    step: 1,
    progress: 25,
    phone: '',
    sendingValidate: false,
    sendingCode: false
  },
  mutations: {
    nextStep(state) {
      if (state.step < 5) {
        state.step++;
        state.progress = state.step * 25;
      }
    },
    prevStep(state) {
      if (state.step > 1) {
        state.step--;
        state.progress = state.step * 25;
      }
    },
    updatePhone(state, phone) {
      state.phone = phone;
    },
    updateSendingCode(state) {
      console.log(state)
      state.sendingCode = true;
      setTimeout(() => {
        state.sendingCode = false;
      }, 3000);
    },
    updateSendingValidate(state) {
      state.sendingValidate = true;
      setTimeout(() => {
        state.sendingValidate = false;
        state.step = 4
      }, 3000);
    },
    resetState(state) {
      Object.assign(state, {
        step: 1,
        progress: 25,
        phone: '',
        sendingValidate: false,
        sendingCode: false
      });
    },
  },
  actions: {
    nextStep(context) {
      context.commit('nextStep');
    },
    prevStep(context) {
      context.commit('prevStep');
    },
    updatePhone(context) {
      context.commit('updatePhone');
    },
    resetState(context) {
      context.commit('resetState');
    }
  },
  getters: {
    getStep: state => state.step,
    getProgress: state => state.progress,
    getPhone: state => state.phone,
    getSendingValidate: state => state.sendingValidate,
    getSendingCode: state => state.sendingCode
  }
});
