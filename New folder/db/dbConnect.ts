import {connect} from "mongoose";

import config from "../config/defaults";

export default function dbConnect() {
 const dbUri = config.dbUrl as string;
 const dbConfig = config.dbConfig;
 return connect(dbUri, dbConfig).then(() => console.log("Database connected")).catch(error => {
  console.log(`DB error: ${error.message}`);
 });
}