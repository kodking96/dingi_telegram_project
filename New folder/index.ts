import express from "express";


// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = 5000;

const app = express();

app.get( "/", ( req, res ) => {
    // render the index template
    res.send("Wazzap");
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );