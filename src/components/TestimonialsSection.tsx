
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mohammed Rahman",
      location: "Dhaka, Bangladesh",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Alhamdulillah, our Hajj journey with আল মুত্তাকিন International Travels was truly blessed. The arrangements were perfect, from accommodations to transportation. The spiritual guidance provided by their scholars enriched our experience enormously."
    },
    {
      id: 2,
      name: "Fatima Ahmed",
      location: "Chittagong, Bangladesh",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "As a woman traveling with my elderly mother, I was concerned about comfort and safety. The team at আল মুত্তাকিন went above and beyond to ensure we had a smooth and spiritually fulfilling Hajj experience. Their female guides were especially helpful."
    },
    {
      id: 3,
      name: "Abdullah Khan",
      location: "Sylhet, Bangladesh",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 5,
      text: "This was my first Umrah, and I was nervous about the procedures and rituals. The team provided excellent pre-departure training and on-site guidance. The accommodations were close to Haram, making it convenient for prayers."
    },
    {
      id: 4,
      name: "Aisha Begum",
      location: "Rajshahi, Bangladesh",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 4,
      text: "Our family of five performed Umrah with আল মুত্তাকিন, and it was a beautiful experience. The family-friendly accommodations and considerate scheduling made it easy for us to manage with our children. We'll definitely choose them again for Hajj."
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-hajj-primary text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hajj-accent font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Pilgrims Say
          </h2>
          <p className="max-w-3xl mx-auto text-white/80">
            Hear from those who have experienced our services and completed their sacred journeys with us.
          </p>
        </div>

        <div 
          ref={ref}
          className={`relative max-w-4xl mx-auto transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Testimonial Card */}
          <div className="glass-card p-8 md:p-10 relative z-10">
            <div className="flex items-center mb-6">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-hajj-accent"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{testimonials[activeIndex].name}</h3>
                <p className="text-white/70 text-sm">{testimonials[activeIndex].location}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonials[activeIndex].rating ? 'text-hajj-accent fill-hajj-accent' : 'text-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <blockquote className="text-lg italic mb-6">
              "{testimonials[activeIndex].text}"
            </blockquote>
            
            <div className="flex justify-between items-center">
              <p className="text-white/70 text-sm">
                {activeIndex + 1} of {testimonials.length} testimonials
              </p>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full border-white/20 text-white hover:bg-white/10"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-full border-white/20 text-white hover:bg-white/10"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-hajj-accent/20 animate-rotate-slow"></div>
          <div className="absolute bottom-10 -right-10 w-32 h-32 rounded-full bg-hajj-accent/10 animate-rotate-slow"></div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-hajj-accent w-6' : 'bg-white/30'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
