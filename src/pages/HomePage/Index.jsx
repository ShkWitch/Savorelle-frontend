import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.left}>
                    <div className={styles.backgroundContainer}>
                        <div className={styles.textcontainer}>
                            <h1 className={styles.heading} >Inspired by beauty, perfected in knowledge</h1>
                            <p className={styles.paragraph} >
                                From ultra-modern and trendy designs to classically elegant solutions, each of our meticulously crafted bags embodies a distinctive character and serves as a reflection of the individual style of every customer. Our diverse collection features a range of exquisite materials, exquisite craftsmanship, and attention to detail, ensuring that every piece exudes sophistication and timeless allure.
                            </p>
                        </div>
                    </div>
                    <div className={styles.productLinks}>
                        <div className={`${styles.productLink} ${styles.productLinkOne}`}>
                            <a href="/product/664bb492485a751e98f81a41">
                                Medium Tote Bag
                            </a>
                        </div>
                        <div className={`${styles.productLink} ${styles.productLinkTwo}`}>
                            <a href="/product/665c738e22a5841284c7ab16">
                             Mini Saddle Bag with Strap
                            </a>
                        </div>
                    </div>
                </div>
                <img src="/savorellehome.jpg" className={styles.imghome} alt="Home" />
            </div>
        </div>
    );
}
