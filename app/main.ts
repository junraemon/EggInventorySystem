import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import firebase = require("nativescript-plugin-firebase");
import { AppModule } from "./app.module";

firebase.init({}).then((instance) => {
  console.log("firebase.init done");
}, (error) => {
  console.log("firebase.init error: " + error);
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
