import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./store/store";
import { updateCounter } from "./store/counter/counter.slice";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/graphql";

function App() {
  // <Provider store={store}>
  //   <ApolloProvider client={client}>
  //     <BrowserRouter>
  //       <Pages />
  //     </BrowserRouter>
  //   </ApolloProvider>
  // </Provider>;
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
