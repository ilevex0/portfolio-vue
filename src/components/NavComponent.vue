<template>
  <nav>
    <a href="#home" class="logo">P.</a>
    <div class="nav-items">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
  <div class="nav-detail"></div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-weight: 600;
  color: black;
  white-space: nowrap;
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0px;
  position: fixed;
  width: 100%;
  background-color: white;
  top: 0;
  left: 0;
}
.logo {
  font-weight: 900;
  font-size: 36px;
  cursor: pointer;
}
.nav-items {
  display: flex;
  gap: 15px;
  white-space: nowrap;
}
.nav-detail {
  width: 100vw;
  height: 10px;
  background-color: black;
  position: fixed;
  height: 1px;
  top: 105px;
}
</style>
