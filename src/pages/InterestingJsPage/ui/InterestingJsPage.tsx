interface InterestingJsPageProps {
  className?: string;
}

export const InterestingJsPage = (props: InterestingJsPageProps) => {
  const { className } = props;
  return <div className={className}></div>;
};
