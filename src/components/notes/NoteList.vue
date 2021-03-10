<template>
  <div class="list">
    <div class="item" v-for="note in notes" :key="note.id">
      <NoteItem :title="note.title" :description="note.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NoteItem from "./NoteItem.vue";
import { INote } from "@/store/modules/notes/types";

@Component({
  name: "NoteList",
  components: {
    NoteItem
  }
})
export default class NoteList extends Vue {
  @Prop({ default: () => [] })
  notes!: INote[];
}
</script>

<style lang="scss" scoped>
.list {
  margin-top: 30px;
  width: 100%;
  min-height: 85vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  .item {
    padding: 15px;
  }
}
</style>
