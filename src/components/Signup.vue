<template>
  <div id="container">
            <div class="form-wrap">
        <h1>Sign Up</h1>
        <img src="https://miro.medium.com/max/2998/1*SjzF_as7mLBjLj27ZAVouQ.jpeg" alt="flickr">
        <p>It's free and only takes a minute</p>
        <form @submit.prevent="formSubmit">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input v-model="fields.firstName" type="text" name="firstName" id="first-name" />
            <p class="error">{{errors.firstName}}</p>
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input  v-model="fields.lastName" type="text" name="lastName" id="last-name" />
            <p class="error">{{errors.lastName}}</p>
          </div>
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
          <div class="form-group">
            <label for="password2">Confirm Password</label>
            <input v-model="fields.rePass" type="password" name="pasword2" id="password2" />
            <p class="error">{{errors.rePass}}</p>
          </div>
          <button type="submit" class="btn">Sign Up</button>
          <p class="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
      <footer>
        <p>Already have an account? <a @click="$emit('showloginpage')">Login Here</a></p>
      </footer>
  </div>
</template>

<script>
export default {
    data(){
      return {
        fields:{
          firstName: '',
          lastName: '',
          email: '',
          pass: '',
          rePass: ''       
        },
        errors:{
          firstName: '',
          lastName: '',
          email: '',
          pass: '',
          rePass: ''       
        }
      }
    },
    computed: {
      regex: ()=>({
        EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        PASSWORD: /^(?=.*[~!@#$%^&*)(_\-+=}{\][|'.?/])(?=.*[a-zA-Z])(?=.*[0-9])[~!@#$%^&*)(_\-+=}{\][|'.?/a-zA-Z0-9]{8,24}$/,
      }),
      fNameValid(){
        return this.fields.firstName
      },
      lNameValid(){
        return this.fields.lastName
      },
      emailValid() {
        return this.fields.email || this.regex.EMAIL.test(this.fields.email)
      },
      passValid() {
        return this.fields.pass || this.regex.PASSWORD.test(this.fields.pass)
      },
      rePassValid() {
        return this.fields.rePass && this.fields.pass === this.fields.rePass
      }
    },
    methods:{
      validateSuccess(){
        this.$emit('handleSignupSuccess',this.fields);
      },
      formSubmit() {
        this.clearErrors();
        this.validate();
      },
      clearErrors() {
        Object.keys(this.errors).forEach( field => this.errors[field] = ''   );
      },
      validate() {
        if(!this.fNameValid) {
          this.errors.firstName = 'Required Field!';
        }
        if(!this.lNameValid) {
          this.errors.lastName = 'Required Field!';
        }
        if(!this.emailValid) {
          this.errors.email = 'Invalid Email'
        }
        if(!this.passValid) {
          this.errors.pass = 'Invalid Password'
        }
        if(!this.rePassValid) {
          this.errors.rePass = 'Password doesnt match'
        }

        if(!this.fNameValid || !this.lNameValid || !this.emailValid || !this.passValid ||!this.rePassValid) {
          return;
        }
        this.validateSuccess();
      }
    }
}
</script>