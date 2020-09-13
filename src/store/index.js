import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        user: JSON.parse(localStorage.getItem('user')) || null,
    },

    mutations: {

        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            Axios.defaults.headers.common['Authorization'] = user ? `Bearer ${user.jwt_token}` : null;
        }

    },

    actions: {

        signIn({ commit }, user) {
            commit('setUser', user);
        },

        signOut({ commit }) {
            commit('setUser', null);
        }

    }

});