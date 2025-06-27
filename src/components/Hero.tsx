const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url('/images/hero_background.png')` }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-75"></div>
      <div className="relative container mx-auto px-4 flex flex-col items-center">
        <img 
          src="/images/tampagreekschoollogo.png" 
          alt="School of Greek Language and Culture Logo" 
          className="w-full md:w-1/2 mx-auto mb-8"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#registration" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Registration
          </a>
          <a 
            href="#programs" 
            className="bg-transparent hover:bg-blue-700 border-2 border-white py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


