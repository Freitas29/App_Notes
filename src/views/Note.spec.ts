import Note from './Note.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { INote } from '@/store/modules/notes/types'
import Vuex, { Store } from 'vuex'
import { RootState } from '@/store'
import notes, { DashboardInitialState } from "@/store/modules/notes/index";
import { MutationsNotes } from '@/store/modules/notes/dashboardEnum'
import VueRouter from 'vue-router'


const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter();
router.push("/note")
let mutations = {
    [MutationsNotes.ATUALIZAR_CURRENT_NOTE]: jest.fn(),
    [MutationsNotes.ATUALIZAR_LISTA_NOTAS]: jest.fn()
}

let store: Store<RootState>

describe("Note componente", () => {

    beforeEach(() => {
        store = new Vuex.Store({
            state: {

            },
            modules: {
                notes: {
                    namespaced: true,
                  ...notes,
                  mutations
                }
              }
        })
    })

    const factory = (options: object = {}) => shallowMount(Note,  {
        ...options,
        store,
        localVue,
        router,
        stubs: ['router-link', 'router-view']
    }) 
    
    it("Ao digitar o titulo, deve atualizar atualizar o state", () => {
        const wrapper = factory() as any

        const input = wrapper.find("input")

        const note: INote = {
            title: "Testando",
            description: ""
        }

        input.setValue(note.title)
        
        const state = new DashboardInitialState()
        expect(mutations[MutationsNotes.ATUALIZAR_CURRENT_NOTE]).toHaveBeenCalled()
        expect(mutations[MutationsNotes.ATUALIZAR_CURRENT_NOTE]).toHaveBeenCalledWith(state, note)
    })

    it("Ao digitar a descrição, deve atualizar atualizar o state", () => {
        const wrapper = factory() as any

        const textarea = wrapper.find("textarea")

        const note: INote = {
            title: "",
            description: "Qaulquer"
        }

        textarea.setValue(note.description)
        
        const state = new DashboardInitialState()
        expect(mutations[MutationsNotes.ATUALIZAR_CURRENT_NOTE]).toHaveBeenCalled()
        expect(mutations[MutationsNotes.ATUALIZAR_CURRENT_NOTE]).toHaveBeenCalledWith(state, note)
    })

    it("Deve salvar a nota e atualizar a lista de notas", () => {
        const title = "Titulo qualquer"
        const description = "Descrição qualquer"
        const wrapper = factory({
            computed: {
                title: () => title,
                description: () => description
            }
        }) as any

        wrapper.vm.salvarNota()

        const initialState = new DashboardInitialState()
        const expected = {
            title,
            description,
            id: 1
        }

        expect(mutations[MutationsNotes.ATUALIZAR_LISTA_NOTAS]).toHaveBeenCalled()
        expect(mutations[MutationsNotes.ATUALIZAR_LISTA_NOTAS]).toHaveBeenCalledWith(initialState, [expected])
        expect(wrapper.vm.$route.path).toBe("/")
    })
})