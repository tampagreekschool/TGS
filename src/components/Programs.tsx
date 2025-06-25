const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Our Programs</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Greek Language Classes</h3>
            <p className="mb-4 text-lg">
              We offer comprehensive Greek language instruction for students aged 5-14 years old, with classes tailored to different proficiency levels:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-400">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Beginners</h4>
                <p>Introduction to the Greek alphabet, basic vocabulary, simple phrases, and cultural concepts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Intermediate</h4>
                <p>Expanded vocabulary, grammar structures, reading comprehension, and conversational skills.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Advanced</h4>
                <p>Complex grammar, extensive vocabulary, literature appreciation, and preparation for Ellinomatheia exams.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Ellinomatheia Certificate Program</h3>
            <p className="mb-4 text-lg">
              Our advanced students participate in the prestigious Ellinomatheia Exams organized by the University of Thessaloniki, Greece. These exams take place at Plato Academy in Clearwater.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mt-4">
              <h4 className="text-xl font-bold text-blue-800 mb-2">Certificate Levels and Benefits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Six levels available (A1, A2, B1, B2, C1, C2) according to international standards</li>
                <li>A2 Certificate provides three (3) college credits in foreign language</li>
                <li>B1, B2, C1 & C2 levels provide five (5) college credits in foreign language</li>
                <li>Our students have achieved 100% success rate for two consecutive years</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
