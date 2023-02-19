import React from 'react';

function NavBarItems(props) {
  // const navItems = props.navItems;
  const isNavOpen = props.isNavOpen;
//   console.log(navItems);

  return (
    <ul className={`nav-links ${isNavOpen ? 'nav-active' : ''}`}>
      {props.navItems.map((navItem) => (
        <li key={navItem.name}>
          <a href={navItem.url}>{navItem.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavBarItems;
