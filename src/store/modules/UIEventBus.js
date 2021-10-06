const state = {
    drawerState : false
}

const getters = {
    drawerState : state => {
        return state.drawerState
    }
}

const mutations = {
    toggleDrawerState(state, data) {
        state.drawerState = data
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}

