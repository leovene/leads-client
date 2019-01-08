'use strict';

const getters = {
    isUserLogin: state => {
        return state.isUserLogin;
    },
    getEmployeeList: state => {
        return state.employeesList;
    },
    getEmployee: state => {
        return state.employee;
    }
};

export default getters;
