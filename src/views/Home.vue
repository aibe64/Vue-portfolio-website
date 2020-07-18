<template>
  <div class="home">
    <div class="container-fluid intro-wrap text-center text-uppercase py-5">
      <vue-typed-js
        class="typed mx-auto py-auto"
        :strings="['be augustine c']"
        :typeSpeed="100"
        :backDelay="5000"
        :backSpeed="80"
        :loop="true"
        :showCursor="false"
      >
        <h1 class="ibe font-weight-light mx-auto mt-4">i<span class="typing"></span></h1>
      </vue-typed-js>
      <vue-typed-js
        class="typed mx-auto py-auto"
        :strings="['developer']"
        :typeSpeed="100"
        :backDelay="4000"
        :backSpeed="10"
        :loop="true"
        :showCursor="true"
      >
        <p class="stack mx-auto">frontend <span class="typing"></span></p>
      </vue-typed-js>
      <div class="home-btn-cont d-flex justify-content-center mx-auto mt-5 pt-5 pb-3">
        <router-link class="home-btn col-4 col-md-3 col-lg-2 mx-1 mx-lg-3 btn btn-light p-0 p-sm-2 p-lg-3" to="/about-me">About me</router-link>
        <router-link class="home-btn col-4 col-md-3 col-lg-2 mx-1 mx-lg-3 btn btn-light p-0 p-sm-2 p-lg-3" to="/portfolio">portfolio</router-link>
      </div>
      <socials></socials>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    socials: () => import('@/components/socials')
  }
}
</script>
