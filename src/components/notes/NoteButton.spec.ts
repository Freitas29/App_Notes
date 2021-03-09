import NoteButton from './NoteButton.vue'
import { shallowMount, createLocalVue  } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(VueRouter)
const router = new VueRouter({ });



const factory = (options: any = {}) => shallowMount(NoteButton, {
    ...options,
    localVue,
    router,
    stubs: ['router-link', 'router-view']
})

describe("NoteButton componente", () => {
    it("Deve atualizar a rota para '/note/'", () => {
        const wrapper = factory() as any

        wrapper.vm.criarNota()
        expect(wrapper.vm.$route.path).toBe("/note/")
    })
})