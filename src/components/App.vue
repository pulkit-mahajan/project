<template>
  <div id="app">
    <signup v-if="registerPage" @handleSignupSuccess="handleSignupSuccess" @showloginpage="showloginpage"/>
    <login v-if="loginPage"  @showregisterpage="showregisterpage" :users="users" @handleLoginSuccess="handleLoginSuccess"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        users:[
          {
            firstName: 'pulkit',
            lastName: 'mj',
            email: 'pmj@gmail.com',
            pass: 'pass1234@'
          }
        ],
        loginPage: true,
        registerPage: false
      }
    },
    components: {
      Signup: () =>  import('./Signup'),
      Login: () => import('./Login')
    },
    methods: {
      handleLoginSuccess() {
        alert('Logged In Successfully!')
      },
      showloginpage() {
        this.loginPage= true;
        this.registerPage = false
      },
      showregisterpage() {
        this.loginPage= false;
        this.registerPage = true
      },
      handleSignupSuccess(userData) {
        console.log('handleSignupSuccess');
        this.users.push(userData);
        alert('User Registered Successfully!');
      }
    }
  }
</script>


<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
   @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Raleway', sans-serif;
      line-height: 1.8;
      background: #344a72;
      }

    img {
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 150px;
      float: right;
      margin: -90px 15px 15px -90px;
        }
    a {
        text-decoration: none;
        cursor: pointer;
      }
    form{
      background-color: white;
    }
    #container 
      {
        margin: 30px auto;
        max-width: 400px;
        padding: 20px;
      }

    .form-wrap {
       background: white;
       padding: 15px 25px;
       color: #333;
      }

    .form-wrap h1{
        background: white;
      }
    .form-wrap p {
        background: white;
        text-align: center;
      }

      .form-wrap .form-group {
        background: white;
        margin-top: 15px;
      }

      .form-wrap .form-group label {
        background: white;
        display: block;
      }

      .form-wrap .form-group input {
       width: 100%;
       padding: 10px;
       border: #ddd 1px solid;
       border-radius: 5px;
       background: white;
      }

      .form-wrap .form-group input:hover{
        border-color: cyan;
      }
      .form-wrap button {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 20px;
        color: white;
        background: #49c1a2;
        cursor: pointer;
      }

      .form-wrap button:hover {
       background: #37a08e;
      }

      .form-wrap .bottom-text {
        font-size: 13px;
        margin-top: 20px;
        background: white;
      }

      footer {
        text-align: center;
        margin-top: 10px;
      }

      footer a {
        color: #49c1a2;
      }
      #first-name:focus{
        outline: none;
        border: 2px solid green;
      }

      #last-name:focus{
        outline: none;
        border: 2px solid green;
      }
      
      #email:focus{
        outline: none;
        border: 2px solid green;
      }
      
      #password:focus{
        outline: none;
        border: 2px solid green;
      }

      #password2:focus{
        outline: none;
        border: 2px solid green;
      }      
</style>