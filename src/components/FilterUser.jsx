import React, { useEffect, useRef, useState } from "react";
import Table from "./Table";

const FilterUser = () => {
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltedUsers] = useState(null);
  const inputRef = useRef();
  // bileşen ekrana basılma anını izleme
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltedUsers(data);
      });
  }, []);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    // inputun değerine erişme
    const query = inputRef.current.value.toLowerCase();
    // arama terimiyle eşleşen kullanıcılar
    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    setFiltedUsers(filtred);
  };
  return (
    <div className="container d-flex flex-column mt-5 gap-3">
      <form className="d-flex gap-3" onSubmit={handleSubmit}>
        <input type="text" className="form-control" ref={inputRef} />
        <button className="btn btn-primary shadow">Ara</button>
      </form>
      {filtredUsers === null ? (
        <p>Yükleniyor...</p>
      ) : (
        <Table users={filtredUsers} />
      )}
    </div>
  );
};

export default FilterUser;
