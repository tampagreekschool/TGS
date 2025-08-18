const Staff = () => {
  return (
    <section id="staff" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Our Staff</h2>
        
        {/* Yannis Giavaras */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/3">
            <img 
              src="/images/director_photo.jpeg" 
              alt="Mr. Yannis Giavaras Photo" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Mr. Yannis Giavaras</h3>
            <p className="mb-4">
              Mr. Yannis Giavaras serves as both a teacher and the director of the School of Greek Language and Culture. With 35 years of teaching experience, he brings exceptional expertise and passion to our educational community.
            </p>
            
            <h4 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Professional Background</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>He graduated from Pedagogical Academy of Lamia and from Pedagogical Department of the University of Ioannina.</li>
              <li>He served as a teacher in public education in Greece (1990-2008).</li>
              <li>He taught Greek language in Holy Cross Parochial School of Brooklyn, New York (2008-2014).</li>
              <li>Currently teaches at Plato Academy Charter Schools</li>
              <li>Instructor at Holy Trinity Clearwater</li>
              <li>Instructor at Saint Sophia Winter Heaven</li>
              <li>Former member of the writing team of Greek Archdiocese of America</li>
              <li>Co-author of educational books including "Ta Ellinika mou," "Greek History," and "Greek Mythology"</li>
            </ul>
            
            <h4 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Artistic Contributions</h4>
            <p>
              Beyond his educational career, Mr. Giavaras is an accomplished lyricist whose songs have been performed by renowned Greek singers including Dimitris Mitropanos, Vicky Moschliou, Vasilis Lekkas, Fotini Darra, and others.  In 2022, he published a book with his lyrics under the title “Stis Ohthes Ton Oniron.”
            </p>
          </div>
        </div>

        {/* Aikaterini Nakou */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/3">
            <img 
              src="/images/aikaterini_nakou_photo.jpeg" 
              alt="Mrs. Aikaterini Nakou Photo" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Mrs. Aikaterini Nakou</h3>
            <p className="mb-4">
              Mrs. Aikaterini Nakou is an accomplished educator with over two decades of experience teaching Greek language and culture in Greece, Canada, and the United States. She is a graduate of the School of Greek History and Language at the Aristotle University of Thessaloniki in Greece. Her diverse teaching background includes roles at the Greek School of Tampa, Plato Academy, École Primaire Socrates III in Montreal, and several Greek Orthodox schools across Florida, Michigan, Ohio and Pennsylvania. In Greece, she taught high school students both Ancient and Modern Greek language and history at private and public institutions. She holds a Master’s in Education and has participated in advanced training, including a seminar at Panteion University in Athens on “Teaching Greek as a Second Language”. Certified to teach in both Greece and the U.S., Mrs. Nakou brings a deep understanding of classical education and bilingual instruction to every classroom. Her longstanding commitment to Greek education and her ability to engage students of all ages make her a valued member of our teaching staff.
            </p>
          </div>
        </div>

        {/* Chrisa Kapnogiannis */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/3">
            <img 
              src="/images/chrisa_kapnogiannis_photo.jpeg" 
              alt="Mrs. Chrisa Kapnogiannis Photo" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Mrs. Chrisa Kapnogiannis</h3>
            <p className="mb-4">
              Mrs. Chrisa Kapnogiannis is a teacher of Greek Language since 2014.
              She has a Child Development Associate from the University of Pennsylvania.
              Also, she has ACTFL in Greek Language.
              She teaches at Plato Academy Charter Schools from Kindergarten to 5th Grade.
              Also, she teaches Greek Language and Culture at Holy Trinity Greek Afternoon School of Clearwater and at Saint Sophia’s Greek School in Winter Haven.
              She is a teacher with love and caring for children
              and she inspires the Greek culture to her students!
            </p>
          </div>
        </div>

        {/* Dr. Dimitra Keramisanou */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/3">
            <img 
              src="/images/dimitra_keramisanou_photo.jpeg" 
              alt="Dr. Dimitra Keramisanou Photo" 
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Dr. Dimitra Keramisanou</h3>
            <p className="mb-4">
              Dr. Dimitra Keramisanou is a Chemist by training that has been in the upper education for over 15 years. After receiving her Bachelor’s and Master’s degree in Greece at the University of Ioannina, she moved to the USA for her PhD studies at Rutgers University, New Jersey. She then joined the Chemistry Department at the University of South Florida in 2012, as a Research Associate, where she teaches Biochemistry and conducts research in the same field. Throughout these years she has been directly working with students in a classroom setting, gaining valuable teaching experience.
            </p>
            <p>
              Her passion and love for Greek language and culture motivates her to join our team with the goal of transferring these values to young students. She is excited to guide and help children learn the Greek language and become familiar with Greek history and culture.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Staff;
