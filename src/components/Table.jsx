import React from "react";

const Table = ({ users }) => {
  console.log(users);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>İsim</th>
          <th>Email</th>
          <th>Şirket</th>
          <th>Adres</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <tr key={user.id}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>{user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
