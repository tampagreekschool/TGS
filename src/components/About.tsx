const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">About Our School</h2>
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-lg">
            The School of Greek Language and Culture was established in 2022 with a mission to preserve and promote Hellenic heritage through comprehensive language education and cultural immersion.
          </p>
          <p className="mb-4 text-lg">
            Located at Saint John's Greek Orthodox Church in Tampa (2418 W Swann Ave), our school operates every Saturday between 1:00-3:00 pm, providing a dedicated environment for students to connect with Greek language and traditions.
          </p>
          <p className="mb-4 text-lg">
            We welcome students from 5-14 years old, offering classes for beginners, intermediate, and advanced learners. Our curriculum is designed to build a strong foundation in Greek language skills while fostering an appreciation for the rich cultural heritage of Greece.
          </p>
          <p className="mb-4 text-lg">
            Our advanced students have the opportunity to participate in the prestigious Ellinomatheia Exams, which can earn them valuable college credits and internationally recognized certification of their Greek language proficiency.
          </p>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Our Mission</h3>
            <p className="text-lg">
              To provide high-quality Greek language instruction while nurturing an appreciation for Greek culture, history, and traditions in a supportive and engaging learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
