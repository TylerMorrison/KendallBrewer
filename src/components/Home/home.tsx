import React from 'react';
import './styles.css';

type Props = {
  
}

function Home(props: Props) {
  // const {} = props;

  return (
    <div>
      <div id="home" className='home'>HOME</div>
      <div id="about" className='about'>about</div>
      <div id="portfolio" className='portfolio'>portfolio</div>
      <div id="resume" className='resume'>resume</div>
      <div id="contact" className='contact'>contact</div>
    </div>
  );
}

export default Home;