import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

//Tabela de usuarios mostrando id, nome e nome de usuario
function Users() {
    //setando estados
    const [users, setUsers] = useState([]);

    //função assincrona em favor do await da request
    async function findUsers() {
        const resposta = await axios.get("https://jrxhr5-3000.csb.app/users");

        setUsers(resposta.data);
    }

    useEffect(() => {
        findUsers();
    }, []);

    //colunas pra tabela do antd
    const columns = [
        //campo de id
        {
            title: "Id",
            dataIndex: "id",
            //linkar url a valor da tabela
            render: (id) => <Link to={`/users/${id}`}>{id}</Link>,
        },
        //campo de nome
        {
            title: "Name",
            dataIndex: "name",
        },
        //campo de username
        {
            title: "Username",
            dataIndex: "username",
        },
    ];

    return (
        //tabela antd
        <Table dataSource={users} columns={columns} bordered />
    );
}

export default Users;
