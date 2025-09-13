export default function SocialLogins({
  onFacebook = () => {},
  onLinkedIn = () => {},
  onGitHub = () => {},
  onGoogle = () => {},
}) {
  return (
    <div className="socials">
      <button
        type="button"
        className="social fb"
        aria-label="Continue with Facebook"
        onClick={onFacebook}
      >
        <img src="/icons/light/facebook_icon_512.png" alt="Facebook" />
      </button>
      <button
        type="button"
        className="social li"
        aria-label="Continue with LinkedIn"
        onClick={onLinkedIn}
      >
        <img src="/icons/light/linkedin_icon_512.png" alt="LinkedIn" />
      </button>
      <button
        type="button"
        className="social gh"
        aria-label="Continue with GitHub"
        onClick={onGitHub}
      >
        <img src="/icons/light/github_icon_512.png" alt="GitHub" />
      </button>
      <button
        type="button"
        className="social gg"
        aria-label="Continue with Google"
        onClick={onGoogle}
      >
        <img src="/icons/light/google_icon_512.png" alt="Google" />
      </button>
    </div>
  );
}
