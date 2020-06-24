<template>
  <span id='App'>
    <router-view/>
    <PostAside></PostAside>
  </span>
</template>

<script>

export default {
  name: 'App',
  components: {
    PostAside: () => import('./components/PostAside.vue')
  }
}
</script>
