import Image from 'next/image'
import styles from './page.module.css'
import LeftSide from './form'

export default function Page() {
      return (
        <div className={styles.container}>
            <Image>
                <title>Waitlist</title>
                <meta name="description" content="A quick, scalable waitlist"/>
                <link rel="icon" href="/favicon.ico"/>
            </Image>

            // New components
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

// These functions can be moved into their own files

function RightSide() {
    return <div className={styles.column}>
        <img width="100%" height="100%" src="/code.svg"/>
    </div>
}
  
