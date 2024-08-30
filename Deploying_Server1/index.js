// app.js

const express = require('express');
const cors = require('cors')

const app = express();


//app.use(loggerMiddleware);
app.use(cors(
   { origin:'*'}
));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// app.get('/api/inventory', async (req, res)=>{
//     try{
//         const apiUrl = ' https://api.bigcommerce.com/stores/z5u4c3iybc/v3/inventory/items'; 
//         const response = await fetch(apiUrl, {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'X-Auth-Token':'a8oohdnqlaa3a9yo2gkn7ep2g7kww3'
//           },
//         });
    
//         if (!response.ok) {
//             const errorText = await response.text();
//             console.error('API Error:', response.status, errorText);
//             throw new Error('Network response was not ok');
//         }
    
//         const data = await response.json();
//         console.log("data : ",data);
        
//         const result = res.json(data);
//         console.log("result : ", result);
        

//     }catch(error){
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });    
//     }
// })

app.get('/api/pickup', async(req,res)=>{
    try{
        const apiUrl = 'https://api.bigcommerce.com/stores/z5u4c3iybc/v3/pickup/methods'; 
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token':'hh6fwbo1oekmwuuxbbg8br2pe34abnt'
          },
        });
    
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log("data : ",data);
        
        const result = res.json(data);
        console.log("result : ", result);
        

    }catch(error){
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });    
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
