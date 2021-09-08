import React from 'react';
import settingsIcon from 'assets/icons/settings.svg';
import styles from './AppHeader.module.css';
import AppButton from 'components/AppButton/AppButton';

export default function AppHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Play This Note!</div>
      <div className={styles.settings}>
        <AppButton onClick={() => {}}
                   secondary>
          <img src={settingsIcon}
               alt="Settings" />
        </AppButton>
      </div>
    </div>
  );
}
