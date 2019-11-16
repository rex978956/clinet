<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import * as Layout from "@/components";
export default {
  name: "App",
  components: {
    ...Layout
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  }
};
</script>

<style>
#app {
  margin-top: 0px;
  /* margin-top: 60px; */
}
</style>
