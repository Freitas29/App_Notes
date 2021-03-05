<template>
  <button class="button_create">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
      </svg>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button_create {
    padding: 2px;
    border-radius: 5px;
    height: 30px;
    width: 40px;
    border: none;
    outline: none;  
    bottom: 40px;
    right: 50px;
    background-color: #42b9836e;
    box-shadow: 1px 1px 3px 1px #42b983;
    cursor: pointer;
    transition: all 0.4s ease;


    &:hover {
        opacity: 0.6;
    }

    svg {
        fill: #fff;
    }
}
</style>