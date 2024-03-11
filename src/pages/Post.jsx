//import * as ReactDOM from "react-dom/client";
//import { useNavigate } from "react-router-dom";
import axios from 'axios';


//import {
//    createBrowserRouter,
//} from "react-router-dom";



const github = 'https://api.github.com/users/MarcosG66'
const server = 'http://localhost:3000/users'

const dados = {
    name: 'valor1',
    username: 'valor2',
    email: 'valor2',
    passsword: 'valor2',
};

function Users() {


    //axios.get('http://localhost:3000/users')
    //  .then(function (response) {
    //     console.log(response.data)
    // });

    axios.post('http://localhost:3000/users', dados)
        .then(response => {
            console.log('Resposta do servidor:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });

    return (
        <input></input>
    )
}

export default Users
