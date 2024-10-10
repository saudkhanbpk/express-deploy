const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/test',(req,res)=>{
    res.json({
        "person1": [
          {
            "first": "Nicole",
            "last": "Adelstein"
          }
        ],
        "person2": [
          {
            "first": "Pleuni",
            "last": "Pennings"
          }
        ],
        "person3": [
          {
            "first": "Rori",
            "last": "Rohlfs"
          }
        ]
      })
})
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
