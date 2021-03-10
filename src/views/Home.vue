<template>
  <div class="home">
    <Filtro />
    <NoteList :notes="notesList" />
    <CreateNoteButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoteList from "@/components/notes/NoteList.vue";
import Filtro from "@/components/Filtro.vue";
import CreateNoteButton from "@/components/notes/NoteButton.vue";
import { INote, IInitialStateNote } from "@/store/modules/notes/types";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("notes");

interface MapState {
  noteList: () => INote[];
}

@Component({
  components: {
    NoteList,
    Filtro,
    CreateNoteButton
  },
  computed: {
    ...mapState<MapState>({
      notesList: (state: IInitialStateNote) => state.notes
    })
  }
})
export default class Home extends Vue {
  notesList!: INote[];
}
</script>
<style lang="scss" scoped></style>
