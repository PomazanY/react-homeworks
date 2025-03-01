import "./ImageComponent.css"

const Image = () => {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'
    return (

        <>
            <img className="react" src={image} alt="react" />
        </>
    )
}
export default Image;