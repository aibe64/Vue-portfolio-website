<template>
  <div class="fHeader container-fluid sticky-top">
    <b-navbar toggleable="md" type="dark" variant="" class="row d-flex justify-content-md-between">
      <b-navbar-brand class="col-1 ml-md-3 ml-lg-5 p-0" to="/">
        <!-- <div class="logo text-center h1">IAC</div> -->
        <img class="logo" src="../../public/images/logo.png" alt="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="col-md-9 px-2">
        <b-navbar-nav class="mx-md-auto">
          <b-nav-item class="font-weight-light mx-lg-2" to="/">HOME</b-nav-item>
          <b-nav-item class="font-weight-light mx-lg-2" to="/about-me">ABOUT ME</b-nav-item>
          <b-nav-item class="font-weight-light mx-lg-2" to="/portfolio">PORTFOLIO</b-nav-item>
          <div class="nav-item">
            <a class="nav-link resume font-weight-light mx-lg-2" :href="resume" download="">RESUME</a>
          </div>
          <b-nav-item class="font-weight-light mx-lg-2" to="/get-in-touch">GET IN TOUCH</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'fHeader',
  data () {
    return {
      resume: '../../public/docs/resume.docx'
    }
  }
}
</script>
