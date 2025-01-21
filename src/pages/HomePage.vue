<template>
  <div class="margin-div" id="home">
    <section class="title">
      <h1 class="title-center">Welcome!</h1>
      <h2 class="title-center">I'm a Front-end Developer</h2>
      <div class="icons-container">
        <a href="https://www.linkedin.com/in/ilevex/" target="_blank"
          ><img
            src="@/assets/imgs/icone-linkedin.png"
            alt="Linkedin icon"
            class="icons"
        /></a>
        <a href="https://github.com/ilevex0" target="_blank"
          ><img
            src="@/assets/imgs/icone-github.png"
            alt="Linkedin icon"
            class="icons"
        /></a>
      </div>
      <a href="#" class="button" @click="downloadCV"> Download CV </a>
    </section>
    <section class="my-works" id="projects">
      <div class="my-works-container">
        <div class="project">
          <a href="https://mercadinho-vue.vercel.app" target="_blank"
            ><img
              src="@/assets/imgs/project-1.png"
              alt="Shopping Website made with Vue.js."
              class="img-projects"
          /></a>
          <div class="project-name-links-container">
            <p class="project-text">Mercadinho-vue</p>
            <a href="https://github.com/ilevex0/mercadinho-vue" target="_blank"
              ><img
                src="@/assets/imgs/icone-github.png"
                alt="Linkedin icon"
                class="icon-project"
            /></a>
          </div>
        </div>
        <div class="project">
          <a href="#"
            ><img
              src="@/assets/imgs/project-empty.png"
              alt="Project Slot"
              class="img-projects"
          /></a>
          <p class="project-text">Coming soon.</p>
        </div>
        <div class="project">
          <a href="#"
            ><img
              src="@/assets/imgs/project-empty.png"
              alt="Project Slot"
              class="img-projects"
          /></a>
          <p class="project-text">Coming soon.</p>
        </div>
      </div>
    </section>
    <section class="what-can-i-do">
      <div class="what-can-i-do-text">
        <h2>What can i do for you</h2>
        <ul>
          <li>
            Custom Websites with Vue.js: I can create interactive, dynamic
            single-page applications using Vue.js, ensuring a smooth and
            intuitive user experience.
          </li>
          <li>I can do work related to image editing and video editing.</li>
        </ul>
      </div>
      <img
        src="@/assets/imgs/Mercadinho-project.png"
        alt="Shopping Project image"
        class="what-can-i-do-image"
      />
    </section>
    <section class="what-can-i-do">
      <img
        src="@/assets/imgs/skills.png"
        alt="Shopping Project image"
        class="what-can-i-do-image"
      />
      <div class="what-can-i-do-text">
        <h2 id="skills">My Skills</h2>
        <ul>
          <li>I Know the Basics of HTML 5, CSS and JavaScript.</li>
          <li>I can make websites using the Vue.Js framework.</li>
          <li>I use Git for version control.</li>
          <li>I have practical knowledge of Photoshop and Video Editing.</li>
          <li>I have knowledge of Unity and Game Development.</li>
          <li>I am passionate about learning new technologies.</li>
        </ul>
      </div>
    </section>
    <section class="what-can-i-do">
      <div class="what-can-i-do-text">
        <h2 id="contact">Contact 💬</h2>
        <ul>
          <li>
            You can send me an email to
            <a href="mailto:contactilevex@gmail.com" class="text-link"
              >contactilevex@gmail.com</a
            >
          </li>
          <li>
            Or you can send me a message on my
            <a
              href="https://www.linkedin.com/in/ilevex/"
              target="_blank"
              class="text-link"
              >Linkedin.</a
            >
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = '/FRONT-END-Pedro-Otavio-Curriculo.pdf'; // Caminho para o arquivo PDF no diretório public
      link.download = 'FRONT-END-Pedro-Otavio-Curriculo.pdf'; // Nome do arquivo a ser baixado
      link.click(); // Simula o clique para iniciar o download
    }
  }
};
</script>

<style scoped>
.margin-div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 100px 50px;
}
.icons-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
}
.icons {
  max-width: 64px;
}
.title {
  margin-top: 150px;
  font-size: 24px;
}
.title-center {
  justify-self: center;
  white-space: nowrap;
}
.button {
  display: block;
  text-decoration: none;
  font-weight: 600;
  color: white;
  padding: 30px;
  margin: 10px;
  background-color: black;
  border-radius: 8px;
  justify-self: center;
  white-space: nowrap;
}
.button:hover, .icons:hover {
  transition: transform 0.2s ease;
  transform: scale(1.02)
}
.my-works {
  margin-top: 350px;
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
.project-name-links-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-project {
  max-width: 44px;
}
.img-projects {
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}
.project-text {
  text-decoration: underline;
}

.what-can-i-do {
  margin-top: 200px;
  font-size: 24px;
  display: flex;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  text-align: left;
}
.what-can-i-do-image {
  max-width: 50%;
  margin: 0px 30px;
  border-radius: 16px;
}
.what-can-i-do-icons {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.what-can-i-do-icons img {
  width: 100%;
  max-width: 100px;
}
.what-can-i-do-text {
  margin: 30px;
  text-align: justify;
}
li,
p {
  font-weight: 300;
  font-size: 24px;
}
.text-link {
  color: blue;
}

@media (max-width: 1080px) {
  .what-can-i-do {
    flex-direction: column-reverse;
  }
  .what-can-i-do-image {
    max-width: 100%;
    min-width: 250px;
    margin: 30px 0px;
  }
  .my-works-container {
    gap: 30px;
  }
}
@media (max-width: 600px) {
  .what-can-i-do-text {
    text-align: start;
  }
}
@media (max-width: 535px) {
  .title-center{
    font-size: 6.5vw;
  }
  .icons {
    max-width: 12vw;
  }
  .button {
    font-size: 4.5vw;
    padding: 5vw;
  }
}
@media (max-width: 425px) {
  .margin-div {
    margin: 100px 20px;
  }
  .what-can-i-do-text {
    margin: 30px 20px;
  }
}
@media (max-width: 375px) {
  li {
    font-size: 18px;
  }
}
</style>
