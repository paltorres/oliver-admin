/**
 */
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FooterLinks.css';

class FooterLinks extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a className={s.link} href="https://mercadolibre.com">
            Mercadolibre
          </a>
          <span className={s.spacer}>|</span>
          <a className={s.link} href="https://github.com/paltorres/oliver-admin">
            Github Repo
          </a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FooterLinks);
