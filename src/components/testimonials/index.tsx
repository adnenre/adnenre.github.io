import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Jasurbek Nabijonov",
      cauntry: "Uzbekistan",
      role: "Upwork Client",
      quote:
        "Adnen completed difficult tasks on time and with the best possible result. He has great experience in solving nontrivial tasks. I would consider him if I have any future tasks first. Very talented software developer. Hope to work again the in future.",
      image: "https://www.upwork.com/profile-portraits/c1CUKzRjKh4_pw2xN6m86pdg2p7E2ffhyjsEOI4pXvd_oqqRaClMN_A0paTugDHcaK",
    },
    {
      id: 2,
      name: "Jasurbek Nabijonov",
      cauntry: "Uzbekistan",
      role: "Upwork Client",
      quote: "Adnen did a great job again, it is the second time when we worked together and he showed excellent results and performance.",
      image: "https://www.upwork.com/profile-portraits/c1CUKzRjKh4_pw2xN6m86pdg2p7E2ffhyjsEOI4pXvd_oqqRaClMN_A0paTugDHcaK",
    },
    {
      id: 3,
      name: "Steven Porter, Novomedici LLC",
      role: "CEO",
      quote: "Grat job !!",
      image: "",
    },

    {
      id: 4,
      name: "Jean-Michel Van Lippevelde, Accelior",

      role: "Upwork Client",
      quote: "Great thanks!",
      image: "https://www.upwork.com/profile-portraits/c1yEfqikd_pDU0swtvciAln_m3ezqo5Hmm7Xwby5vsJbbvcecbUwEGj7lnIcx9D6_0",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: any) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col sm:flex-row justify-between items-center gap-8">
          <h2 className="text-4xl font-bold ">Testimonials</h2>

          <div className="flex gap-4">
            <button
              onClick={goToPrev}
              className="hover:cursor-pointer group flex justify-center items-center border dark:border-indigo-600 w-12 h-12 rounded-full hover:bg-indigo-600 transition-colors "
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-indigo-600 group-hover:text-white" />
            </button>
            <button
              onClick={goToNext}
              className="hover:cursor-pointer group flex justify-center items-center border dark:border-indigo-600 w-12 h-12 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 text-indigo-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Slider container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-500 ease-in-out  " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4  ">
                <div className=" border rounded-2xl p-6  transition-all md:h-full   backdrop-blur-xs bg-gradient-to-br from-white/500  to-white/5 shadow-xl">
                  <div className="text-lg  min-h-[96px] flex flex-col">
                    <Quote />
                    <p className="px-10 text-l ">{testimonial.quote}</p>
                    <Quote className="mt-auto ml-auto" />
                  </div>
                  <div className="flex mb-6 gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 ">
                    <Avatar className="w-12 h-12 rounded-full object-cover text-center">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="w-full flex justify-center items-center text-sm">{testimonial.name}</AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-medium ">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={` cursor-pointer w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-indigo-600" : "bg-gray-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
