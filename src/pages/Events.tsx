import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    {
      id: 'health-fair',
      title: 'Community Health Fair',
      date: 'March 15, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Central Community Center',
      description: 'Free health screenings, vaccinations, and wellness education for all community members.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      volunteers: 25,
      capacity: 500
    },
    {
      id: 'educational-workshops',
      title: 'Educational Workshops',
      date: 'March 22, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Local School Auditorium',
      description: 'Interactive learning sessions covering digital literacy, financial planning, and career development.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      volunteers: 15,
      capacity: 200
    },
    {
      id: 'volunteer-training',
      title: 'Volunteer Training Session',
      date: 'April 5, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Waseela Community Office',
      description: 'Comprehensive training for new volunteers covering our programs, safety protocols, and community engagement.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      volunteers: 8,
      capacity: 50
    },
    {
      id: 'cleanup-drive',
      title: 'Community Clean-up Drive',
      date: 'April 12, 2024',
      time: '8:00 AM - 12:00 PM',
      location: 'Riverside Park',
      description: 'Join us in beautifying our community spaces and promoting environmental awareness.',
      image: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      volunteers: 30,
      capacity: 100
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Community Events
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Join us in making a difference through meaningful community gatherings and activities
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === 'upcoming' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.volunteers} volunteers needed</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {event.capacity} capacity
                  </span>
                  <div className="flex items-center text-orange-600 font-medium">
                    <span className="text-sm">Learn More</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community events and be part of positive change in your neighborhood
          </p>
          <Link
            to="/volunteer"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-200"
          >
            Become a Volunteer
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;