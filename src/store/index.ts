import Vue from "vue";
import Vuex, { Store } from "vuex";
import NotesModule from "./modules/notes/index";

import Notes from "./modules/notes/index"
import { IInitialStateNote } from './modules/notes/types'

Vue.use(Vuex);

export interface RootState {
  notes?: IInitialStateNote
}

export default new Vuex.Store<RootState>({
  modules: {
    notes: {
      namespaced: true,
      ...Notes
    }
  }
})


