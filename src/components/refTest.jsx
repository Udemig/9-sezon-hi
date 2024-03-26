import React, { useRef, useState } from "react";

const RefTest = () => {
  const [query, setQuery] = useState(" ");

  const inputRef = useRef();
  const labelRef = useRef();
  console.log(inputRef);
  // butona tıklanma
  const handleClick = () => {
    if (inputRef.current.value === "") {
      // kullanıcıyı inputa odaklama
      inputRef.current.focus();
      return;
    }
    // aratılan içeriği state'e aktarma
    setQuery(inputRef.current.value);
    // label renk değiştirme
    labelRef.current.style.backgroundColor = "red";
  };
  return (
    <>
      <div className="container d-flex flex-column mt-5 gap-3">
        <div className="d-flex gap-3">
          <input type="text" className="form-control" ref={inputRef} />
          <button className="btn btn-primary shadow" onClick={handleClick}>
            Ara
          </button>
        </div>
        <label className="mt-2" ref={labelRef}>
          Aratılan İçerik:{query}
        </label>
      </div>
    </>
  );
};

export default RefTest;
