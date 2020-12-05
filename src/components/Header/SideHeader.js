import React from "react";

function SideHeader({ isOpen, setIsOpen }) {
  return <> {isOpen ? <div>This is the SideHeader</div> : null}</>;
}

export default SideHeader;
