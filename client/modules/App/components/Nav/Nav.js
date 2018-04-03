import React, { PropTypes } from 'react';
import { Link } from 'react-router';
//import { FormattedMessage } from 'react-intl';
import styles from './Nav.css';

const Nav = (props, context) => {
  return (
    <div className={styles.nav}>
      <span className={styles.link}><Link to='/home'>Home</Link></span>
      <span className={styles.link}><Link to='/'>Posts</Link></span>
      <span className={styles.link}><Link to='/about'>About</Link></span>
    </div>
  );
}

Nav.propTypes = {
};

export default Nav;
