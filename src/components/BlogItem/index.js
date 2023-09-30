import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, title, publishedDate} = blogDetails
  return (
    <li className="list-card">
      <div className="blog-card">
        <h1 className="heading">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
