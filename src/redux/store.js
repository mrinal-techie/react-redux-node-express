import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "production") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;



// I'm a Redux maintainer, and the person who added that "createStore is deprecated" message :)
// For the record this has nothing to do with your actual application code. It is specifically a message to users like you who are using "plain Redux" 
// it's trying to tell you that you're following patterns that are much harder to use, and we want you to use Redux Toolkit instead because it will make your life much easier :)
// You'll note that this isn't even a runtime warning being printed in the console - it's literally just a visual indicator in your editor, like createStore.