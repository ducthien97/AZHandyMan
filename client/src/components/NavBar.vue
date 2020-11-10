<template>
  <b-navbar fixed-top type='is-primary'>
    <template slot='brand'>
      <b-navbar-item tag='router-link' :to='{ path: "/" }'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/71cSs6FtaIL._AC_SL1500_.jpg'
          alt='Lightweight UI components for Vue.js based on Bulma'
        />
      </b-navbar-item>
    </template>
    <template slot='start'>
      <b-navbar-item href='/'>
        Home
      </b-navbar-item>
      <b-navbar-item href='/about'>
        About
      </b-navbar-item>
      <b-navbar-item href='/the-office'>
        The Office
      </b-navbar-item>
    </template>

    <template slot='end'>
      <b-navbar-item tag='div'>
        <div class='buttons'>
          <a class='button is-primary'>
            <strong>Sign up</strong>
          </a>
          <a class='button is-light'>
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
