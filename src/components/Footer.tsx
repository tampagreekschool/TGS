const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">School of Greek Language and Culture</h3>
            <p className="text-sm">ΣΧΟΛΕΙΟ ΕΛΛΗΝΙΚΗΣ ΓΛΩΣΣΑΣ ΚΑΙ ΠΟΛΙΤΙΣΜΟΥ</p>
            <p className="mt-2">Saint John's Greek Orthodox Church</p>
            <p>2418 W Swann Ave, Tampa</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p>Director: Mr. Yannis Giavaras</p>
            <p>Tel: 718 419 4413</p>
            <p>Email: igiavaras@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Hours</h3>
            <p>Every Saturday</p>
            <p>1:00 PM - 3:00 PM</p>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-6 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} School of Greek Language and Culture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
