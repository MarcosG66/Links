//import * as ReactDOM from "react-dom/client";
//import { useNavigate } from "react-router-dom";
import axios from 'axios';


//import {
//    createBrowserRouter,
//} from "react-router-dom";



const github = 'https://api.github.com/users/MarcosG66'
const server = 'http://localhost:3000/users'

function Users() {


    axios.get('http://localhost:3000/users')
        .then(function (response) {
            console.log(response.data)
        });


    return (
        <h1>{response.data}</h1>
    )
}

export default Users
