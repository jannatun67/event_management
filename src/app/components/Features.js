import { FaCalendarCheck, FaHeadset, FaTags, FaTicketAlt } from "react-icons/fa";

export default function Features() {
 const features = [
  {
    title: 'Curated Events',
    description: 'Hand-picked events from the best organizers worldwide.',
    icon: FaCalendarCheck,
  },
  {
    title: 'Easy Booking',
    description: 'Book tickets in seconds with our streamlined process.',
    icon: FaTicketAlt,
  },
  {
    title: 'Best Prices',
    description: 'Get the best deals and early bird discounts.',
    icon: FaTags,
  },
  {
    title: '24/7 Support',
    description: 'Our team is always here to help you.',
    icon: FaHeadset,
  },
];


  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EventHub</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make event discovery and management simple and enjoyable
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}