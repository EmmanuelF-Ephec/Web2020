import Axios from "axios";

Axios.defaults.baseURL = "http://127.0.0.1:8000/api";

Axios.interceptors.request.use((config) => {
  if (!config.url.match(/[/]token([/refresh])?/)) {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      return Promise.reject("No access token found");
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        localStorage.clear();

        break;
    }
  }
);
