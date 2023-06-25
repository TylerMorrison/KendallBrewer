import React, {useState} from 'react';
import './styles.css';
import classnames from 'classnames';

type Props = {};

function NavButton(navProps: {
  href: string;
  title: string;
  onClick: Function;
  selected: boolean;
}) {
  return (
    <a
      className={classnames('navButton', {
        selectedNavButton: navProps.selected,
      })}
      href={navProps.href}
      onClick={() => navProps.onClick()}
    >
      {navProps.title}
    </a>
  );
}

function NavBar(props: Props) {
  // const {} = props;

  const [currentSection, setCurrentSection] = useState('');

  return (
    <div className="navButtonContainer">
      <NavButton
        title="HOME"
        href="/KendallBrewer#home"
        onClick={() => setCurrentSection('home')}
        selected={currentSection === 'home'}
      />
      <NavButton
        title="ABOUT"
        href="/KendallBrewer#about"
        onClick={() => setCurrentSection('about')}
        selected={currentSection === 'about'}
      />
      <NavButton
        title="PORTFOLIO"
        href="/KendallBrewer#portfolio"
        onClick={() => setCurrentSection('portfolio')}
        selected={currentSection === 'portfolio'}
      />
      <NavButton
        title="RESUME"
        href="/KendallBrewer#resume"
        onClick={() => setCurrentSection('resume')}
        selected={currentSection === 'resume'}
      />
      <NavButton
        title="CONTACT"
        href="/KendallBrewer#contact"
        onClick={() => setCurrentSection('contact')}
        selected={currentSection === 'contact'}
      />
    </div>
  );
}

export default NavBar;
