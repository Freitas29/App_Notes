<template>
  <div class="note_item">
    <div class="note_item_header">
      <label>
        <strong>{{ title }}</strong>
      </label>
    </div>
    <div class="note_item_body">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({
  name: "NoteItem"
})
export default class NoteItem extends Vue {
  @Prop({ required: true, type: String })
  title!: string;

  @Prop({ required: true, type: String })
  description!: string;
}
</script>

<style lang="scss" scoped>
.note_item {
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  background-color: white;
  min-height: 40%;
  box-shadow: 2px 4px 7px 1px #ddd;
  transition: transform 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  .note_item_header {
    label {
      font-size: 18px;
      color: #a0a0a0;
    }
  }

  .note_item_body {
    height: 100%;
    overflow: hidden;
    margin-top: 15px;

    p {
      font-size: 14px;
      font-weight: bolder;
      color: #cccccc;
    }
  }
}
</style>
