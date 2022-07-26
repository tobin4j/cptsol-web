<template>
  <div id="app">

<!--      <router-view />-->
      <router-view v-slot="{ Component }">
          <keep-alive>
              <component :is="Component" />
          </keep-alive>
      </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',


}
</script>
