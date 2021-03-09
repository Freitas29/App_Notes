import { DashboardInitialState, mutations } from ".";
import { MutationsNotes } from "./dashboardEnum";

describe("Mutations Notes module", () => {
  it("'ATUALIZAR_CURRENT_NOTE' deve atualizar as propriedades de currentDash", () => {
    const state = new DashboardInitialState();

    const expected = {
      id: 1,
      title: "Nova nota",
      description: "Texto qualquer"
    };

    mutations[MutationsNotes.ATUALIZAR_CURRENT_NOTE](state, expected);

    expect(state.currentNote).toEqual(expected);
  });
});
