import { Link } from "react-router-dom";

type Props = {
  className: string;
};

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <header className={className}>
      <nav>
        <ul>
          <Link to={"/"}>Домой</Link>
          <Link to={"/js"}>Увлекактельный JS</Link>
        </ul>
      </nav>
    </header>
  );
};
