import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Droplets, Smartphone, Utensils, Wrench, ChevronRight, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'education-support',
      title: 'Education Support Program',
      description: 'Providing educational resources, tutoring, and scholarships to underprivileged children in our community.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      volunteers: 45,
      beneficiaries: 200,
      duration: '12 months',
      category: 'Education'
    },
    {
      id: 'healthcare-access',
      title: 'Healthcare Access Initiative',
      description: 'Improving healthcare accessibility through mobile clinics, health education, and medical assistance programs.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      volunteers: 32,
      beneficiaries: 500,
      duration: '18 months',
      category: 'Healthcare'
    },
    {
      id: 'clean-water',
      title: 'Clean Water Project',
      description: 'Installing water purification systems and educating communities about water safety and hygiene practices.',
      icon: Droplets,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'planning',
      volunteers: 25,
      beneficiaries: 300,
      duration: '24 months',
      category: 'Infrastructure'
    },
    {
      id: 'digital-literacy',
      title: 'Digital Literacy Program',
      description: 'Teaching essential digital skills to help community members access online services and opportunities.',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      volunteers: 18,
      beneficiaries: 150,
      duration: '6 months',
      category: 'Technology'
    },
    {
      id: 'food-distribution',
      title: 'Food Distribution Network',
      description: 'Organizing regular food drives and establishing sustainable food distribution systems for families in need.',
      icon: Utensils,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'ongoing',
      volunteers: 60,
      beneficiaries: 400,
      duration: 'Ongoing',
      category: 'Food Security'
    },
    {
      id: 'skills-development',
      title: 'Skills Development Workshop',
      description: 'Providing vocational training and skill development programs to enhance employment opportunities.',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed',
      volunteers: 28,
      beneficiaries: 120,
      duration: '8 months',
      category: 'Employment'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'planning':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'Active';
      case 'planning':
        return 'Planning';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Transforming communities through sustainable initiatives and collaborative efforts
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{project.volunteers} volunteers</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{project.beneficiaries}</span> people impacted
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-orange-600 font-medium">
                      <span className="text-sm">Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Together, we're making a measurable difference in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">208</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1,670</div>
              <div className="text-gray-600">People Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of meaningful projects that create lasting positive change in communities
          </p>
          <Link
            to="/volunteer"
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-200"
          >
            Get Involved
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;