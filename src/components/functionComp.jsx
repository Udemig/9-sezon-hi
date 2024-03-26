import { useEffect, useState } from "react";
const Paper = (props) => {
  const [page, setPage] = useState(0);

  // bileşenin ekrana gelme olayı
  useEffect(() => {
    console.log("Bileşen ekrana geldi");
    // componentWillUnmount'ı izlemeye yarar
    return () => {
      console.log("Bileşenin ekrandan gitme olayı");
    };
  }, []);
  // bileşenin render olayını izler
  useEffect(() => {
    console.log("Bileşen render oldu");
  });
  // belirli bir state'in değişimini izler
  useEffect(() => {
    console.log("Sayfa değiştirildi", page);
  }, [page]);
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-4">
      <p>sayfa:{page}</p>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Sayfa Değiş
      </button>
    </div>
  );
};

export default Paper;
