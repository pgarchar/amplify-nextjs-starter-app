import Head from 'next/head'
import styles from './page.module.css'

export default function page() {
      return (
        <div className={styles.container}>
            <Head>
                <title>Waitlist</title>
                <meta name="description" content="A quick, scalable waitlist"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            // New components
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

// These functions can be moved into their own files
function LeftSide() {
    return <div className={styles.column}>
        <img width="154" height="27" src="/logo.svg"/>
        <h1 className={styles.title}>
            Quick Scalable<br/>
            <span className={styles.titleKeyword}>Waitlist</span>
        </h1>
        <div className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
        </div>
    </div>
}

function RightSide() {
    return <div className={styles.column}>
        <img width="100%" height="100%" src="/code.svg"/>
    </div>
}
  
