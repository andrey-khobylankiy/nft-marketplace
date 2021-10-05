import React from 'react';
import Link from 'next/link';
import style from './AlphaBanner.module.scss';

const AlphaBanner: React.FC = () => {
  return (
    <div className={style.Banner}>
      <p className={style.Text}>
        Welcome to the <span className={style.Alpha}> Alpha Version</span> of
        SecretNFT. All the marketplace is in{' '}
        <a
          href="https://telemetry.polkadot.io/#list/Ternoa%20Tesetnet"
          target="blank"
          className={style.Link}
        >
          testnet
        </a>
        .
      </p>
      <Link href="/faq">
        <a className={style.More}>More infos</a>
      </Link>
    </div>
  );
};

export default AlphaBanner;
