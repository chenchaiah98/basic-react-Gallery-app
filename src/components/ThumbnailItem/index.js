// Write your code here.
const ThumbnailItem = props => {
  const {thumbnailitem} = props
  return (
    <li>
      <img src={thumbnailitem.thumbnailUrl} alt="" />
    </li>
  )
}
export default ThumbnailItem
