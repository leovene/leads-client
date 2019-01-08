'use strict';

const mutations = {
    updateUserLogin(state, payload) {
        state.isUserLogin = payload;
    },
    updateEmployeeList(state, payload) {
        state.employeesList = payload;
    },
    updateEmployee(state, payload) {
        state.employee = payload;
    },
};

export default mutations;
