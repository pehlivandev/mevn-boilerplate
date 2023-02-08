<template>
  <div>
    <div class="form">
      <div>
        <label>Kelime Ekle</label>
        <input type="text" />
      </div>
      <div>
        <input type="button" value="Ekle" @click="addWord()" />
      </div>
    </div>
  </div>
</template>

<script setup>
  function addWord () {
    alert('add word')
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
