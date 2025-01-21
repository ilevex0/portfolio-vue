<template>
  <nav>
    <a href="#home" @click="scrollTo($event, 'home')" class="logo">P.</a>
    <div class="nav-items">
      <a href="#home" @click="scrollTo($event, 'home')">Home</a>
      <a href="#projects" @click="scrollTo($event, 'projects')">Projects</a>
      <a href="#skills" @click="scrollTo($event, 'skills')">Skills</a>
      <a href="#contact" @click="scrollTo($event, 'contact')">Contact</a>
    </div>
  </nav>
  <div class="nav-detail"></div>
</template>

<script>
export default {
  methods: {
    scrollTo(event, targetId) {
      event.preventDefault();

      const offset = 200;

      const element = document.getElementById(targetId);
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }
};
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
