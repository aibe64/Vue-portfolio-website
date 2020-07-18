<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 text-justify mt-3 mt-md-5 mx-2 mx-md-5 mx-lg-auto">
          <div class="about-heading  text-left text-uppercase py-2">
            <vue-typed-js
              :strings="['bout Me']"
              :typeSpeed="100"
              :backDelay="5000"
              :backSpeed="80"
              :loop="true"
              :showCursor="false"
            >
              <div class="ibe font-weight-light mt-4">a<span class="typing"></span></div>
            </vue-typed-js>
          </div>
          <div class="about-description">
            <p class="">I am <span class="text-uppercase font-weight-light">Ibe Augustine Chiehiura</span>, an award winning Frontend Developer specialized in Vue JS and Node JS.</p>
            <p>In addition to the JavaScript frameworks, I competently work with MySQL, Git, Bootstrap, Sass, CSS3 and HTML5 technologies. Check out my <a href="https://github.com/aibe64" target="_blank">Github repository</a> to see useful source codes.</p>
            <p>Feel free to preview my <a :href="resume" download>resume</a> and take a look at my latest projects on the <router-link to="/portfolio"> portfolio</router-link> page. Also, do well to <router-link to="/get-in-touch">get in touch</router-link> should you need my services.</p>
            <h4 class="thanks font-weight-ligh">THANKS.</h4>
          </div>
          <socials></socials>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About-me',
  data () {
    return {
      resume: '../../public/docs/resume.docx'
    }
  },
  components: {
    socials: () => import('@/components/socials')
  }
}
</script>
