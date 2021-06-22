import './Picture.css'

const Picture = (props) => {
    return (
        <img
            src={props.pictureData.url}
            alt={props.pictureData.title}
            className="pic"
        />
    );
}

export default Picture;