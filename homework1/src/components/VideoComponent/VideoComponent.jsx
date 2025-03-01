
const Video = () => {
    return (
        <iframe
            className="videoReact"
            width="auto"
            height='auto'
            src="https://www.youtube.com/embed/s2skans2dP4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
export default Video;