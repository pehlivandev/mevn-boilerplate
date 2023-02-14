<template>
  <div class="main">
    <header>header</header>
    <router-view />
    <footer>footer</footer>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type=text] {
  border: 3px solid #c1c1c1;
  border-radius: 15px;
  outline: none;
  width: 100%;
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 700;
}
input[type=button] {
  background-color: aquamarine;
  border: 3px solid #68f7c7;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  padding: 10px;
  background-color: violet;
}
.content {
  flex-grow: 1;
  width: 640px;
  padding: 20px 0;
  margin: auto;
  max-width: 92%;
  &.form-content {
    width: 400px;
  }
}
.word-list {
  margin: 20px 0;
}
.word {
  border: 3px solid #c1c1c1;
  box-shadow: 3px 4px 0 0 #e9e9e9;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    span {
      padding: 2px;
      font-size: 20px;
      cursor: pointer;
      &.delete {
        color: red;
      }
    }
  }
}
footer {
  padding: 10px;
  background-color: wheat;
}
.popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.8);
  // backdrop-filter: blur(10px); // it has performance issue
  display: flex;
  justify-content: center;
  align-items: center;
  .popup-inside {
    width: 400px;
    max-width: 95%;
    max-height: 95%;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    position: relative;
    border: 3px solid #c1c1c1;
    .close {
      position: absolute;
      right: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid #c1c1c1;
      color: red;
      background-color: #fff;
      text-align: center;
      line-height: 24px;
      cursor: pointer;
      font-size: 22px;
    }
    .create-word {
      .info {
        line-height: 16px;
        font-size: 13px;
        margin-top: 5px;
      }
    }
  }
}
.add-word {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  border: 4px solid #fff;
  border-radius: 50%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  cursor: pointer;
  .plus {
    text-shadow: 2px 2px #fff;
  }
}
.form {
  & > div {
    margin-bottom: 20px;
    &:last-child {
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
}
</style>
