import { ActionsNotes, GettersNotes, MutationsNotes } from './dashboardEnum'
import { IInitialStateNote, INote } from './types'
import { ActionContext, ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'

export type DashboardState = RootState & IInitialStateNote

export class DashboardInitialState {
    currentNote: INote = {
      id: null,
      title: "",
      description: ""
    }

    notes: INote[] = []
}

export type Mutations<S = DashboardInitialState> = {
  [MutationsNotes.ATUALIZAR_LISTA_NOTAS](state: S, payload: INote[]): void
  [MutationsNotes.ATUALIZAR_CURRENT_NOTE](state: S, payload: INote): void
}

export const mutations: MutationTree<DashboardInitialState> & Mutations = {
  
    [MutationsNotes.ATUALIZAR_CURRENT_NOTE]: (state: DashboardInitialState, payload: INote) => {
        state.currentNote = payload
    },
    [MutationsNotes.ATUALIZAR_LISTA_NOTAS]: (state: DashboardInitialState, payload: INote[]) => {
      state.notes = payload
    }
}


export type Actions<S = ActionContext<IInitialStateNote, RootState>> = {
  [ActionsNotes.SALVAR_NOTA]: (state: S, payload: INote) => void
}

export const actions: ActionTree<IInitialStateNote, RootState> & Actions = {
  [ActionsNotes.SALVAR_NOTA]: ({ commit, getters, state }, payload: INote) => {
    const id = getters[GettersNotes.SIZE_NOTE_LIST] + 1

    const novaListaDeNotas = [
      ...state.notes,
      {
        id,
        ...payload
      }
    ]

    commit(MutationsNotes.ATUALIZAR_LISTA_NOTAS, novaListaDeNotas)
  },
}

export const getters = {
  [GettersNotes.SIZE_NOTE_LIST]: (state: DashboardInitialState): number => {
    return state.notes.length
  }
}

const NotesModule = {
  state: new DashboardInitialState(),
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
    ...getters
  }
}

export default NotesModule