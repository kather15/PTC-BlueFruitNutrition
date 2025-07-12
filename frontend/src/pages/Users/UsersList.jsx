import { useEffect, useState } from "react";
import UserCard from "../../components/CardUsers/UserCard";
import "./UserList.css";

function UsersList() {
  const [clientes, setClientes] = useState([]);
  const [distribuidores, setDistribuidores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/customers")
      .then((res) => res.json())
      .then(setClientes);

    fetch("http://localhost:4000/api/distributors")
      .then((res) => res.json())
      .then(setDistribuidores);
  }, []);

  return (
    <div className="page-container">
      <div className="header">
        <h1 className="page-title">Usuarios</h1>
      </div>
      
      <div className="users-list-container">
        {clientes.map((c) => (
          <UserCard key={c._id} user={c} type="clientes" />
        ))}
        {distribuidores.map((d) => (
          <UserCard key={d._id} user={d} type="distribuidores" />
        ))}
      </div>
    </div>
  );
}

export default UsersList;