interface HomePageProps {
  className?: string;
}

export const HomePage = (props: HomePageProps) => {
  const { className } = props;
  return <div className={className}></div>;
};
