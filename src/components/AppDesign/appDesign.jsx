import React from 'react';
import './styles.css';


function AppDesign(props) {
  // const {} = props;

  return (
    <div>
      <section id="#home" className='home'>HOME</section>
      <section id="#about" className='about'>about</section>
      <section id="#portfolio" className='portfolio'>portfolio</section>
      <section id="#resume" className='resume'>resume</section>
      <section id="#contact" className='contact'>contact</section>
    </div>
  );
}

export default AppDesign;