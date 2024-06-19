const express = require("express"); 

const app = express(); 
const PORT = process.env.PORT || 5500; 

// For testing purposes 
app.get("/", (req, res) => { 
    res.send("<h2>Test</h2>"); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});