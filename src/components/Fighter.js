import React, { useState, useEffect } from 'react'
import axios from 'axios';



function Details({fighterData}) {
    return 'details are open ' + fighterData.name
}
function Fighter() {

    const [fighterData, setFighterData] = useState(null)

    const [detailsOpen, setDetailsOpen] = useState(false)

    useEffect(() => {
        // Make an HTTP request to fetch the fighter data
        axios.get('/api/getFighter') // Replace with your API endpoint
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

    console.log('public', process.env.PUBLIC_URL)

    return (
        <div>
            <img src={'/images/' + fighterData.image} alt={'Image of ' + fighterData.name} ></img>
            <h2>Fighter Profile: {fighterData.name}</h2>
            <p>Stance: {fighterData.stance}</p>
            <ul>
                {fighterData.recentFights.map(fight =>
                    <li>
                        <span>{fight.date} </span>

                        <span>{fight.result}</span>
                    </li>
                )}
            </ul>
            {detailsOpen ?
                <div>
                    <span onClick={() => setDetailsOpen(false)}>down</span>
                    <Details fighterData={fighterData} />
                </div>
                :
                <div>
                    <span onClick={() => setDetailsOpen(true)}>up</span>
                </div>

            }


        </div>

    )
}

export default Fighter