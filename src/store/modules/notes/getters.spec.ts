import { GettersNotes } from './dashboardEnum'
import { getters, DashboardInitialState } from './index'

describe("Getters Notes module", () => {
    it("'SIZE_NOTE_LIST' deve retornar o tamanho da lista de notas", () => {
        const initial = new DashboardInitialState();
        const state = {
            ...initial,
            notes: [
                {
                    id: 1,
                    title: "Teste 1",
                    description: "Descrição qualquer"
                },
                {
                    id: 2,
                    title: "Teste 2",
                    description: "Descrição qualquer 2"
                }
            ]
        }

        const size = getters[GettersNotes.SIZE_NOTE_LIST](state)

        expect(size).toBe(2)
    })
})