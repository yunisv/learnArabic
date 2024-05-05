import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import Dashboard from "./components/Dashboard";
import RTA from "./components/RTA";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/rta",
                element: <RTA />
            },
            {
                path: "/rta/:id",
                element: <RTA />
            },
        ]
    },
]);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConfigProvider
              theme={{
                  token: {
                      // Seed Token
                      // colorPrimary: '#00b96b',
                      borderRadius: 2,
                  },
                  algorithm: theme.darkAlgorithm
              }}
          >
              <RouterProvider router={router} />
          </ConfigProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
