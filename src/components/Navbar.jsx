import React from "react";

function Navbar() {

  return (
    <div className="px-[20%] shadow-lg h-20 flex gap-5 place-items-center z-50 sticky top-0 bg-white">
      <img className="w-10 rounded-full" src="/mylogo.jpg" alt="" />
      <span className="text-2xl font-bold cursor-pointer">Potato Twist</span>
    </div>
  );
}

export default Navbar;
