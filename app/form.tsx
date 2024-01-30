// import Image from 'next/image'
import styles from './page.module.css';

export default function LeftSide{
    return <div className={styles.column}>
        {/* same as before */}
        <Form />
    </div>
}

export function Form() {
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
