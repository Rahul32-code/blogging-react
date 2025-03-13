import { Home, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[#202026] text-white w-full py-8">
      {/* Container for Cards */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex gap-8 flex-wrap justify-center">
        {/* Address Card */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center w-full sm:w-1/3 lg:w-1/4 shadow-lg mb-6">
          <div className="flex justify-center">
            <div className="bg-gray-900 p-4 rounded-full">
              <Home className="text-blue-500 w-10 h-10" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">Address</h2>
          <p className="text-gray-400 mt-2">7 Green Lake Street</p>
          <p className="text-gray-400">Crawfordsville, IN 47933</p>
        </div>

        {/* Email Card */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center w-full sm:w-1/3 lg:w-1/4 shadow-lg mb-6">
          <div className="flex justify-center">
            <div className="bg-gray-900 p-4 rounded-full">
              <Mail className="text-green-400 w-10 h-10" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">Email Us</h2>
          <p className="text-gray-400 mt-2">Bloggar@gmail.com</p>
          <p className="text-gray-400">helloyou@gmail.com</p>
        </div>

        {/* Phone Card */}
        <div className="border border-gray-700 rounded-2xl p-6 text-center w-full sm:w-1/3 lg:w-1/4 shadow-lg mb-6">
          <div className="flex justify-center">
            <div className="bg-gray-900 p-4 rounded-full">
              <Phone className="text-blue-400 w-10 h-10" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mt-4">Call Now</h2>
          <p className="text-gray-400 mt-2">+1 800 123 456</p>
          <p className="text-gray-400">+1 800 123 654</p>
        </div>
      </div>

      {/* Question Section */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8 flex flex-col gap-4 text-center">
        <h2 className="text-2xl font-semibold">Have Any Question?</h2>
        <p className="text-gray-400">
          It is a long-established fact that a reader will be distracted by the
          content of a page when looking.
        </p>
      </div>

      {/* Contact Form */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8 flex flex-col gap-6">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3  text-white border border-gray-700 rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3  text-white border border-gray-700 rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full p-3  text-white border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4">
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full p-3  text-white border border-gray-700 rounded-lg"
            ></textarea>
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>

      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8 flex flex-col gap-4 text-center">

        {/* Embed Google Map */}
        <div className="w-full h-96 mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123809598!2d77.23701382068626!3d28.522102350413363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1741674376063!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
