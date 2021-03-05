<template>
  <div class="list">
    <div class="item">
      <NoteItem />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import NoteItem from "./NoteItem";

@Component({
  name: "NoteList",
  components: {
    NoteItem
  }
})
export default class NoteList extends Vue {}
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
