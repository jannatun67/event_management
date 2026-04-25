import Hero from './components/Hero';
import Features from './components/Features';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <UpcomingEvents />
      <Testimonials />
      <Stats />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Join thousands of event enthusiasts today</p>
          <div className="flex justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Explore Events
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              List Your Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}