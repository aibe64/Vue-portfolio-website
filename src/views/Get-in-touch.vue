<template>
  <div class="git">
    <div class="container mt-5">
      <div class="git-heading display-4 font-weight-light text-left text-uppercase my-3">
        <vue-typed-js
          :strings="['et in touch']"
          :typeSpeed="100"
          :backDelay="5000"
          :backSpeed="80"
          :loop="true"
          :showCursor="false"
        >
          <div class="ibe font-weight-light mt-4">g<span class="typing"></span></div>
        </vue-typed-js></div>
      <div class="git-nav d-flex justify-content-between mt-3">
        <div class="w-50 text-uppercase pl-2 pt-">
          <span v-if="mailSent" class="animate__animated animate__bounce text-success">{{sent}}</span>
          <span v-if="mailNotSent" class="animate__animated animate__bounce text-danger">{{notSent}}</span>
        </div>
        <p class="text-right"><router-link to="/portfolio"><span class="mr-1">GO TO PORTFOLIO &rightarrow;</span></router-link></p>
      </div>
      <div class="row pt-md-4 pt-lg-0">
        <div class="col-12 col-lg-6">
          <form class="mt-4 mt-lg-0 py-3" @submit.prevent="sendMail">
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="bg-transparent input-group-prepend">
                  <span class="bg-transparent text-white input-group-text pr-4">
                    <span class="fas fa-user"></span>
                  </span>
                </div>
                <input type="text" class="form-control text-center" placeholder="Enter name" required name="name" v-model="user.name">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="bg-transparent input-group-prepend">
                  <span class="bg-transparent text-white input-group-text pr-4">
                    <span class="fas fa-at"></span>
                  </span>
                </div>
                <input type="email" class="form-control text-center" placeholder="Email" required name="email" v-model="user.email">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="bg-transparent input-group-prepend">
                  <span class="bg-transparent text-white input-group-text pr-4">
                    <span class="fas fa-pen"></span>
                  </span>
                </div>
                <textarea class="form-control text-center" placeholder="Your Message" required rows="2" cols="5" name="message" v-model="user.message"></textarea>
              </div>
            </div>
            <button class="d-block mx-auto git-btn btn btn-light mt-4 w-50 " type="submit">
                <span class="spinner-border spinner-border-sm" role="status" v-if="loading" aria-hidden=""></span>
                <span v-if="!loading">SEND</span>
              </button>
          </form>
        </div>
        <div class="col-12 col-lg-6 d-block pt-5">
          <div class="d-flex justify-content-center text-center mb-3">
            <i class="icons fas fa-phone mr-2 h3"></i>
            <a class="contacts h5 font-weight-bold" href="tel:+2348165493319">+2348165493319</a>
          </div>
          <div class="d-flex justify-content-center text-center mb-3">
            <i class="icons fas fa-at mr-2 h3"></i>
            <a class="contacts h5 font-weight-bold" href="mailto:ibea37@gmail.com">ibea37@gmail.com</a>
          </div>
        </div>
      </div>
      <socials></socials>
    </div>
  </div>
</template>

<script>
import mail from 'emailjs-com'
export default {
  name: 'Get-in-touch',
  components: {
    socials: () => import('@/components/socials')
  },
  data () {
    return {
      mailSent: false,
      mailNotSent: false,
      sent: 'mail sent successfully',
      notSent: 'mail not sent',
      loading: false,
      user: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    async sendMail () {
      this.loading = true
      mail.send('gmail', 'TEMPLATE_ID', this.user, 'USER_ID')
        .then(data => {
          this.mailSent = true
          this.loading = false
          setTimeout(() => { this.mailSent = false }, 5000)
        })
        .catch(() => {
          this.mailNotSent = true
          this.loading = false
          setTimeout(() => { this.mailNotSent = false }, 5000)
        })
    }
  }
}
</script>
