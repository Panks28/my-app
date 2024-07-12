import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-violet-700 text-white flex justify-between">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          className="h-12 pt-3 px-3 rounded-2xl"
          alt="website-logo"
        ></img>
        <ul className=" px-16 py-4 flex justify-end space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Explore Phones</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>
      <main className="  bg-fuchsia-100 flex justify-evenly">
        <div className="main py-40 pl-9">
          <div className="text-5xl">The Best Phones in the Town</div>
          <p className="py-3 w-1/2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullam
            <div className="buttons">
              <button className="bg-purple-800 px-3 py-2 mx-1 rounded-2xl text-white hover:text-slate-900 hover:bg-white hover:border-2 hover:border-purple-950 hover:py-1.5">
                Buy Now
              </button>
              <button className="bg-purple-800 px-3 py-2 mx-1 rounded-2xl text-white hover:text-slate-900 hover:bg-white hover:border-2 hover:border-purple-950 hover:py-1.5">
                Contact Us
              </button>
            </div>
          </p>
        </div>
        <div className="flex items-center pr-20">
        <img src="A man with the phone.png" alt="man-with-phone" className="h-72"></img>
        </div>
      </main>
      <hr/>
    </div>
  );
}

export default Navbar;
