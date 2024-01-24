import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../Components"

const SpecialOffer = () => {
  return (
      <section className="flex justifu-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img src={offer} width={773} height={687} className="object-contain w-full" />
        </div>
        <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
             
          <span className='text-coral-red inline-block mt-3' > Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          We offer premier selections of incredible savings, with unparalleled value
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate through the ocean of possibilities to fulfull your desire. Your journey with us is nothing short of excepions!!</p>
        <div className="mt-11 flex flex-wrap gap-4">
        {<Button label='OrderNOW' iconURL={arrowRight} />}
        {<Button label='Learn More' backgroundColor="bg-white" borderColor="border-slate-gray" text-color="text-slate-500"/>}
        </div>
        </div>
      </section>
    )
}

export default SpecialOffer