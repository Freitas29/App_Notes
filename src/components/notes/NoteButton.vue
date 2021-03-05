<template>
  <button class="button_create">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
      </svg>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button_create {
    padding: 10px;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: none;
    outline: none;  
    position: fixed;
    bottom: 40px;
    right: 50px;
    background-color: #42b983;
    cursor: pointer;
    transition: all 0.4s ease;


    &:hover {
        opacity: 0.6;
    }

    svg {
        fill: white;
    }
}
</style>