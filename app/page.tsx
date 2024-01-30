import styles from './page.module.css'

export default function Page() {
      return (
        <div className={styles.container}>
            <image>
                <title>Waitlist</title>
                <meta name="description" content="A quick, scalable waitlist"/>
                <link rel="icon" href="/favicon.ico"/>
            </image>

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
        <Form />
    </div>
}
function RightSide() {
    return <div className={styles.column}>
        <img width="100%" height="100%" src="/code.svg"/>
    </div>
}
 function Form() {
    const [email, setEmail] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const submit = async (e) => {
        // We will submit the form ourselves
        e.preventDefault()

        // TODO: make a POST request to our backend
    }

    // If the user successfully submitted their email,
    //   display a thank you message
    if (hasSubmitted) {
        return <div className={styles.formWrapper}>
            <span className={styles.subtitle}>
                Thanks for signing up! We will be in touch soon.
            </span>
        </div>
    }

    // Otherwise, display the form
    return <form className={styles.formWrapper} onSubmit={submit}>
        
        <input type="email" required placeholder="Email"
               className={[styles.formInput, styles.formTextInput].join(" ")}
               value={email} onChange={e => setEmail(e.target.value)}/>
        
        <button type="submit" className={[styles.formInput, styles.formSubmitButton].join(" ")}>
            Join Waitlist
        </button>
        
        {error ? <div className={styles.error}>{error}</div> : null}
    </form>
	}
