<template>
  <button class="button_delete">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
      </svg>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button_delete {
    padding: 2px;
    border-radius: 5px;
    height: 30px;
    width: 40px;
    border: none;
    outline: none;  
    bottom: 40px;
    right: 50px;
    background-color: #f9265473;
    box-shadow: 1px 1px 3px 1px #F92655;
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