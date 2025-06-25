const Activities = () => {
  return (
    <section id="activities" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Cultural Activities</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-lg">
            The School of Greek Language and Culture considers the promotion of Greek Culture to its students as a vital part of their education. We regularly organize events and field trips to provide immersive cultural experiences that complement classroom learning.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Museum Visits</h3>
              <p>Students visit the Museum of Tampa which houses an impressive collection of Ancient Greek exhibits, providing a tangible connection to Greece's rich historical legacy.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Holiday Celebrations</h3>
              <p>We celebrate Christmas with traditional Greek songs, poems, a festive buffet, and presents for the children from Santa Claus, blending Greek traditions with holiday joy.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Historical Field Trips</h3>
              <p>Students journey to Saint Augustine to visit Saint Fotios, featuring exhibits of the first Greek immigrants in Florida, and the oldest wooden school in the US built by Greek immigrant Ioannis Giannopoulos over two centuries ago.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Musical Appreciation</h3>
              <p>We organize visits to the University of Tampa where Greek Professor of Music Mr. Grigoris Zambaras performs Greek and Classical music on piano, enriching students' cultural appreciation.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Tarpon Springs Excursion</h3>
              <p>Students enjoy a field trip to Tarpon Springs with a cruise on the Anclote River, followed by authentic Greek cuisine at local taverns, experiencing a vibrant Greek-American community.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Greek Independence Day</h3>
              <p>Our students proudly participate in the Parade for Greek Independence Day in Tarpon Springs each March, connecting with their heritage and the broader Greek-American community.</p>
            </div>
          </div>
          
          <div className="mt-10 bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-2">End of Year Celebration</h3>
            <p className="text-lg">
              We celebrate the conclusion of each school year with a festive party featuring a buffet, music, and games at the school yard, bringing together students, families, and staff to commemorate achievements and foster community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
