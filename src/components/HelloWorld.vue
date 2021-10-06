<template>
   <PlacesMap/>
</template>

<script>
import PlacesMap from "../components/PlacesMap.vue"
  export default {
    name: 'HelloWorld',
    components : {
      PlacesMap
    }
  }
</script>

<style scoped>
.world-map-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>