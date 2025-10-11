import React from "react";

// Team member interface
interface TeamMember {
   id: number;
   name: string;
   title: string;
   bio: string;
   photo: string;
   linkedin?: string;
   twitter?: string;
}

// Value interface
interface Value {
   id: number;
   title: string;
   description: string;
   icon: string;
}

const About: React.FC = () => {
   // Team data
   const teamMembers: TeamMember[] = [
      {
         id: 1,
         name: "Sarah Chen",
         title: "CEO & Founder",
         bio: "Former tech lead with 10+ years in software development. Passionate about creating solutions that matter.",
         photo: "👩‍💼",
         linkedin: "#",
         twitter: "#",
      },
      {
         id: 2,
         name: "Marcus Rodriguez",
         title: "CTO",
         bio: "Expert in cloud architecture and scalable systems. Loves mentoring and building great engineering cultures.",
         photo: "👨‍💻",
         linkedin: "#",
         twitter: "#",
      },
      {
         id: 3,
         name: "Emily Watson",
         title: "Head of Design",
         bio: "Award-winning designer focused on creating intuitive user experiences that delight customers.",
         photo: "👩‍🎨",
         linkedin: "#",
         twitter: "#",
      },
      {
         id: 4,
         name: "James Kim",
         title: "Lead Developer",
         bio: "Full-stack developer with passion for clean code and innovative solutions to complex problems.",
         photo: "👨‍🔬",
         linkedin: "#",
         twitter: "#",
      },
   ];

   // Values data
   const values: Value[] = [
      {
         id: 1,
         title: "Integrity",
         description: "We believe in transparency, honesty, and doing the right thing even when no one is watching.",
         icon: "🤝",
      },
      {
         id: 2,
         title: "Innovation",
         description: "We constantly push boundaries and embrace change to deliver cutting-edge solutions.",
         icon: "💡",
      },
      {
         id: 3,
         title: "Customer Success",
         description: "Our success is measured by our customers' achievements and satisfaction.",
         icon: "🌟",
      },
      {
         id: 4,
         title: "Sustainability",
         description: "We're committed to building a better future through environmentally conscious practices.",
         icon: "🌿",
      },
   ];

   // Milestones data
   const milestones = [
      { year: "2020", event: "Company Founded" },
      { year: "2021", event: "First 100 Customers" },
      { year: "2022", event: "Series A Funding" },
      { year: "2023", event: "International Expansion" },
      { year: "2024", event: "Product 2.0 Launch" },
   ];

   return (
      <div className="min-h-screen ">
         {/* 1. Hero Section */}
         <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div
               className="absolute inset-0 bg-cover bg-center opacity-10"
               style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3")',
               }}
            ></div>
            <div className="relative container mx-auto px-4 py-24 lg:py-32">
               <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Us</h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed">We're on a mission to make technology simpler, smarter, and better for everyone.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className=" bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">Learn More</button>
                     <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">Contact Us</button>
                  </div>
               </div>
            </div>

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
               <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path
                     d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                     opacity=".25"
                     fill="currentColor"
                  ></path>
                  <path
                     d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                     opacity=".5"
                     fill="currentColor"
                  ></path>
                  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
               </svg>
            </div>
         </section>

         {/* 2. Our Story Section */}
         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Our Journey</h2>
                  <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">How a simple idea grew into a company serving thousands worldwide</p>

                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                     <div>
                        <p className="text-lg text-gray-600 mb-6">
                           Founded in 2020, we started as a small team with a big vision: to revolutionize the way people interact with technology. Our journey began in a small garage, fueled by passion and countless cups of coffee.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                           It all started when our founder, Sarah, struggled with complex software solutions that made simple tasks complicated. She envisioned a platform that would make technology accessible to everyone, regardless of their
                           technical background.
                        </p>
                        <p className="text-lg text-gray-600">Today, we've grown into a diverse team of innovators, designers, and problem-solvers dedicated to creating solutions that make a real difference in people's lives.</p>
                     </div>
                     <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                        <div className="text-center">
                           <div className="text-6xl mb-4">🚀</div>
                           <p className="text-gray-500 text-lg">Our humble beginnings</p>
                        </div>
                     </div>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                     <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                     {milestones.map((milestone, index) => (
                        <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                           <div className="w-1/2 pr-8">
                              <div className={` p-6 rounded-lg shadow-lg border ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                 <h3 className="text-xl font-bold text-blue-600">{milestone.year}</h3>
                                 <p className="text-gray-600">{milestone.event}</p>
                              </div>
                           </div>
                           <div className="w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                           <div className="w-1/2 pl-8"></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Mission & Vision Section */}
         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Mission & Vision</h2>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className=" p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">To empower individuals and businesses with intuitive technology solutions that simplify complex tasks and drive meaningful progress.</p>
                     </div>

                     <div className=" p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="text-4xl mb-4">🔭</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">A world where technology serves as an enabler rather than a barrier, where innovation creates opportunities for all.</p>
                     </div>
                  </div>

                  <div className="mt-12  p-8 rounded-2xl shadow-lg border border-gray-100">
                     <h3 className="text-2xl font-bold text-gray-800 mb-6">What Sets Us Apart</h3>
                     <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="text-center">
                           <div className="text-3xl mb-3">✨</div>
                           <h4 className="font-semibold text-gray-800 mb-2">User-First Design</h4>
                           <p className="text-gray-600 text-sm">Every feature is designed with the end-user in mind</p>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl mb-3">⚡</div>
                           <h4 className="font-semibold text-gray-800 mb-2">Cutting-Edge Tech</h4>
                           <p className="text-gray-600 text-sm">We leverage the latest technologies for optimal performance</p>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl mb-3">🌍</div>
                           <h4 className="font-semibold text-gray-800 mb-2">Global Support</h4>
                           <p className="text-gray-600 text-sm">24/7 support for customers around the world</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Team Section */}
         <section className="py-16 ">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Meet the People Behind Our Company</h2>
                  <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">We're a small but passionate team committed to innovation and excellence.</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {teamMembers.map((member) => (
                        <div key={member.id} className=" rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                           <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-32 flex items-center justify-center">
                              <div className="text-5xl">{member.photo}</div>
                           </div>
                           <div className="p-6">
                              <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                              <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                              <div className="flex space-x-3">
                                 {member.linkedin && (
                                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                                       <span className="sr-only">LinkedIn</span>
                                       💼
                                    </a>
                                 )}
                                 {member.twitter && (
                                    <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                                       <span className="sr-only">Twitter</span>
                                       🐦
                                    </a>
                                 )}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 5. Values Section */}
         <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">What We Believe In</h2>
                  <p className="text-xl text-gray-600 text-center mb-12">Our core values guide everything we do</p>

                  <div className="grid md:grid-cols-2 gap-8">
                     {values.map((value) => (
                        <div key={value.id} className=" p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                           <div className="flex items-start space-x-4">
                              <div className="text-3xl flex-shrink-0">{value.icon}</div>
                              <div>
                                 <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 6. Behind the Scenes */}
         <section className="py-16 ">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Life at Our Company</h2>
                  <p className="text-xl text-gray-600 text-center mb-12">Get a glimpse of our culture and workspace</p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                     {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-48 flex items-center justify-center">
                           <div className="text-center text-gray-500">
                              <div className="text-4xl mb-2">📸</div>
                              <p>Office Photo {item}</p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                     <h3 className="text-2xl font-bold mb-4">Our Culture in a Nutshell</h3>
                     <p className="text-lg opacity-90 max-w-2xl mx-auto">"We believe in working hard, supporting each other, and never stopping learning. Our office is filled with collaboration, laughter, and the occasional ping pong tournament."</p>
                  </div>
               </div>
            </div>
         </section>

         {/* 7. CTA Section */}
         <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Ready to join our mission or have a project in mind? We'd love to hear from you.</p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                     <button className=" text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">Get in Touch</button>
                     <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">Join Our Team</button>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                     <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                     <p className="mb-6 opacity-90">Subscribe to our newsletter for the latest updates and insights</p>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <button className=" text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Subscribe</button>
                     </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-6 mt-8">
                     {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social) => (
                        <a key={social} href="#" className="text-white hover:text-blue-200 transition-colors">
                           {social}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;
