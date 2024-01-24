import { ReviewCard } from "../Components"
import { reviews } from "../Constants"


export const CustomerReviews = () => {
  return (
   <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold"> What Our 
        <span> Customer </span>
        Say's?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Here are some reviews from our customers who have had the pleasure of trying out our products.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <ReviewCard 
              key={review.customerName}
              imgURL = {review.imgURL}
              customerName = {review.customerName}
              raing = {review.rating}
              feedback = {review.feedback}
            />
          ))}
      </div>
   </section>
  )
}
