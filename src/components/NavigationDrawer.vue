<template>
    <v-navigation-drawer
        v-model="drawerState"
        absolute
        >
        <v-list-item>
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    
</template>

<script>
export default {
    data(){
        return {
        items: [
            { title: '(Spain)', icon: 'mdi-view-dashboard' },
            { title: 'Madrid', icon: 'mdi-view-dashboard' },
            { title: 'Seville', icon: 'mdi-forum' },
            { title: 'Grenade', icon: 'mdi-forum' },
            { title: 'Bilbao', icon: 'mdi-forum' },
            { title: 'Granada', icon: 'mdi-forum' },
            { title: 'Cordoba', icon: 'mdi-forum' },
            { title: 'Valencia', icon: 'mdi-forum' },
            { title: 'Salamanca', icon: 'mdi-forum' },
            { title: 'San Sebastian', icon: 'mdi-forum' },
            { title: '(South America)', icon: 'mdi-view-dashboard' },
            { title: 'Lima', icon: 'mdi-view-dashboard' },
            { title: 'Montevideo', icon: 'mdi-forum' },
            { title: 'Quito', icon: 'mdi-forum' },
            { title: 'Buenos Aires', icon: 'mdi-forum' },
            ]
        }
  },
  computed: {
      drawerState : {
        get () { return this.$store.getters['UIEventBus/drawerState'] },
        set (v) { return this.$store.commit('UIEventBus/toggleDrawerState', v) }
      }
  }
}
</script>
