import { createStore } from 'vuex';

export default createStore({
  state: {
    step: 5,
    progress: 25
  },
  mutations: {
    nextStep(state) {
      if (state.step < 4) {
        state.step++;
        state.progress = state.step * 25;
      }
    },
    prevStep(state) {
      if (state.step > 1) {
        state.step--;
        state.progress = state.step * 25;
      }
    }
  },
  actions: {
    nextStep(context) {
      context.commit('nextStep');
    },
    prevStep(context) {
      context.commit('prevStep');
    }
  },
  getters: {
    getStep: state => state.step,
    getProgress: state => state.progress

  }
});
