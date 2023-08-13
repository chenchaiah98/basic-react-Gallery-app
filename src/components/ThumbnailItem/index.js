// Write your code here.
// import {Component} from 'react'

const ThumbnailItem = props => {
  const {thumbnailItem, onImageClickBtn} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailItem

  const onClickLiBtn = e => {
    onImageClickBtn(e.target.id)
  }
  return (
    <li>
      <button type="button">
        <img
          id={id}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickLiBtn}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
