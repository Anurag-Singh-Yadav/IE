import React from "react";
import Dropdown from "./src/app/Components/NavbarComponents/Dropdown";

function Navbar() {
  const options = [
    {
      label:'DSA',
      value: 'dsa',
    },
    {
      label:'Computer fundamentals',
      value:'computerFundamentals',
    },
    {
      label:'Computer fundamentals',
      value:'computerFundamentals',
    },
    {
      label:'Computer fundamentals',
      value:'computerFundamentals',
    }
  ];
  return (
    <div>
      <Dropdown
        label={"Roadmaps"}
        options={options}
      />
    </div>
  );
}

export default Navbar;
