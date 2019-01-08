'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const actions = {
    updateUserLogin({ commit }, payload) {
        commit('updateUserLogin',payload);
    },
    updateEmployeeList({ commit }, payload) {
        commit('updateEmployeeList',payload);
    },
    updateEmployee({ commit }, payload) {
        commit('updateEmployee',payload);
    },
};

export default actions;