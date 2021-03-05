<template>
  <div class="home">
    <Filtro />
    <NoteList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoteList from "@/components/notes/NoteList.vue";
import Filtro from "@/components/Filtro.vue"
@Component({
  components: {
    NoteList,
    Filtro
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
</style>