'use client';

import Link from 'next/link';
import { getItems } from '@/lib/items';
import Image from 'next/image';

export default function UpcomingEvents() {
  const events = getItems().slice(0, 3);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">Dont miss out on these exciting events</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 "> 
                <Image src={event.image} alt={event.title} className="w-full h-full object-cover" 
                width={300}
                height={200}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <span className="text-sm text-indigo-600 font-semibold">{event.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{event.date}</span>
                  <Link
                    href={`/items/${event.id}`}
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}