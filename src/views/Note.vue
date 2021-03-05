<template>
  <div class="note">
    <div class="note_header">
      <input />
      <NoteSaveButton />
      <NoteDeleteButton />
    </div>
    <div class="note_body">
      <textarea>

      </textarea>
    </div>
  </div>
</template>

<script>
import NoteSaveButton from '@/components/notes/NoteSaveButton'
import NoteDeleteButton from '@/components/notes/NoteDeleteButton'

import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Note",
  components: {
    NoteSaveButton,
    NoteDeleteButton
  }
})
export default class Note extends Vue {

}
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
      background-color: #EDEDED;
      color: #CCCCCC;
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