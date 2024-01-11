import React from 'react'
import styles from './Footer.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.contentFooter}>
            <div className={styles.contentSocial}>
                <div className={styles.contentIcons} style={{fontSize: '1.5em'}}>
                    <a className={styles.social} id={styles.Instagram} href='https://www.instagram.com/lfndevs/'><FaInstagram /></a>
                    <a className={styles.social} href='https://music.youtube.com/watch?v=SNiInqEFdQk&list=RDATiYvHgLfYfJtc8M'><FaTwitter/></a>
                    <a className={styles.social} href='#'><FaFacebook /></a>
                    <a className={styles.social} href='#'><FaLinkedin /></a>
                </div>
            </div>
            <div className={styles.rights}>
                <h5 className={styles.h5}>&copy; Todos los derechos reservados LFNdevs</h5>
            </div>
        </div>

    )
}

export default Footer
