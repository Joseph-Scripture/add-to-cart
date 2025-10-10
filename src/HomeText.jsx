export default function HomeText() {
  return (
    <div className='text'>
      <h1>Welcome To supreme shopping</h1>
      <p className = 'paragraph'  style = {{
        color:'navy'
      }}>Where taste meets inspiration and unique designs</p>
      <Link to = "/products" className = 'action'>Shop Now &#8594;</Link>
    </div>
  )
}