const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url('/images/hero_background.png')` }}
    >
      <div className="absolute inset-0 bg-blue-800 opacity-75"></div>
      <div className="relative container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          School of Greek Language and Culture
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          ΣΧΟΛΕΙΟ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ ΚΑΙ ΠΟΛΙΤΙΣΜΟΥ
        </h2>
        <p className="text-xl text-center max-w-3xl mb-8">
          Preserving Hellenic heritage through language education and cultural immersion since 2022
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#registration" 
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Register Now
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


