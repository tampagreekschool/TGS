const Registration = () => {
  return (
    <section id="registration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Registration Information</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">2025-2026 School Year</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Start Date</h4>
                <p className="text-lg">Saturday, September 13th, 2025</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Registration</h4>
                <p className="text-lg">Register for the class in person at 12pm on the first Saturday of the course, as well as any other Saturday throughout the year.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Class Schedule</h3>
            <p className="text-lg mb-2">
              <span className="font-semibold">Days:</span> Every Saturday
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Time:</span> 1:00 PM - 3:00 PM
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span> Saint John's Greek Orthodox Church (2418 W Swann Ave, Tampa)
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-700 mb-4">Enrollment Information</h3>
            <p className="mb-4">
              The School of Greek Language and Culture accepts students from 5-14 years old. Classes are available for beginners, intermediate, and advanced students.
            </p>
            <div className="bg-white p-4 rounded-lg border border-blue-200 mt-4">
              <h4 className="font-bold text-blue-800 mb-2">Contact for Information</h4>
              <p><span className="font-semibold">Director:</span> Mr. Yannis Giavaras</p>
              <p><span className="font-semibold">Telephone:</span> 718-419-4413</p>
              <p><span className="font-semibold">Email:</span> igiavaras@gmail.com</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Us for More Information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
