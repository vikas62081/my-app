const VideoPlayer = ({
  link,
  width = 550,
  height = 300,
  allowFullScreen = false,
  style = {},
}) => {
  const getVideoIdFromUrl = (url) => new URL(link).searchParams.get("v");
  const EMBED_LINK = `https://www.youtube.com/embed/${getVideoIdFromUrl(link)}`;
  return (
    <>
      <iframe
        title="youtube-video-player"
        width={width}
        height={height}
        frameBorder="0"
        src={EMBED_LINK}
        allowFullScreen={allowFullScreen}
        style={{ borderRadius: 10, ...style }}
      ></iframe>
    </>
  );
};

export default VideoPlayer;
