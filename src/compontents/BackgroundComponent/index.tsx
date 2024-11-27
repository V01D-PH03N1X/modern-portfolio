import React from 'react';
import styles from './BackgroundComponent.module.sass';

const starCount = 50;

export default function BackgroundComponent(): React.ReactElement {
        return (
            <div className={styles.stars}>
                    {Array.from({ length: starCount }).map((_, index) => (
                        <div key={index} className={styles.star}></div>
                    ))}
            </div>
        );
}
