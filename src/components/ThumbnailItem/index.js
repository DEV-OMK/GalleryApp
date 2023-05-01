// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeSelectedImage, isSelected} = props
  const {thumbnailAltText, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    changeSelectedImage(imageDetails)
  }

  const selectedClassName = isSelected ? 'focus' : ''

  return (
    <li className="thumbnail-image-container">
      <button
        type="button"
        onClick={onClickThumbnail}
        className={`button ${selectedClassName}`}
      >
        <img className="thumbnail" src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
