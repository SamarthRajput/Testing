// we moved the listening logic to bin.ts, bin.ts will start when the user actually want to start an http server 
// index.ts will just store the app variable, that will be stored by both of the things 
import { app } from "./index";

app.listen(3000, () => {
   console.log("Listening on port 3000");
})