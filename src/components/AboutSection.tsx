
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Users, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-hajj-accent font-medium">About Us</span>
          <h2 className="section-title">Welcome to আল মুত্তাকিন International Travels</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4">
            With years of experience and a deep understanding of Islamic heritage,
            we provide exceptional Hajj and Umrah services to pilgrims from around the world.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side image */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Kaaba during Hajj" 
                className="rounded-lg shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-hajj-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <Award className="h-12 w-12 text-hajj-accent" />
                <div>
                  <div className="text-lg font-bold text-hajj-primary">Licensed</div>
                  <div className="text-sm text-gray-600">Certified Agency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-hajj-primary mb-6">
              Your Journey to Spiritual Fulfillment Begins With Us
            </h3>
            <p className="text-gray-600 mb-8">
              At আল মুত্তাকিন International Travels, we understand the significance of Hajj and Umrah in a Muslim's life. 
              Our mission is to provide a seamless and spiritually enriching experience to all our pilgrims, allowing them 
              to focus entirely on their worship while we handle all logistics and arrangements.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-light flex items-center justify-center">
                    <Heart className="h-6 w-6 text-hajj-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Dedicated Service</h4>
                  <p className="text-gray-600">
                    We provide personalized attention to each pilgrim, ensuring their journey is comfortable and spiritually fulfilling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-light flex items-center justify-center">
                    <Users className="h-6 w-6 text-hajj-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Experienced Guides</h4>
                  <p className="text-gray-600">
                    Our multilingual guides have deep knowledge about the rituals and historical significance of holy sites.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-hajj-light flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-hajj-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-hajj-primary">Quality Accommodations</h4>
                  <p className="text-gray-600">
                    We select the best hotels and accommodations close to holy sites for maximum convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
