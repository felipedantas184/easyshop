const Slug = ({ params }: { params: { product: string, store: string } }) => {
  return ( 
    <div>
      <p>{params.store}</p>
      <p>{params.product}</p>
    </div>
   );
}
 
export default Slug;