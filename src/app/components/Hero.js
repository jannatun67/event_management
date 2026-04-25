import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-linear-to-br from-indigo-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing Events
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Find and book the best events in your city. From concerts to conferences, weve got you covered.
          </p>
          <Link
            href="/items"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
}