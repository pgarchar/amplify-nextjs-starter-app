'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import { uploadToS3 } from './s3uploader';

Amplify.configure(config);

const HeadElement: React.FC = () => (
  <head>
    <title>Waitlist</title>
    <meta name="description" content="A quick, scalable waitlist" />
    <link rel="icon" href="/favicon.ico" />
  </head>
);

const LeftSide: React.FC = () => (
  <div className={styles.column}>
    <img width="154" height="27" src="/logo.svg" alt="Logo" />
    <h1 className={styles.title}>
      Quick Scalable<br />
      <span className={styles.titleKeyword}>Waitlist</span>
    </h1>
    <div className={styles.subtitle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua.
    </div>
    <Form />
  </div>
);

const RightSide: React.FC = () => (
  <div className={styles.column}>
    <img width="100%" height="100%" src="/code.svg" alt="Code" />
  </div>
);

function Form() {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setHasSubmitted(true);
        await uploadToS3({
          key: 'example.json',
          data: { email, otherData: 'value' },
        });
      } else {
        setError(await response.text());
      }
    } catch (error) {
      setError("An error occurred while submitting the form.");
    }
  };

  const thankYouMessage = (
    <div className={styles.formWrapper}>
      <span className={styles.subtitle}>
        Thanks for signing up! We will be in touch soon.
      </span>
    </div>
  );

  return (
    <form className={styles.formWrapper} onSubmit={submit}>
      <input
        type="email"
        required
        placeholder="Email"
        className={[styles.formInput, styles.formTextInput].join(" ")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className={[styles.formInput, styles.formSubmitButton].join(" ")}
      >
        Join Waitlist
      </button>
      {hasSubmitted ? thankYouMessage : null}
      {error ? <div className={styles.error}>{error}</div> : null}
    </form>
  );
}

const Page: React.FC = () => (
  <div className={styles.container}>
    <HeadElement />
    <LeftSide />
    <RightSide />
  </div>
);

export default Page;

