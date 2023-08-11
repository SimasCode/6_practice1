export default function SingleProduct(props) {
  const { title, description, price, thumbnail } = props.item;
  return (
    <li className='singleProduct'>
      <img className='product-image' src={thumbnail} alt='product image' />
      <div className='product-text-container'>
        <h2 className='product-title'>{title}</h2>
        <p className='product-description'>{description}</p>
        <p className='product-price blink'>${price}.00</p>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </li>
  );
}
