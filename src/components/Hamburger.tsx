import { useState } from "react";
import "./Hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Hamburger;
