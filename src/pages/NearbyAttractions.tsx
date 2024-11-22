import React from 'react';

interface Attraction {
  name: string;
  description: string;
  image: string;
  activities: string[];
  distance: string;
}

interface NearbyAttractionsProps {
  limit?: number;
}

const attractions: Attraction[] = [
  {
    name: 'Pashupatinath Temple',
    description:
      'A sacred Hindu temple complex and UNESCO World Heritage Site in Kathmandu, known for its stunning architecture and cultural significance.',
    image:
      'https://i.pinimg.com/736x/10/3a/27/103a27cbdb069603fd534d33ddbabe23.jpg',
    activities: ['Cultural Tours', 'Religious Pilgrimage', 'Photography'],
    distance: '5 miles from Kathmandu city center',
  },
  {
    name: 'Mount Everest Base Camp',
    description:
      'The starting point for climbers aiming to summit the world’s tallest peak. Offers breathtaking views and a once-in-a-lifetime trekking experience.',
    image:
      'https://th.bing.com/th/id/R.f00eed26d2a189130ddfe5df278fcb54?rik=Sev%2fVTxX0MdPuw&pid=ImgRaw&r=0',
    activities: ['Trekking', 'Photography', 'Adventure'],
    distance: '136 miles from Kathmandu (by flight and trek)',
  },
  {
    name: 'Pokhara',
    description:
      'A serene lakeside city offering stunning views of the Annapurna range, perfect for boating, paragliding, and trekking.',
    image: 'https://cdn.audleytravel.com/-/-/79/1319371-pokhara-pokhara.jpg',
    activities: ['Boating', 'Paragliding', 'Trekking', 'Relaxation'],
    distance: '124 miles from Kathmandu',
  },
  {
    name: 'Chitwan National Park',
    description:
      'A UNESCO World Heritage Site offering a unique jungle safari experience with opportunities to spot rhinos, tigers, and elephants.',
    image:
      'https://www.andbeyond.com/wp-content/uploads/sites/5/indian-elephant-chitwan-nepal.jpg',
    activities: ['Jungle Safari', 'Bird Watching', 'Canoeing'],
    distance: '100 miles from Kathmandu',
  },
  {
    name: 'Bhaktapur Durbar Square',
    description:
      'A historic square known for its preserved medieval architecture, ancient temples, and rich cultural heritage.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/5c/54/durbar-square-bhaktapur.jpg?w=1200&h=1200&s=1',
    activities: ['Cultural Tours', 'Photography', 'Historical Exploration'],
    distance: '8 miles from Kathmandu',
  },
  {
    name: 'Lumbini',
    description:
      'The birthplace of Lord Buddha and a UNESCO World Heritage Site, featuring monasteries, the Maya Devi Temple, and peaceful gardens.',
    image:
      'https://lumbinidevtrust.gov.np/upload_file/images/slider/1721894939_276597348_lumbini.jpg',
    activities: ['Pilgrimage', 'Cultural Exploration', 'Meditation'],
    distance: '160 miles from Kathmandu',
  },
  {
    name: 'Nagarkot',
    description:
      'A hill station near Kathmandu offering stunning sunrise views over the Himalayas, including Mount Everest.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/00/48/3e/hotel-country-villa.jpg?w=600&h=400&s=1',
    activities: ['Hiking', 'Sunrise Views', 'Photography'],
    distance: '20 miles from Kathmandu',
  },
  {
    name: 'Annapurna Circuit',
    description:
      'A world-famous trekking route that offers diverse landscapes, from lush subtropical forests to high-altitude deserts.',
    image:
      'https://www.muchbetteradventures.com/magazine/content/images/2019/05/23144145/Annapurna-Circuit-6-1600x1067.jpeg',
    activities: ['Trekking', 'Adventure', 'Photography'],
    distance: '100 miles from Pokhara',
  },
  {
    name: 'Rara Lake',
    description:
      'Nepal’s largest freshwater lake, located in a remote area surrounded by pine forests and offering pristine beauty.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Rara_lake%2C_Mugu.jpg/1200px-Rara_lake%2C_Mugu.jpg',
    activities: ['Boating', 'Trekking', 'Nature Exploration'],
    distance: '370 miles from Kathmandu',
  },
  {
    name: 'Gosaikunda',
    description:
      'A high-altitude alpine freshwater lake and a sacred site for Hindus, surrounded by rugged mountain landscapes.',
    image:
      'https://mountainroutes.com/wp-content/uploads/2022/07/Gosaikunda-trek-langtang-region.jpg',
    activities: ['Trekking', 'Pilgrimage', 'Camping'],
    distance: '40 miles from Kathmandu',
  },
];

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({ limit }) => {
  return (
    <>
      <main className="grid grid-cols-1 gap-16 px-16 py-36 md:grid-cols-2">
        {attractions.slice(0, limit ?? attractions.length).map((attraction) => (
          <div key={attraction.name} className="overflow-hidden">
            <img
              src={attraction.image}
              alt={attraction.name}
              className="h-96 w-full object-cover"
            />
            <div className="mt-8 space-y-4">
              <h2 className="font-body text-2xl font-semibold">
                {attraction.name}
              </h2>
              <p className="line-clamp-2 opacity-80">
                {attraction.description}
              </p>
              {/* <p className="mb-2 font-medium text-gray-500">
                    Distance: {attraction.distance}
                  </p> */}
              <div>
                <h3 className="font-body mb-4 mt-6 text-xl">Things to do:</h3>
                <ul className="flex flex-wrap items-center gap-4">
                  {attraction.activities.map((activity, index) => (
                    <li
                      key={index}
                      className="border border-dark/30 px-4 py-2 hover:bg-dark/5"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default NearbyAttractions;
