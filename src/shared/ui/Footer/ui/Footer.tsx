import styles from "./Footer.module.css";

interface FooterProps {
  className?: string;
}

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={(styles.footer, className)}>
      Created with ❤️ by Pisarev Danila.
    </footer>
  );
};
