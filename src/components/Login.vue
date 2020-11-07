<template>
  <div id="container">
            <div class="form-wrap">
        <h1>Login</h1>
        <img src="https://miro.medium.com/max/2998/1*SjzF_as7mLBjLj27ZAVouQ.jpeg" alt="flickr">
        <!-- <p>It's free and only takes a minute</p> -->
        <form @submit.prevent="formSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="fields.email" type="email" name="email" id="email" />
            <p class="error">{{errors.email}}</p>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="fields.pass" type="password" name="password" id="password" />
            <p class="error">{{errors.pass}}</p>
          </div>
          <!-- <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input v-model="fields.rePass" type="password" name="pasword2" id="password2" />
            <p class="error">{{errors.rePass}}</p>
          </div> -->
          <button type="submit" class="btn">Sign Up</button>
          <p class="bottom-text">
            By clicking the Login button, you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
      <footer>
        <p>Want to create an account? <a @click="$emit('showregisterpage')">Signup Here</a></p>
      </footer>
  </div>
</template>

<script>
export default {
    props:{
        users: {
            type: Array,
            default: ()=> [],
            required: false
        }
    },
    data(){
      return {
        fields:{
        //   firstName: '',
        //   lastName: '',
          email: '',
          pass: '',
        //   rePass: ''       
        },
        errors:{
        //   firstName: '',
        //   lastName: '',
          email: '',
          pass: '',
        //   rePass: ''       
        }
      }
    },
    computed: {
      emailValid() {
        return this.users.find(user => user.email===this.fields.email)
      },
      passValid() {
        return this.users.find(user => user.pass===this.fields.pass)
      },
    },
    methods:{
      validateSuccess(){
        this.$emit('handleLoginSuccess',this.fields);
      },
      formSubmit() {
        this.clearErrors();
        this.validate();
      },
      clearErrors() {
        Object.keys(this.errors).forEach( field => this.errors[field] = ''   );
      },
      validate() {
        if(!this.emailValid) {
          this.errors.email = 'Invalid id'
        }
        if(!this.passValid) {
          this.errors.pass = 'Invalid Password'
        }
        if(!this.emailValid || !this.passValid ) {
          return;
        }
        this.validateSuccess();
      }
    }
}
</script>