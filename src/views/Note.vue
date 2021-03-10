<template>
  <div class="note">
    <div class="note_header">
      <input v-model="title" />
      <NoteSaveButton @handleSaveButton="salvarNota" />
      <NoteDeleteButton />
    </div>
    <div class="note_body">
      <textarea v-model="description" />
    </div>
  </div>
</template>

<script lang="ts">
import NoteSaveButton from "@/components/notes/NoteSaveButton.vue";
import NoteDeleteButton from "@/components/notes/NoteDeleteButton.vue";
import { Vue } from "vue-property-decorator";
import { createNamespacedHelpers } from "vuex";
import { INote } from "@/store/modules/notes/types";
import {
  MutationsNotes,
  ActionsNotes
} from "@/store/modules/notes/dashboardEnum";
const { mapMutations, mapState, mapActions } = createNamespacedHelpers("notes");

interface MapState {
  noteTitle: () => string;
  noteDescription: () => string;
}

type Actions = {
  [ActionsNotes.SALVAR_NOTA]: (payload: INote) => void;
};

type Mutations = {
  [MutationsNotes.ATUALIZAR_CURRENT_NOTE]: (payload: INote) => void;
};

type Methods = Actions &
  Mutations & {
    salvarNota: () => void;
  };

type State = {
  currentNote: INote;
};

type Computed = State & {
  title: string;
  description: string;
};

export default Vue.extend<{}, Methods, Computed>({
  name: "Note",
  components: {
    NoteSaveButton,
    NoteDeleteButton
  },
  computed: {
    ...mapState(["currentNote"]),
    title: {
      get() {
        return this.currentNote.title;
      },
      set(title) {
        this[MutationsNotes.ATUALIZAR_CURRENT_NOTE]({
          title,
          description: this.description
        });
      }
    },
    description: {
      get(): string {
        return this.currentNote.description;
      },
      set(description: string) {
        this[MutationsNotes.ATUALIZAR_CURRENT_NOTE]({
          title: this.title,
          description
        });
      }
    }
  },
  methods: {
    ...mapMutations([MutationsNotes.ATUALIZAR_CURRENT_NOTE]),
    ...mapActions([ActionsNotes.SALVAR_NOTA]),
    salvarNota() {
      this[ActionsNotes.SALVAR_NOTA]({
        title: this.title,
        description: this.description
      });
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
.note {
  display: grid;
  justify-content: start;
  align-content: start;
  padding: 7px;
  grid-template-columns: 1fr;

  .note_header {
    height: 30px;
    margin-bottom: 20px;
    justify-self: self-start;
    grid-column: 1;

    input {
      width: 800px;
      height: 30px;
      border-radius: 10px;
      padding: 10px;
      border: none;
      text-decoration: none;
      outline: none;
      font-size: 18px;
      background-color: #ededed;
      color: #cccccc;
      margin-right: 20px;
    }

    button:last-child {
      margin-left: 10px;
    }
  }

  .note_body {
    align-self: start;
    justify-self: start;
    grid-column: 1;
    width: 100%;

    textarea {
      outline: none;
      resize: none;
      height: fit-content;
      overflow: auto;
      padding: 15px 5px;
      width: 99%;
      font-size: 18px;
      border: none;
      background-color: transparent;
    }
  }
}
</style>
