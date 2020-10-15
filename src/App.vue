<template>
  <div id="app">
    <YnovNav />
    <div class="container">

        <div class="row">
             <router-view></router-view>
            <!-- <YnovMainContainer /> -->
        </div>
    </div>
    <YnovFooter />
  </div>
</template>

<script>
import YnovNav           from './components/YnovNav.vue'

// import YnovMainContainer from './components/YnovMainContainer.vue'
import YnovFooter        from './components/YnovFooter.vue'

export default {
  name: 'App',
  components: {
    YnovNav,
    YnovFooter
  }
}
</script>

<style>
body {
  padding-top: 56px;
}

</style>
