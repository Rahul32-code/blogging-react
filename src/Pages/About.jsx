import React from "react";
import { Pen, Users, Lightbulb } from "lucide-react"; // Importing Lucide Icons

function About() {
  return (
    <section className="py-10 bg-gradient-to-r text-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full flex flex-col md:flex-row mt-4">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold">About Our Blog</h2>
          <hr className="w-25 h-1 bg-blue-600 mt-2 border-0 rounded mb-4" />
          <p className="text-lg mb-8 text-start">
            Welcome to our blog! Here, we explore the most exciting topics in
            tech, lifestyle, and personal growth. Join us as we inspire
            creativity and share valuable insights to make the world a better
            place.
          </p>
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png"
            alt="About Us"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Our Mission */}
        <div className="text-start mb-12">
          <h3 className="text-4xl font-semibold mb-4">Our Mission</h3>
          <hr className="w-30 h-1 bg-blue-600 mt-2 border-0 rounded mb-4" />
          <p className="text-lg ">
            Our mission is to create a space where writers and readers can
            connect, share stories, and foster a community centered around
            growth, learning, and innovation. We believe that sharing knowledge
            can change the world.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-8 text-white rounded-lg shadow-lg border border-gray-700">
            <Pen className="text-5xl mb-6 mx-auto text-teal-500 " />
            <h4 className="text-xl font-semibold mb-2">Creative Writing</h4>
            <p className="text-slate-400">
              Our writers craft engaging and thought-provoking content that
              encourages creativity, discussion, and reflection.
            </p>
          </div>
          <div className="p-8 border border-gray-700 text-white rounded-lg shadow-lg">
            <Users className="text-5xl mb-6 mx-auto text-blue-500" />
            <h4 className="text-xl font-semibold mb-2">Community Focused</h4>
            <p className="text-slate-400">
              We believe in building a strong community where everyone’s voice
              is heard, and readers and writers can learn from each other.
            </p>
          </div>
          <div className="p-8 border border-gray-700 text-white rounded-lg shadow-lg">
            <Lightbulb className="text-5xl mb-6 mx-auto text-yellow-500" />
            <h4 className="text-xl font-semibold mb-2">Innovative Ideas</h4>
            <p className="text-slate-400">
              We always strive to explore new and emerging trends, delivering
              content that challenges conventional thinking and offers fresh
              perspectives.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="text-center mt-16 mb-12">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-semibold mb-4">Meet Our Team</h3>
            <hr className="w-30 h-1 bg-blue-600 mt-2 border-0 rounded mb-4" />
          </div>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Behind every article, we have a dedicated team working together to
            make sure the content resonates with our readers. Our team brings
            passion, expertise, and creativity to everything they do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold">Jane Doe</h4>
              <p className="text-sm text-gray-300">Editor-in-Chief</p>
            </div>
            <div className="text-center">
              <img
                src="https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold">John Smith</h4>
              <p className="text-sm text-gray-300">Content Writer</p>
            </div>
            <div className="text-center">
              <img
                src="https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="font-semibold">Alex Brown</h4>
              <p className="text-sm text-gray-300">Social Media Manager</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#2a2b34] text-white p-10 rounded-2xl shadow-lg w-full text-center">
          <h3 className="text-4xl font-bold mb-3">Join the Community!</h3>
          <p className="text-lg text-gray-300 mb-6">
            Whether you're a seasoned writer or a new reader, we welcome you to
            explore new topics, exchange ideas, and grow with us. Let's make the
            world a better place by sharing knowledge and inspiring others!
          </p>
          <div className="flex items-center justify-center rounded-lg overflow-hidden max-w-2xl mx-auto p-6">
            <a
              href="#subscribe"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-700 transition"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
