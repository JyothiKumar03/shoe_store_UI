import { PopularProductsCard } from "../Components/index"
import { products } from "../Constants"

const PopularProduct = () => {
  return (
    <section id='products' className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
        <p className="lg: max0w0lg mt-2 font-montserrat text-slate-gray">Discover a world of comfort, design & value</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm: gap-4 gap-14">
        {products.map((product)=>(
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProduct