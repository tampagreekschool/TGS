const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url('/images/hero_background.png')` }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-75"></div>
      <div className="relative container mx-auto px-4 flex flex-col items-center">
        {/* SEO-optimized H1 heading - visually hidden but accessible to search engines */}
        <h1 className="sr-only">
          School of Greek Language and Culture - Tampa, Florida | Authentic Greek Education for All Ages
        </h1>
        <img 
          src="/images/tampagreekschoollogo.png" 
          alt="School of Greek Language and Culture Logo - ΣΧΟΛΕΙΟ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ ΚΑΙ ΠΟΛΙΤΙΣΜΟΥ - Tampa, Florida" 
          className="w-full md:w-1/2 mx-auto mb-8"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#registration" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
            aria-label="Register for Greek language and culture classes"
          >
            Registration
          </a>
          <a 
            href="#programs" 
            className="bg-transparent hover:bg-blue-700 border-2 border-white py-3 px-6 rounded-lg transition duration-300 text-center"
            aria-label="Explore our Greek language and culture programs"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


