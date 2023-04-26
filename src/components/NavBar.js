import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const pageLinks = links.map((link) => {
    const url = ["#",...link].join("")
    console.log(url)
    return <a key={link} href={url}> {link}</a>
  })

  return <nav>{pageLinks}</nav>;
}

export default NavBar;
