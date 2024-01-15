import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const emailAddress = "kaleighfeder@gmail.com"; // Replace with your email address

  // Function to generate the email link
  const generateEmailLink = () => {
    const subject = "Hello"; // You can customize the email subject
    const body = "I'd like to get in touch with you."; // You can customize the email body
    return `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className=" bottom-0 font-mono bg-blur bg-contain">
      <div>
        <IconButton
          size="medium"
          href={"https://github.com/kalefed"}
          target="_blank"
          rel="noopener"
          style={{ color: "#759dc5" }}
        >
          <GitHubIcon fontSize="medium" />
        </IconButton>
        <IconButton
          size="medium"
          href={"https://www.linkedin.com/in/kaleighfeder/"}
          target="_blank"
          rel="noopener"
          style={{ color: "#759dc5" }}
        >
          <LinkedInIcon fontSize="medium" />
        </IconButton>
        <IconButton
          size="medium"
          href={generateEmailLink()}
          target="_blank"
          rel="noopener"
          style={{ color: "#759dc5" }}
        >
          <EmailIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}
