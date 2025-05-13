import express from 'express';
import dotenv from  ".env";

const port = process.env.PORT || 3000;

const server = express();
server.use(express.json());
server.listen(port, () => {
    console
});
