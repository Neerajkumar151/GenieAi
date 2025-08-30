import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// SVG Icons
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#c2e9fb] pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question, an idea, or just want to say hello? We’d love to hear from you.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            
            {/* Form Section */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold mb-6 text-purple-600">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                />
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com *"
                    className={`w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 shadow-sm ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message..."
                    className={`w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 shadow-sm ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
                {submitted && (
                  <p className="text-center p-4 mt-4 rounded-lg bg-green-100 text-green-800 font-medium border border-green-200">
                    ✅ Thank you! Your message has been sent.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-6 text-purple-600">Contact Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start space-x-4">
                  <MailIcon />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:thakurneerajkumar17@gmail.com" className="text-gray-600 hover:text-purple-600 transition">
                      thakurneerajkumar17@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+918448275790" className="text-gray-600 hover:text-purple-600 transition">
                      +91 8448275790
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <LocationIcon />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">Maa Bhagwati Homes-3, Sector-49, Noida</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-10 mb-6 text-purple-600">Follow Us</h2>
              <div className="flex space-x-6">
                <a href="https://github.com/Neerajkumar151" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 hover:scale-110 transition">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477..."/></svg>
                </a>
                <a href="https://www.linkedin.com/in/neerajkumar1517/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 hover:scale-110 transition">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761..."/></svg>
                </a>
                <a href="https://x.com/neerajkumar1715" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 hover:scale-110 transition">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308..."/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */} <div className="mt-16"> <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Find Us Here</h2> <div className="w-full max-w-6xl mx-auto h-[450px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.02264973127632!2d77.37436295126327!3d28.55887860597294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f76bbea3b9%3A0xbe170bd852d7f8b8!2sNew%20bal%20bharti%20public%20school!5e0!3m2!1sen!2sin!4v1754323702027!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe> </div> </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
