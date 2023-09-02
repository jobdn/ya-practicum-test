interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  className?: string;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { className, ...otherProps } = props;
  return <video className={className} {...otherProps}></video>;
};
