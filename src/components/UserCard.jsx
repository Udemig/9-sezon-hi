import React from "react";

const UserCard = ({ userData }) => {
  //   console.log(props);
  //   const { userData, title } = props;
  console.log(userData);

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card p-4 bg-info-subtle">
        <p>Adı:{userData.name}</p>
        <p>Kullanıcı Adı:{userData.username}</p>
        <p>Telefon:{userData.phone}</p>
        <p>Adres:{userData.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
