import React, { Component } from 'react';

import arrowRightSvg from 'assets/icons/arrow-right.svg';
import styles from './SubmitBtn.module.css';

import { Link } from 'react-router-dom';

import AppButton from 'components/AppButton/AppButton';

export default class SubmitBtn extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Link to="/trainer">
          <AppButton>
            <>
              <img className={styles.img}
                   src={arrowRightSvg}
                   alt="arrow right icon" />
              Далее
            </>
          </AppButton>
        </Link>
      </div>
    );
  }
}