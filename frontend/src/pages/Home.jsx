import React from 'react';

function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 py-20 px-4 text-center text-white">
        <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to CollabAI</h1>
          <p className="text-xl mb-8">
            Revolutionizing Education with AI-Powered Learning and Real-Time Collaboration.
          </p>
          <a href="#features" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-8 rounded-full transition">
            Get Started
          </a>
        </div>
      </section>

      {/* Why Choose CollabAI Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Why Choose CollaAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">AI-Powered Tutoring</h3>
            <p className="text-gray-600">Personalized learning with AI-driven recommendations to suit your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Real-Time Collaboration</h3>
            <p className="text-gray-600">Collaborate with others in real-time using voice, video, and interactive whiteboards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Gamified Learning</h3>
            <p className="text-gray-600">Earn badges, climb leaderboards, and stay motivated through gamified education!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 text-center text-white rounded-xl max-w-4xl mx-auto mb-16 mt-12 px-4">
        <h3 className="text-2xl font-bold mb-4">Ready to Learn Smarter?</h3>
        <p className="mb-6">Join thousands of learners and educators making education smarter, faster, and more fun.</p>
        <a href="#signup" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-8 rounded-full transition">
          Sign Up Now
        </a>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Start Your Journey with CollabAI</h2>
        <p className="text-gray-700 mb-4">Sign up today and unlock a world of smarter learning!</p>
        <a href="signup.html" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition">
          Create an Account
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 CollabAI. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 mx-4">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 mx-4">Terms of Service</a>
            <a href="contact.html" className="text-blue-600 hover:text-blue-800 mx-4">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
