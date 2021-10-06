<template>
    <div class="view-container">
        <div class="world-map-container">
            <div class="toggler-container">
                <v-switch inset v-model="toggleView"></v-switch>
            </div>
            <template>
                <PlacesMap v-if="toggleView"/>
                <PlacesList v-else/>
            </template>
        </div>
     </div>
</template>

<script>
import PlacesMap from "../components/PlacesMap.vue"
import PlacesList from "../components/PlacesList.vue"
  export default {
    name: 'HelloWorld',
    data() {
        return {
            toggleView: false
        }
    },
    components : {
      PlacesMap,
      PlacesList
    }
  }
</script>
<style lang="scss">
.view-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.world-map-container {
    position: relative;
    display: flex;
    width: 70%;
    height: 60%;
    .toggler-container {
        position:absolute;
        right: 0px;
        top:0px;
    }
}

</style>