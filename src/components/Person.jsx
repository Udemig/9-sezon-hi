import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Person = () => {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState(null);
  /*
    sayfanın her değiştiğinde 
    ve bileşen ilk ekrana geldiğinde çalışır
  */
  useEffect(() => {
    // kullanıcı verilerini al
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [page]);

  return (
    <div className="d-flex flex-column m-4 gap-4">
      <div className="d-flex justify-content-center align-items-center mt-5 gap-4">
        <p>sayfa:{page}</p>
        <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
          Sayfa Değiş
        </button>
        {/* api'den henüz cevap gelmemişse ekrana loading bas */}
      </div>
      <div>
        {userData === null ? (
          <p>Loading...</p>
        ) : (
          <UserCard userData={userData} />
        )}
      </div>
    </div>
  );
};

export default Person;
