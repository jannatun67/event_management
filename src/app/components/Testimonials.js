export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Organizer',
      content: 'EventHub has transformed how I manage and promote my events. The platform is incredible!',
    },
    {
      name: 'Michael Chen',
      role: 'Attendee',
      content: 'I discovered so many amazing events through EventHub. The booking process is seamless.',
    },
    {
      name: 'Emma Davis',
      role: 'Venue Owner',
      content: 'Partnering with EventHub has increased our venue bookings significantly.',
    },
  ];

  return (
    <div className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-gray-600">Trusted by thousands of event lovers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}