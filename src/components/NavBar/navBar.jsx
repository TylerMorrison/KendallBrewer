import React from 'react';
import { HashLink } from 'react-router-hash-link';

function AppDesign(props) {
  // const {} = props;

  return (
    <div>
        <HashLink smooth to={"/#home"}>Home</HashLink>
        <HashLink smooth to={"/#about"}>About</HashLink>
        <HashLink smooth to={"/#portfolio"}>Portfolio</HashLink>
        <HashLink smooth to={"/#resume"}>Resume</HashLink>
        <HashLink smooth to={"/#contact"}>Contact</HashLink>
    </div>
  );
}

export default AppDesign;