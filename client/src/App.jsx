import { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function App() {
  const [launches, setLaunches] = useState([]);
  const [searchLaunch, setSearchLaunch] = useState('');
  const [displayedLaunches, setDisplayedLaunches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/launches');
        setLaunches(response.data);
        setDisplayedLaunches(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchLaunch(event.target.value);
  };

  const debounceSearch = debounce(() => {
    setDisplayedLaunches(
      launches.filter(launch =>
        launch.name.toLowerCase().includes(searchLaunch.toLowerCase()) ||
        launch.rocketName.toLowerCase().includes(searchLaunch.toLowerCase()) ||
        (launch.success ? 'sucesso' : 'falha').includes(searchLaunch.toLowerCase())
      )
    )
  }, 500);

  const handleSearch = () => {
    debounceSearch();
  }

  return (
    <div className="App w-full max-w-5xl mx-auto">
      <h1>SpaceX Launches</h1>

      <div>
        <h2 className='text-white flex justify-center'>Registros de Lançamento</h2>

        <div className='flex flex-row items-center mb-10 mt-8'>
          <input
            type="search"
            name="search"
            id="search"
            placeholder='Search here'
            className='w-inputw rounded-md pl-2 h-7'
            value={searchLaunch}
            onChange={handleSearchChange}
          />
          <button className='ml-8 bg-orange-600 rounded-md h-7 w-buttonw' onClick={handleSearch}>Buscar</button>
        </div>

        <div className='bg-gray-500'>
          <div className='flex flex-row justify-evenly'>
            <p>Nº Vão</p>
            <p>Logo</p>
            <p>Missão</p>
            <p>Data de Lançamento</p>
            <p>Foguete</p>
            <p>Resultado</p>
            <p>Vídeo</p>
          </div>
          {displayedLaunches.map((launch, index) => (
            <div key={index} className='flex flex-row justify-evenly mt-6 bg-gray-400 mr-3 ml-3 rounded-md h-10 items-center'>
              <p>{launch.flight_number}</p>
              <img src={launch.links.patch.small} alt="logo" className='w-6 h-6' />
              <p>{launch.name}</p>
              <p>{formatDate(launch.date_utc)}</p>
              <p className={`${launch.success ? 'bg-green-500' : 'bg-red-500'}`}>{launch.success ? 'SUCESSO' : 'FALHA'}</p>
              <p>{launch.rocketName}</p>
              <a href={launch.links.webcast} rel="noopener noreferrer" target='_blank'>youtube</a>
              <hr className='bg-black h-3' />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
