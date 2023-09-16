
export default {
    state: {
        swiperIndex: null,
    },

    getters: {
        SwiperIndex:state =>state.swiperIndex
    },

    mutations: {
        SWIPERINDEX(state,payload){
            state.swiperIndex = payload
             
        },
    },
    namespaced: true
}
