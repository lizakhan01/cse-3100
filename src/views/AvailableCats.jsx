

import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameSearch, setNameSearch] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const filterCats = () => {
      let result = cats;

      // Filter by breed
      if (breedFilter) {
        result = result.filter((cat) => cat.breed === breedFilter);
      }

      // Filter by name or age
      if (nameSearch) {
        const isNumeric = !isNaN(nameSearch);  // Check if the input is a number (age filter)

        if (isNumeric) {
          // If input is a number, filter by age
          result = result.filter((cat) => cat.age === nameSearch);
        } else {
          // If input is a letter, filter by name starting with that letter
          result = result.filter((cat) =>
            cat.name.toLowerCase().startsWith(nameSearch.toLowerCase())
          );
        }
      }

      setFilteredCats(result);
    };

    filterCats();
  }, [breedFilter, nameSearch, cats]);

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4 d-flex justify-content-center">
        <div className="d-flex w-50">
          <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)} className="form-select mr-2">
            <option value="">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
            <option value="Siamese">Siamese</option>
          </select>

          <input
            type="text"
            placeholder="Search by name or age"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            className="form-control"
          />
        </div>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img src={cat.image} alt={cat.name} className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
