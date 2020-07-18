<template>
  <div class="portfolio">
    <div class="container mt-4">
      <div class="portfolio-heading text-left text-uppercase my-5">
        <vue-typed-js
          :strings="['orks']"
          :typeSpeed="100"
          :backDelay="5000"
          :backSpeed="80"
          :loop="true"
          :showCursor="false"
        >
          <div class="ibe font-weight-light mt-4">w<span class="typing"></span></div>
        </vue-typed-js>
      </div>
      <div class="portfolio-nav row d-flex justify-content-between mt-3 mb-4">
        <p class="col-6 text-center"><router-link to="/about-me"><span class="mr-1">&leftarrow; ABOUT ME</span></router-link></p>
        <p class="col-6 text-center"><router-link to="/get-in-touch"><span class="mr-1">GET IN TOUCH &rightarrow;</span></router-link></p>
      </div>
      <div class="portfolio-card-cont container">
        <div class="row d-flex justify-content-around mx-md-auto">
          <div
            class="card border-0 text-center col-12 col-lg-5 px-0 mx-xl-1 mb-5 mb-md-5 mb-md-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div class="card-header bg-light text-secondary mx-0">
              <img src="../../public/images/works/portfolio.png" alt="" class="img-fluid">
            </div>
            <div class="row d-flex justify-content-center px-3">
              <a class="col-12 col-md-6 btn border text-primary rounded-0 mb-1 mb-md-0" href="https://github.com/aibe64/Vue-portfolio-website" target="_blank">SOURCE CODE</a>
              <a class="col-12 col-md-6 btn border text-success rounded-0" href="https://" target="_blank">VISIT</a>
            </div>
          </div>
          <div
            class="card border-0 text-center col-12 col-lg-5 px-0 mx-xl-1 mb-5 mb-md-5 mb-md-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div class="card-header bg-light text-secondary mx-0">
              <img src="../../public/images/works/diligent.png" alt="" class="img-fluid">
            </div>
            <div class="row d-flex justify-content-center px-3">
              <a class="col-12 col-md-6 btn border text-primary rounded-0 mb-1 mb-md-0" href="https://github.com/aibe64/Vue-website-template" target="_blank">SOURCE CODE</a>
              <a class="col-12 col-md-6 btn border text-success rounded-0" href="https://" target="_blank">VISIT</a>
            </div>
          </div>
          <div
            class="card border-0 text-center col-12 col-lg-5 px-0 mx-xl-1 mb-5 mb-md-5 mb-md-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
            <div class="card-header bg-light text-secondary mx-0">
              <img src="../../public/images/works/hng-recharge.png" alt="" class="img-fluid">
            </div>
            <div class="row d-flex justify-content-center px-3">
              <a class="col-12 col-md-6 btn border text-primary rounded-0 mb-1 mb-md-0" href="https://github.com/aibe64/HNG-recharge" target="_blank">SOURCE CODE</a>
              <a class="col-12 col-md-6 btn border text-success rounded-0" href="https://" target="_blank">VISIT</a>
            </div>
          </div>
          <div
            class="card border-0 text-center col-12 col-lg-5 px-0 mx-xl-1 mb-5 mb-md-5 mb-md-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
            <div class="card-header bg-light text-secondary mx-0">
              <img src="../../public/images/works/dictionary.png" alt="" class="img-fluid">
            </div>
            <div class="row d-flex justify-content-center px-3">
              <a class="col-12 col-md-6 btn border text-primary rounded-0 mb-1 mb-md-0" href="https://github.com/aibe64/Online-Dictionary" target="_blank">SOURCE CODE</a>
              <a class="col-12 col-md-6 btn border text-success rounded-0" href="https://" target="_blank">VISIT</a>
            </div>
          </div>
          <div
            class="card border-0 text-center col-12 col-lg-5 px-0 mx-xl-1 mb-5 mb-md-5 mb-md-3"
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            >
            <div class="card-header bg-light text-secondary mx-0">
              <img src="../../public/images/works/calculator.png" alt="" class="img-fluid">
            </div>
            <div class="project-link row d-flex justify-content-center px-3">
              <a class="col-12 col-md-6 btn border text-primary rounded-0 mb-1 mb-md-0 xx" href="https://github.com/aibe64/Basic-calculator" target="_blank">SOURCE CODE</a>
              <a class="col-12 col-md-6 btn border text-success rounded-0" href="https://" target="_blank">VISIT</a>
            </div>
          </div>
        </div>
      </div>
      <socials></socials>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {
    socials: () => import('@/components/socials')
  }
}
</script>

<style>

</style>
