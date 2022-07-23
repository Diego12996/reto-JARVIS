import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import getUser from "./services";


function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => setUsers(data)).then(console.log)
      .catch(console.log);
  }, []);

  const usersOrderAge = users.sort(function(a, b){return a.dob.age - b.dob.age})

  function ListUsers() {
    return (
      <>
        <Table striped bordered responsive >
          <thead className="table-primary" >
            <tr style={{alignItems: "center"}} >
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Genero</th>
              <th>Email</th>
              <th>Nacionalidad</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            <>
              { usersOrderAge.map((user, index) => (
                <tr key={index} className="table-info">
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{ user.dob.age}</td>
                  <td>{ user.gender }</td>
                  <td>{ user.email }</td>
                  <td>{ user.nat}</td>
                  <td><img src={user.picture.thumbnail} alt="user" /></td>
                </tr>
              ))}
            </>
          </tbody>
        </Table>
      </>
    )
  }

  return (
    <>
        <Button color="primary" style={{margin: "1rem"}}>
        Download CSV
          <a href="https://randomuser.me/api/?results=25&nat=gb,us,es&format=csv&dl">
                  f
          </a>
        </Button>
      <ListUsers />
    </>
  )
}

export default UsersTable;