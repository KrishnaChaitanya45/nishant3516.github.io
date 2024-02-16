const express = require("express");

const app = express();
const fs = require("fs").promises;
const cors = require("cors");
app.use(cors());
app.get("/api/faculty-data", async (req, res) => {
  try {
    const facultyData = await fs.readFile(__dirname + "/data.json");
    return res.send(JSON.parse(facultyData));
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error fetching data");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
