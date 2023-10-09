export const state = () => {
    return {
        posts: []
    }
}

export const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, nuxtContext) {
        await dispatch('load')        
    },
    async load({ commit }) {
        const posts = await fetch('http://localhost:4000/posts').then(res => res.json());
        commit('setPosts', posts);
    }
}