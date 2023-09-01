const asyncHandler = require('express-async-handler')

const getFighterByID = asyncHandler(async (req,res) => {
    

    res.status(201).json(
        {
            id: '1',
            name: 'Bob',
            stance: 'southpaw',
            recentFights: [
                {
                    fighter1: '1',
                    fighter2: '2',
                    winner: '2',
                    result: 'KO',
                    date: '2023-08-26'
                },
                {
                    fighter1: '3',
                    fighter2: '1',
                    winner: '1',
                    result: 'SD',
                    date: '2022-05-16'
                }
            ]
    })
})

module.exports ={
    getFighterByID,
}