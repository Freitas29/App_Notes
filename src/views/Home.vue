<template>
  <div class="home">
    <Filtro />
    <NoteList />
    <CreateNoteButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoteList from "@/components/notes/NoteList.vue";
import Filtro from "@/components/Filtro.vue"
import CreateNoteButton from "@/components/notes/NoteButton.vue"
@Component({
  components: {
    NoteList,
    Filtro,
    CreateNoteButton
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
</style>