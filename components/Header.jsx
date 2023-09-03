import React, { useState } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import logo from "../public/images/header-images/logo.svg";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

import { Inter, Mukta, Poppins } from "@next/font/google";

const mukta = Mukta({ subsets: ["latin"], weight: "200" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar((prevState) => !prevState);
    return (
        <div className={styles.headerContent}>
            <div style={inter.style} className={styles.logoName}>
                <Image className={styles.logo} src={logo} alt="logo" />
                <div className={styles.name}>QLearn</div>
            </div>

            <nav
                className={`${styles.navmenu} ${sidebar ? styles.active : ""}`}
            >
                <ul
                    onClick={() => setSidebar(false)}
                    style={poppins.style}
                    className={styles.ul}
                >
                    <li className={styles.navbartoggle}>
                        <div className={styles.close}>
                            <AiOutlineClose />
                        </div>
                    </li>
                    <li className={styles.navtext}>Home</li>
                    <li className={styles.navtext}>Teachers</li>
                    <li className={styles.navtext}>Cource</li>
                    <li className={styles.navtext}>Testimonials</li>
                    <li className={styles.signUpHidden}>Sign up</li>
                    <li className={styles.loginHidden}>Log in</li>
                </ul>
            </nav>

            <div style={poppins.style} className={styles.signupLogin}>
                <div className={styles.signup}> Sign up</div>
                <div className={styles.login}> Log in</div>
                <div
                    onClick={() => setSidebar(true)}
                    className={styles.menubar}
                >
                    <HiBars3BottomRight />
                </div>
            </div>
        </div>
    );
};

export default Header;
