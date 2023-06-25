import React from 'react';
import { HashLink } from 'react-router-hash-link';

function AppDesign(props) {
  // const {} = props;

  return (
    <div>
        <HashLink smooth to={"/KendallBrewer/#home"}>Home</HashLink>
        <HashLink smooth to={"/KendallBrewer/#about"}>About</HashLink>
        <HashLink smooth to={"/KendallBrewer/#portfolio"}>Portfolio</HashLink>
        <HashLink smooth to={"/KendallBrewer/#resume"}>Resume</HashLink>
        <HashLink smooth to={"/KendallBrewer/#contact"}>Contact</HashLink>
    </div>
  );
}

export default AppDesign;