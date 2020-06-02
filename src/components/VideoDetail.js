import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div class="ui active dimmer">
        <div class="ui big text loader">Please Wait..</div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed" style={{ marginTop: 25 }}>
        <iframe
          title="video player"
          src={videoSrc}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
      <div
        className="ui segment "
        style={{ backgroundColor: "#282828", color: "#fff" }}
      >
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
