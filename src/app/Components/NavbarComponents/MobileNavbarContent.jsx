import React, { useState } from "react";
import { dropdownData } from "./NavbarData";
import MobileDropDown2 from "./MobileDropDown";

function MobileNavbarContent() {

  const [open , setOpen] = useState(null);

  return (
    <div className="relative background-grid h-[100vh] overflow-scroll">

      <div className="absolute w-[50%] right-0 h-full right-gradient "/>

      <div className="absolute w-[50%] left-0 h-full left-gradient"/>

      <div className="absolute w-full left-0 h-full down-gradient" />


      <div className="flex flex-col pt-16 gap-2 items-center min-w-[100vw] sm:min-w-[70vw] md:min-w-[50vw] lg:min-w-[40vw] px-3 z-[150]">
        {dropdownData.map((obj, index) => {
          return (
            <MobileDropDown2
              key={index}
              label={obj.label}
              options={obj.options}
              index = {index}
              open = {open}
              setOpen={setOpen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MobileNavbarContent;
