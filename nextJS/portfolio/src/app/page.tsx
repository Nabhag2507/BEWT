import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

function Homepage() {
    return (
        <div>
            <section id="home" className={styles.herosection}>
                <div className={styles.herocontent}>
                    <h1 style={{ fontSize: 35, marginBottom: 1, color: '#1a1a1a' }}>Elevate Your Brand Presence</h1>
                    <p style={{ marginBottom: 1, color: '#555'}}>We combine minimalist design with maximum impact to help your business grow in the digital age.</p>
                <Link href="/portfolio" className={styles.btnprimary}>View Our Work</Link>
        </div>
            </section >
        </div >
    )
}

export default Homepage