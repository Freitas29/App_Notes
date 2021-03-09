import Vue from "vue";
import Vuex from "vuex";
import Notes, { DashboardInitialState } from "./modules/notes/index";

Vue.use(Vuex);

export interface RootState {
  notes?: DashboardInitialState;
}

export default new Vuex.Store<RootState>({
  modules: {
    notes: {
      namespaced: true,
      ...Notes
    }
  }
});
