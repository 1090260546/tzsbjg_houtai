const state = {
    user_data: []
}

const mutations = {
    set_user_data(state,param) {
        state.user_data =param
    }
}

const actions = {
    get_user_data(context, userdata) {
        console.log(userdata);
        context.commit('set_user_data',userdata);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}