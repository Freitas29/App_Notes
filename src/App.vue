<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Notas</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f7f7f7;
  width: 100%;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-size: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
