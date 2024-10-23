import Header from '../components/header';

const stepsData = [
  {
    id: 1,
    icon: '🛑', // You can replace this with actual icon components or images
    title: 'What type of incident?',
    description: 'Choose the category that best describes the incident.',
  },
  {
    id: 2,
    icon: 'ℹ️',
    title: 'Tell us about the incident?',
    description: 'Let’s connect the dots and see where to start.',
  },
  {
    id: 3,
    icon: '📍',
    title: 'Where did the incident occur?',
    description: 'Lorem ipsum dolar sit general sac mascho werho',
  },
];

const Getstarted = () => {
  return (
  <>

  <Header   p={'Home-Incidents-New incident'} h1={"New Incident"} icon={'/public/Location/tree.png'} text={'Next Step'}  noSearch={'noSearch'}  sortmodified={'Back'}/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Header */}
      <h1 className="text-3xl font-semibold mb-4">Let’s get started</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho
      </p>

      {/* Progress Bar */}
      <div className="w-full max-w-lg flex justify-between items-center mb-8">
        <div className="h-1 bg-gray-300 flex-1 rounded"></div>
        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
        <div className="h-1 bg-gray-300 flex-1 rounded"></div>
        <div className="w-6 h-6 rounded-full bg-gray-300"></div>
        <div className="h-1 bg-gray-300 flex-1 rounded"></div>
      </div>

      {/* Steps Section */}
      <div className="flex space-x-6 justify-center mb-8">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center w-64"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
        Get started
      </button>
    </div>
  </>
  );
};

export default Getstarted;
