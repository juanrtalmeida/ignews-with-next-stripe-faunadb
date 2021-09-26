import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

export function SignInButton() {
  const [session] = useSession();
  return session ? (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signOut()}
    >
      <FiX color="737380" className={styles.closeIcon} />
      {session.user.name}
      <FaGithub color="#04d361" />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      Sign in with Github
      <FaGithub color="#eba417" />
    </button>
  );
}
