import React, {useState,useEffect} from 'react'
import axios from 'axios';

function Fighter() {

    const [fighterData, setFighterData] = useState(null)

    useEffect(() => {
        // Make an HTTP request to fetch the fighter data
        axios.get('/api/fighter/1') // Replace with your API endpoint
          .then((response) => {
            setFighterData(response.data);
          })
          .catch((error) => {
            console.error('Error fetching fighter data:', error);
          });
      }, []);
    
      if (!fighterData) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        <h2>Fighter Profile: {fighterData.name}</h2>
        <p>Stance: {fighterData.stance}</p>
        <h3>Recent Fights:</h3>
    </div>
    
  )
}

export default Fighter