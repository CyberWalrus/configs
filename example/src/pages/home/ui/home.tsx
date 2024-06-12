/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useState } from 'react';

import { getImageUrl } from '$shared/lib/helpers';

import reactLogo from '../assets/react.svg';

import styles from './home.module.scss';

export const Home = () => {
    const [count, setCount] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const test = getImageUrl('/test');

    return (
        <>
            <div>
                <a
                    href='https://vitejs.dev'
                    rel='noreferrer'
                    target='_blank'
                >
                    <img
                        alt='Vite logo'
                        className={styles.logo}
                        src={getImageUrl('vite.svg')}
                    />
                </a>
                <a
                    href='https://react.dev'
                    rel='noreferrer'
                    target='_blank'
                >
                    <img
                        alt='React logo'
                        className={styles.logo}
                        src={reactLogo}
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className={styles.card}>
                <button
                    onClick={() => setCount((value) => value + 1)}
                    type='button'
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
        </>
    );
};
