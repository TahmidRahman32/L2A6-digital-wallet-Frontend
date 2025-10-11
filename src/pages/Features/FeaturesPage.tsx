import React from "react";

// Feature interface
interface Feature {
   id: number;
   name: string;
   description: string;
   icon: string;
   color: string;
}

// Advanced feature interface
interface AdvancedFeature {
   id: number;
   name: string;
   description: string;
   icon: string;
}

// Testimonial interface
interface Testimonial {
   id: number;
   name: string;
   role: string;
   company: string;
   content: string;
   rating: number;
}

const FeaturesPage: React.FC = () => {
   // Core features data
   const coreFeatures: Feature[] = [
      {
         id: 1,
         name: "Fast Performance",
         description: "Experience lightning-fast load times and optimized workflows that boost productivity.",
         icon: "⚡",
         color: "from-yellow-400 to-orange-500",
      },
      {
         id: 2,
         name: "Secure by Design",
         description: "Built with advanced encryption and security protocols to keep your data completely safe.",
         icon: "🔒",
         color: "from-green-400 to-blue-500",
      },
      {
         id: 3,
         name: "Cloud Sync",
         description: "Access your files anywhere, anytime, on any device with seamless cloud synchronization.",
         icon: "☁️",
         color: "from-blue-400 to-purple-500",
      },
      {
         id: 4,
         name: "Collaboration Tools",
         description: "Work seamlessly with your team in real time with advanced collaboration features.",
         icon: "🤝",
         color: "from-purple-400 to-pink-500",
      },
      {
         id: 5,
         name: "Smart Analytics",
         description: "Get deep insights with powerful analytics and customizable reporting dashboards.",
         icon: "📊",
         color: "from-indigo-400 to-blue-500",
      },
      {
         id: 6,
         name: "24/7 Support",
         description: "Round-the-clock customer support with expert assistance whenever you need it.",
         icon: "🎧",
         color: "from-pink-400 to-red-500",
      },
   ];

   // Advanced features data
   const advancedFeatures: AdvancedFeature[] = [
      {
         id: 1,
         name: "API Integration",
         description: "Connect with your favorite tools and services through our robust API.",
         icon: "🔌",
      },
      {
         id: 2,
         name: "Custom Reports",
         description: "Generate tailored reports with drag-and-drop customization.",
         icon: "📈",
      },
      {
         id: 3,
         name: "Offline Mode",
         description: "Continue working seamlessly even without internet connection.",
         icon: "📱",
      },
      {
         id: 4,
         name: "Multi-Language",
         description: "Full support for 15+ languages with automatic translation.",
         icon: "🌐",
      },
      {
         id: 5,
         name: "Automated Backups",
         description: "Automatic daily backups to ensure your data is always safe.",
         icon: "💾",
      },
      {
         id: 6,
         name: "Custom Branding",
         description: "White-label solutions with your company's branding.",
         icon: "🎨",
      },
   ];

   // Testimonials data
   const testimonials: Testimonial[] = [
      {
         id: 1,
         name: "Alex Johnson",
         role: "CTO",
         company: "TechFlow Inc.",
         content: "This platform has revolutionized our workflow. The collaboration features alone saved us 20+ hours per week.",
         rating: 5,
      },
      {
         id: 2,
         name: "Sarah Chen",
         role: "Product Manager",
         company: "InnovateCo",
         content: "The analytics dashboard provides insights we never had before. It's like having a data scientist on the team.",
         rating: 5,
      },
      {
         id: 3,
         name: "Marcus Rodriguez",
         role: "Team Lead",
         company: "Global Solutions",
         content: "Security was our top concern, and this platform exceeded all our expectations. Truly enterprise-grade.",
         rating: 4,
      },
   ];

   // Render star ratings
   const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
         <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
         </span>
      ));
   };

   return (
      <div className="min-h-screen ">
         {/* 1. Hero Section */}
         <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pb-16">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative container mx-auto px-4 py-24 lg:py-32">
               <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Powerful Features Built for You</h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">Everything you need to simplify your workflow, boost productivity, and grow faster.</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">Get Started Free</button>
                     <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">Watch Demo</button>
                  </div>
               </div>
            </div>

            {/* Hero Visual */}
            <div className="relative container mx-auto px-4 -mt-20">
               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-64 flex items-center justify-center">
                     <div className="text-center text-white">
                        <div className="text-4xl mb-4">💻</div>
                        <p className="text-xl font-semibold">Product Dashboard Mockup</p>
                        <p className="text-gray-300 mt-2">See how our features work together seamlessly</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Wave decoration */}
            <div className="absolute -bottom-2 z-50 left-0 right-0">
               <svg className="w-full h-16 text-blue-500" viewBox="0 0 1200 120" preserveAspectRatio="none">
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

         {/* 2. Core Features Section */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Makes Us Different</h2>
                     <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the powerful features designed to transform how you work and collaborate</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {coreFeatures.map((feature) => (
                        <div key={feature.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                           <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>{feature.icon}</div>
                           <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.name}</h3>
                           <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                           <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                              Learn more
                              <span className="ml-1">→</span>
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Visual Feature Highlights */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">See It in Action</h2>

                  {/* Feature 1 */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                     <div className="order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
                           <div className="bg-white rounded-xl p-8 h-80 flex items-center justify-center">
                              <div className="text-center">
                                 <div className="text-6xl mb-4">📊</div>
                                 <p className="text-gray-500 font-semibold">Analytics Dashboard</p>
                                 <p className="text-gray-400 text-sm mt-2">Real-time data visualization</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Advanced Analytics Dashboard</h3>
                        <p className="text-lg text-gray-600 mb-6">Get instant insights with our powerful analytics dashboard. Track performance, monitor key metrics, and make data-driven decisions with beautiful, interactive charts.</p>
                        <ul className="space-y-3">
                           {["Real-time data updates", "Customizable widgets", "Export to PDF/Excel", "Team performance tracking"].map((item, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                 <span className="text-green-500 mr-3">✓</span>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Real-time Collaboration</h3>
                        <p className="text-lg text-gray-600 mb-6">Work together seamlessly with your team. See changes in real-time, comment directly on projects, and never miss a beat with instant notifications.</p>
                        <ul className="space-y-3">
                           {["Live editing", "Comment threads", "@mentions", "Version history"].map((item, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                 <span className="text-green-500 mr-3">✓</span>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div>
                        <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-1 shadow-2xl">
                           <div className="bg-white rounded-xl p-8 h-80 flex items-center justify-center">
                              <div className="text-center">
                                 <div className="text-6xl mb-4">👥</div>
                                 <p className="text-gray-500 font-semibold">Team Collaboration</p>
                                 <p className="text-gray-400 text-sm mt-2">Real-time editing and comments</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. Advanced Features Section */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">More to Love</h2>
                     <p className="text-xl text-gray-600">Additional features that make our platform even more powerful</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {advancedFeatures.map((feature) => (
                        <div key={feature.id} className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg border border-gray-100 transition-all duration-300">
                           <div className="text-3xl mb-4">{feature.icon}</div>
                           <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.name}</h3>
                           <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 5. Testimonials Section */}
         <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
               <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Trusted by Professionals</h2>
                  <p className="text-xl text-gray-600 text-center mb-12">See what our customers have to say about their experience</p>

                  <div className="grid md:grid-cols-3 gap-8">
                     {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6">
                           <div className="flex items-center mb-4">
                              <div className="text-2xl mr-3">{renderStars(testimonial.rating)}</div>
                           </div>
                           <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                           <div className="flex items-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">{testimonial.name.charAt(0)}</div>
                              <div>
                                 <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                 <p className="text-gray-600 text-sm">
                                    {testimonial.role}, {testimonial.company}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Client Logos */}
                  <div className="mt-16 text-center">
                     <p className="text-gray-600 mb-8">Trusted by companies worldwide</p>
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
                        {["TechCorp", "InnovateCo", "GlobalSoft", "NextGen", "FutureInc", "SmartSolutions"].map((company) => (
                           <div key={company} className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="text-gray-400 font-semibold text-center">{company}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. CTA Section */}
         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="container mx-auto px-4">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Power?</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join thousands of professionals who are already transforming their workflow with our powerful features.</p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                     <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">Get Started Free</button>
                     <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">Contact Sales</button>
                     <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-lg">Try Demo</button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                     <h3 className="text-xl font-semibold mb-4">Start your free 14-day trial</h3>
                     <p className="opacity-90 mb-4">No credit card required • All features included</p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input type="email" placeholder="Enter your work email" className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">Start Free Trial</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default FeaturesPage;
