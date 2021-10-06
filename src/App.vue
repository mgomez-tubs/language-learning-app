<template>
  <v-app>

    <NavigationDrawer/>

    <v-main>
      <router-view/>
    </v-main>
        <BottomNavigation/>
  </v-app>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation.vue"
import NavigationDrawer from "@/components/NavigationDrawer.vue"
export default {
  name: 'App',
  components: {
      BottomNavigation,
      NavigationDrawer
  }
};
</script>