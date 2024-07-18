const express = require("express");
const { comparisonRoute } = require("./routes/comparison.routes");
const { productonRoute } = require("./routes/product.routes");
const { connectiontodb } = require("./config/db");
const { deviceRoute } = require("./routes/device.route");
const { userRouter } = require("./routes/login.route");

const cors = require("cors");
const app = express();

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use("/", comparisonRoute);
app.use("/", productonRoute);
app.use("/", deviceRoute);
app.use("/", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try {
        await connectiontodb;
        console.log("Connected to DB");
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
