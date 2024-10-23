
import Card from '../components/Card';
import Header from '../components/header'
const Location = () => {
  // Data for Locations, Activities, and Documents
  const locationsData = [
    {
      id: 1,
      name: "Whitechapel Rd.",
      county: "Tulare County, Los Angeles, CA 23415",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png",
    },
    {
      id: 2,
      name: "Whitechapel Rd.",
      county: "Tulare County, Los Angeles, CA 23415",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/buld3.png",
    },
    {
      id: 3,
      name: "Whitechapel Rd.",
      county: "Tulare County, Los Angeles, CA 23415",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png",
    },
    {
      id: 4,
      name: "Whitechapel Rd.",
      county: "Tulare County, Los Angeles, CA 23415",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/buld3.png",
    },
  ];

  const activitiesData = [
    {
      id: 1,
      name: "Activity 1",
      location: "16.1232, -122.1424",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png",
    },
    {
      id: 2,
      name: "Activity 2",
      location: "16.1232, -122.1424",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png",
    },
  ];

  const documentsData = [
    {
      id: 1,
      name: "Document 1",
      location: "16.1232, -122.1424",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png"
    },
    {
      id: 2,
      name: "Document 2",
      location: "16.1232, -122.1424",
      cost: "$1,456,654.00",
      imgSrc: "/public/Location/bldinmg1.png"
    },
  ];

  return (
<>

<Header  p={'Incidents - DR-4699 March 2023 Severe Storms'} h1={"DR-4699 March 2023 Severe Storms"} icon={'/public/Location/tree.png'} text={'+ New Location'} />
    <div className="p-8 bg-gray-50">
      {/* Incident Title */}

   

  <div className="flex gap-4">
  <div className="grid">
       {/* Description */}
       <div className="mb-6">
        <h1 className="text-3xl font-bold">DR-4699 March 2023 Severe Storms</h1>
        <div className="mt-2 text-gray-600">
          <p><strong>Location:</strong> Tulare County, Los Angeles, CA 23415</p>
          <p><strong>Approx. Cost:</strong> $60,607,456.00</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8 ">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 w-[90%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veritatis dolorum ut, maxime illo totam nobis sit necessitatibus odio accusamus quam quod natus labore vero enim mollitia quo deleniti amet ipsum ratione qui deserunt! Obcaecati itaque culpa earum dolorem molestiae ut maxime expedita odit commodi quas, ducimus doloremque non est.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Locations</h2>
        <div className="flex flex-wrap gap-1">
          {locationsData.map((location) => (
 

<Card  key={location.id}  image={location.imgSrc} title={location.name} location={location.county} price={location.cost}  divclass={'bg-white  p-4  overflow-hidden w-72'}  />
          ))}
        </div>
      </div>
          {/* Activities Section */}
          <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 ">Activities</h2>
        <div className="grid gap-5">
          {activitiesData.map((activity) => (
            // <div key={activity.id} className="bg-white shadow-md p-4 rounded-lg">
            //   <img
            //     src={activity.imgSrc}
            //     alt={activity.name}
            //     className="w-full h-32 object-cover rounded-lg mb-2"
            //   />
            //   <h3 className="text-lg font-medium">{activity.name}</h3>
            //   <p className="text-gray-500">Location: {activity.location}</p>
            //   <p className="mt-2 text-lg font-bold">{activity.cost}</p>
            // </div>

            <Card  key={activity.id}  image={activity.imgSrc} title={activity.name} location={activity.location} price={activity.cost}  divclass={'bg-white  p-4  overflow-hidden w-full flex gap-20 bg-gray-100'} imgclass={'w-28 overflow-hidden rounded'} />
          ))}

        </div>
      </div>

      {/* Documents Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Documents</h2>
        <div className="space-y-4">
          {documentsData.map((document) => (
            // <div key={document.id} className="bg-white shadow-md p-4 rounded-lg">
            //   <h3 className="text-lg font-medium">{document.name}</h3>
            //   <p className="text-gray-500">Location: {document.location}</p>
            //   <p className="mt-2 text-lg font-bold">{document.cost}</p>
            // </div>

            <Card  key={document.id}  image={document.imgSrc} title={document.name} location={document.location} price={document.cost}  divclass={'bg-white  p-4  overflow-hidden w-full flex gap-20 bg-gray-100'} imgclass={'w-28 rounded'} />
          ))}
        </div>
      </div>
   </div>

      {/* Incident Map */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Incident Map</h2>
        <div className="w-fit  bg-gray-200 rounded-lg flex items-center justify-center">
            <img src="/public/Location/mp2.png" alt=""  className='w-[40rem]'/>
        </div>
      </div>
  </div>

  
    </div>
</>
  );
};

export default Location;
