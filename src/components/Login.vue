<template>
  <div id='auth'>
    <div id='login' v-if='!loggedIn'>
      <input v-model="loginEmail" type='email' placeholder="Your Email">
      <input v-model='loginPassword' type='password' />
      <button v-on:click='login(loginEmail, loginPassword)'>Login</button>
    </div>

    <div id='logout' v-if='loggedIn'>
      <button v-on:click='logout()'>Logout</button>
    </div>

    <div id='signUp' v-if='!loggedIn'>
      <div>
        <input v-model="signupEmail" type='email' placeholder="Your Email">
        <input v-model='signupPassword' type='password' />
        <div>
            <input type="checkbox" id="termsAndConditions" v-model="termsAndConditions" />
            <label for='termsAndConditions'>I agree to the Terms and Conditions</label>
        </div>
        <button v-on:click='signUp(signupEmail, signupPassword, termsAndConditions)'>Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase';
import { auth } from '../firebase'

export default {
  name: 'login',
  data () {
    return {
      loginEmail: '',
      loginPassword: '',
      signupEmail: '',
      signupPassword: '',
      loggedIn: auth.currentUser,
      termsAndConditions: false
    }
  },
  methods: {
    login: function(email, password) {
      console.log("Logging in with Email and Password:", email, password);
      let t = this
      auth.signInWithEmailAndPassword(email, password).then(function(ret) {
        if (ret) t.loggedIn = auth.currentUser
      }).catch(function(error) {
        console.log("There was an error logging in: ", error);
      });
      this.loginEmail = ""
      this.loginPassword = ""
    },
    signUp: function(email, password, termsAndConditions) {
      console.log("New User is Signing up with Email and password:", email, password);
      if (termsAndConditions) {
        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
          console.log("There was an error signing up: ", error);
        })
      } else {
        console.log("Please agree to the terms and conditions");
      }
    },
    logout: function() {
      let t = this
      auth.signOut().then(function() {
        // Sign Out Successfull
        t.loggedIn = auth.currentUser
      }).catch(function(error) {
        console.log("There was an error signing out: ", error);
      })
    }
  }
}
</script>

<style>

</style>
