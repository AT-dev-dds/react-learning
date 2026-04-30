import React from "react";

const Navbar = React.memo(() => {
  console.log("Navbar rendered");

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <h2>My Store</h2>
    </nav>
  );
});

export default Navbar;