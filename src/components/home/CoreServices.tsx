const Coreservices = () => {
  const services = [
    {
      title: 'Mentorship & Training',
      description:
        'Weekly 3-hour live sessions, hands-on assignments, personalized code reviews, career quizzes, algorithm practice, community support, and certificates — designed to make you job-ready.',
      bg: 'bg-yellow-50',
      icon: '🎓',
    },
    {
      title: 'Custom Software Development',
      description:
        'We build scalable web apps: furniture ecommerce stores, marketing landing pages, school, church, and association websites, booking platforms, VTU and financial apps, healthcare solutions, and more.',
      bg: 'bg-white',
      icon: '🛠️',
    },
    {
      title: 'Technology Consultancy',
      description:
        'We help businesses modernize with expert solutions — from integrating AI-powered resume validation to building seamless automated service delivery systems.',
      bg: 'bg-yellow-50',
      icon: '💡',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
        Our Core Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center`}
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coreservices;
