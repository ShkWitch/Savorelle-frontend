import React from 'react';
import { Link } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react";
import styles from './style.module.css';

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Link to="/">Savorelle</Link>
                </div>
                <ul className={styles.social}>
                <FormLabel>Follow us</FormLabel>
                    <Link to='/'>INSTAGRAM</Link>
                    <Link to='/'>FACEBOOK</Link>
                </ul>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/products">PRODUCTS</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <p className={styles.legalLinks}>
                    Privacy Policy<br />
                    Public Offering Agreement
                </p>
               <p className={styles.copyrightInfo}>
                    2024 Savorelle<br />
                    © All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;