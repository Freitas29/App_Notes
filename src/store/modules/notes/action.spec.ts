import Vuex, { Store } from 'vuex'
import notes, { Mutations, DashboardState } from './index'
import { createLocalVue } from '@vue/test-utils'
import { RootState } from '@/store'
import { ActionsNotes, MutationsNotes } from './dashboardEnum'

const localVue = createLocalVue()

localVue.use(Vuex)

let store: Store<RootState>;
let mutations: Mutations;
describe("Actions note module", () => {
    

    beforeEach(() => {
        mutations = {
            [MutationsNotes.ATUALIZAR_LISTA_NOTAS]: jest.fn(),
            [MutationsNotes.ATUALIZAR_CURRENT_NOTE]: jest.fn()
        }
        store = new Vuex.Store<DashboardState>({
            modules: {
                notes: {
                    ...notes
                }
            }
        })
      })

    it("Deve criar uma nova nota", () => {
        const novaNota = {
            title: "Nova nota",
            description: "Descrição qualquer"
        }

        store.dispatch(ActionsNotes.SALVAR_NOTA, novaNota)

        const expected = [
            {
                ...novaNota,
                id: 1
            }
        ]

        expect(store.state.notes?.notes).toEqual(expected)
    })
})