<template>
  <div class="margin-div">
    <section class="title" id="home">
      <h1 class="title-center">Welcome!</h1>
      <h2 class="title-center">I'm a Front-end Developer</h2>
    </section>
    <section class="my-works" id="projects">
      <div class="my-works-container">
        <div class="project">
          <img src="@/assets/imgs/project-1.png" alt="" />
          <p class="project-text">Vue-portfolio</p>
        </div>
        <div class="project">
          <img src="@/assets/imgs/project-1.png" alt="" />
          <p class="project-text">Vue-portfolio</p>
        </div>
        <div class="project">
          <img src="@/assets/imgs/project-1.png" alt="" />
          <p class="project-text">Vue-portfolio</p>
        </div>
      </div>
    </section>
    <section class="what-can-i-do">
      <div>
        <h2>What can i do for you</h2>
        <ul>
          <li>Development of responsive and modern web interfaces.</li>
          <li>I can create websites using Vue.js</li>
        </ul>
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.margin-div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 30px;

}
.title {
  margin-top: 150px;
  font-size: 24px;
}
.title-center {
  justify-self: center;
}
.my-works {
  margin-top: 500px;
}
.my-works-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 60px;
}
.project {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}
img {
  width: 300px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}
.project-text {
  text-decoration: underline;
}

.what-can-i-do {
  margin-top: 200px;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  text-align: left;
}
li,
p {
  font-weight: 200;
  font-size: 24px;
}
</style>
