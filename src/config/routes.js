import Login from '../components/Login';
import Employee from '../components/Employee';
import RegisterEmployee from "../components/RegisterEmployee";
import UpdateEmployee from "../components/UpdateEmployee";

export const routes = [
    { path: '', component: Login, titulo: 'Login'},
    { path: '/employee', component: Employee, titulo: 'Funcionários'},
    { path: '/create', component: RegisterEmployee, titulo: 'Cadastrar'},
    { path: '/update', component: UpdateEmployee, titulo: 'Atualizar'}
];