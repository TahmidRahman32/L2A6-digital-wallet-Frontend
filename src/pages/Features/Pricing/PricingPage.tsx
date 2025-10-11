import React, { useState } from "react";

// Pricing plan interface
interface PricingPlan {
   id: number;
   name: string;
   description: string;
   monthlyPrice: number;
   yearlyPrice: number;
   features: string[];
   ctaText: string;
   popular?: boolean;
   color: string;
}

// FAQ interface
interface FAQ {
   id: number;
   question: string;
   answer: string;
}

const PricingPage: React.FC = () => {
   const [isYearly, setIsYearly] = useState(false);
   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

   // Pricing plans data
   const pricingPlans: PricingPlan[] = [
      {
         id: 1,
         name: "Basic",
         description: "Perfect for individuals and small projects",
         monthlyPrice: 9,
         yearlyPrice: 90,
         features: ["Up to 5 projects", "Basic analytics", "1GB storage", "Email support", "Standard security", "Mobile app access", "Basic templates"],
         ctaText: "Get Started",
         color: "from-blue-500 to-blue-600",
      },
      {
         id: 2,
         name: "Pro",
         description: "Best for growing teams and businesses",
         monthlyPrice: 29,
         yearlyPrice: 290,
         features: ["Unlimited projects", "Advanced analytics", "50GB storage", "Priority support", "Advanced security", "Team collaboration", "Custom templates", "API access", "Export capabilities"],
         ctaText: "Try Free for 14 Days",
         popular: true,
         color: "from-purple-500 to-purple-600",
      },
      {
         id: 3,
         name: "Enterprise",
         description: "For large organizations with custom needs",
         monthlyPrice: 99,
         yearlyPrice: 990,
         features: ["Unlimited everything", "Custom analytics", "1TB+ storage", "24/7 dedicated support", "Enterprise security", "Single sign-on (SSO)", "Custom integrations", "Personalized onboarding", "SLA guarantee", "Custom reporting"],
         ctaText: "Contact Sales",
         color: "from-green-500 to-green-600",
      },
   ];

   // FAQ data
   const faqs: FAQ[] = [
      {
         id: 1,
         question: "Can I cancel my subscription anytime?",
         answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts, and you'll continue to have access until the end of your billing period.",
      },
      {
         id: 2,
         question: "Do you offer refunds?",
         answer: "We offer a 30-day money-back guarantee on all annual plans. If you're not satisfied, contact our support team for a full refund.",
      },
      {
         id: 3,
         question: "Is there a free trial?",
         answer: "Yes! Our Pro plan comes with a 14-day free trial. No credit card required to start. Our Basic plan has a free forever version with limited features.",
      },
      {
         id: 4,
         question: "Can I upgrade or downgrade my plan later?",
         answer: "Absolutely! You can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.",
      },
      {
         id: 5,
         question: "What payment methods do you accept?",
         answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and for annual Enterprise plans, we also accept bank transfers.",
      },
      {
         id: 6,
         question: "Do you offer discounts for non-profits or students?",
         answer: "Yes! We offer 50% off all plans for verified students and educational institutions, and 40% off for registered non-profit organizations.",
      },
   ];

   // Feature comparison data
   const featureComparison = [
      {
         feature: "Number of Projects",
         basic: "Up to 5",
         pro: "Unlimited",
         enterprise: "Unlimited",
      },
      {
         feature: "Storage Space",
         basic: "1GB",
         pro: "50GB",
         enterprise: "1TB+",
      },
      {
         feature: "Advanced Analytics",
         basic: false,
         pro: true,
         enterprise: true,
      },
      {
         feature: "Priority Support",
         basic: false,
         pro: true,
         enterprise: true,
      },
      {
         feature: "Team Collaboration",
         basic: false,
         pro: "Up to 10 users",
         enterprise: "Unlimited users",
      },
      {
         feature: "API Access",
         basic: false,
         pro: true,
         enterprise: true,
      },
      {
         feature: "Custom Integrations",
         basic: false,
         pro: false,
         enterprise: true,
      },
      {
         feature: "Single Sign-On (SSO)",
         basic: false,
         pro: false,
         enterprise: true,
      },
      {
         feature: "SLA Guarantee",
         basic: false,
         pro: false,
         enterprise: true,
      },
   ];

   const toggleFAQ = (id: number) => {
      setOpenFAQ(openFAQ === id ? null : id);
   };

   return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
         {/* 1. Hero Section */}
       
         <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pb-16">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative container mx-auto px-4 py-24 lg:py-32">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center">
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
                     <p className="text-xl sm:text-2xl  mb-8 max-w-2xl mx-auto">Choose the plan that fits your needs — no hidden fees, no surprises.</p>

                     {/* Pricing Toggle */}
                     <div className="flex items-center justify-center space-x-4 mb-12">
                        <span className={`text-lg font-medium ${!isYearly ? "text-gray-900" : "text-gray-900"}`}>Monthly</span>
                        <button onClick={() => setIsYearly(!isYearly)} className="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                           <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-9" : "translate-x-1"}`} />
                        </button>
                        <span className={`text-lg font-medium ${isYearly ? "text-gray-900" : "text-gray-900"}`}>Yearly</span>
                        {isYearly && <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Save 20%</span>}
                     </div>

                     {/* Trust badges */}
                     <div className="flex flex-wrap justify-center items-center gap-8 text-gray-900">
                        <div className="flex items-center">
                           <span className="text-green-500 mr-2">✓</span>
                           No credit card required
                        </div>
                        <div className="flex items-center">
                           <span className="text-green-500 mr-2">✓</span>
                           30-day money-back guarantee
                        </div>
                        <div className="flex items-center">
                           <span className="text-green-500 mr-2">✓</span>
                           Cancel anytime
                        </div>
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

         {/* 2. Pricing Plans Section */}
         <section className="py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">Choose Your Plan</h2>
                  <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">Plans for every need — from individual creators to growing teams and large enterprises</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
                     {pricingPlans.map((plan) => (
                        <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg border-2 ${plan.popular ? "border-purple-500 scale-105" : "border-gray-200"} transition-all duration-300 hover:shadow-xl`}>
                           {plan.popular && (
                              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                 <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                              </div>
                           )}

                           <div className="p-6 sm:p-8">
                              <div className="text-center mb-6">
                                 <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                 <p className="text-gray-600">{plan.description}</p>
                              </div>

                              <div className="text-center mb-6">
                                 <div className="flex items-baseline justify-center">
                                    <span className="text-4xl sm:text-5xl font-bold text-gray-900">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                                    <span className="text-gray-600 ml-2">/{isYearly ? "year" : "month"}</span>
                                 </div>
                                 {isYearly && <p className="text-green-600 font-medium mt-2">Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} per year</p>}
                              </div>

                              <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1 mb-6`}>{plan.ctaText}</button>

                              <ul className="space-y-4">
                                 {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                       <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                       </svg>
                                       <span className="text-gray-700">{feature}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 3. Feature Comparison Table */}
         <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-7xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Compare Plans</h2>
                  <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">See how our plans stack up against each other</p>

                  <div className="overflow-x-auto">
                     <table className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                           <tr className="bg-gray-50">
                              <th className="py-6 px-6 text-left font-semibold text-gray-900">Features</th>
                              <th className="py-6 px-6 text-center font-semibold text-gray-900">Basic</th>
                              <th className="py-6 px-6 text-center font-semibold text-gray-900 bg-purple-50">Pro</th>
                              <th className="py-6 px-6 text-center font-semibold text-gray-900">Enterprise</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           {featureComparison.map((row, index) => (
                              <tr key={index} className="hover:bg-gray-50 transition-colors">
                                 <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                                 <td className="py-4 px-6 text-center">
                                    {typeof row.basic === "boolean" ? row.basic ? <span className="text-green-500 font-bold">✓</span> : <span className="text-gray-300">✗</span> : <span className="text-gray-700">{row.basic}</span>}
                                 </td>
                                 <td className="py-4 px-6 text-center bg-purple-50">
                                    {typeof row.pro === "boolean" ? row.pro ? <span className="text-green-500 font-bold">✓</span> : <span className="text-gray-300">✗</span> : <span className="text-gray-700">{row.pro}</span>}
                                 </td>
                                 <td className="py-4 px-6 text-center">
                                    {typeof row.enterprise === "boolean" ? row.enterprise ? <span className="text-green-500 font-bold">✓</span> : <span className="text-gray-300">✗</span> : <span className="text-gray-700">{row.enterprise}</span>}
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </section>

         {/* 4. FAQ Section */}
         <section className="py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-gray-600 text-center mb-12">Everything you need to know about our pricing and plans</p>

                  <div className="space-y-4">
                     {faqs.map((faq) => (
                        <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200">
                           <button onClick={() => toggleFAQ(faq.id)} className="w-full text-left p-6 sm:p-8 flex justify-between items-center hover:bg-gray-50 transition-colors">
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                              <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${openFAQ === faq.id ? "rotate-180" : ""} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                           </button>
                           {openFAQ === faq.id && (
                              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                 <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* 5. Testimonial & Guarantee Section */}
         <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                     {/* Trust Stats */}
                     <div className="text-center lg:text-left">
                        <div className="bg-blue-50 rounded-2xl p-8 h-full">
                           <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                           <div className="text-gray-700 font-semibold">Happy Customers</div>
                           <p className="text-gray-600 mt-2">Join thousands of satisfied users worldwide</p>
                        </div>
                     </div>

                     {/* Money Back Guarantee */}
                     <div className="text-center lg:text-left">
                        <div className="bg-green-50 rounded-2xl p-8 h-full">
                           <div className="text-4xl font-bold text-green-600 mb-2">30-Day</div>
                           <div className="text-gray-700 font-semibold">Money-Back Guarantee</div>
                           <p className="text-gray-600 mt-2">Try risk-free with our full refund policy</p>
                        </div>
                     </div>

                     {/* Customer Testimonial */}
                     <div className="text-center lg:text-left">
                        <div className="bg-purple-50 rounded-2xl p-8 h-full">
                           <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                           <p className="text-gray-700 italic mb-4">"The pricing is transparent and the value is incredible. We saved 40% by switching to yearly billing!"</p>
                           <div className="text-gray-900 font-semibold">Sarah Johnson</div>
                           <div className="text-gray-600">CTO at TechFlow Inc.</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 6. CTA Section */}
         <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join thousands of satisfied customers and start growing your business today.</p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                     <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">Start Free Trial</button>
                     <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">Contact Sales</button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                     <p className="text-lg font-semibold mb-4">No credit card required • 14-day free trial</p>
                     <p className="opacity-90">Get full access to all Pro features during your trial. Cancel anytime.</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default PricingPage;
