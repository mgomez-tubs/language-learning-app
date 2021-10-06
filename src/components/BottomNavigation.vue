<template>
    <div class="bottom-navigation-container">
        <v-bottom-navigation color="primary" v-model="value" grow>
            <v-btn value="Menu" @click="toggleNavigationDrawer" v-model="drawerState">
                <span>Menu</span>

                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-btn value="home" to="/">
                <span>Home</span>

                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn value="favorites" to="favorites">
                <span>Favorites</span>

                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn value="profile" to="profile">
                <span>My Account</span>

                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn value="help" to="help">
                <span>Help</span>

                <v-icon>mdi-help-circle</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<style lang="scss">
   .bottom-navigation-container {
        position: absolute;
        bottom: 0px;
        width:100%;
        display:         flex; 
        align-items:     center;
        justify-content: center;
       .v-bottom-navigation {
           width: 50% !important;
        }
    }
  
</style>

<script>
export default {
    data(){
        return {
            value: 'home'       // default value
        }
    },
    methods: {
        toggleNavigationDrawer: function() {
            this.$store.commit('UIEventBus/toggleDrawerState')
        }
    },
    computed: {
        drawerState:{
            get () { return this.$store.getters['UIEventBus/drawerState'] },
            set (v) { return this.$store.commit('UIEventBus/toggleDrawerState', v) }
        }
    }
}
</script>