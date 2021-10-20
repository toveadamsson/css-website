import React, { useState, NavLink } from "react"

function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        console.log("clicked")
      }
      const closeMenu = () => {
        setNavbarOpen(false)
        (console.log("closed"))
      }
    return (
        <nav className="navBar">
          <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>...</ul>
        </nav>
        
      )

}

export default Navbar