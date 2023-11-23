import axios from "axios"; //library for http requests in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions which will use
const credentials = {
  username: "mor_2314",
  password: "83r5^_",
  //the login details are the login details of the API that I found as an example on the internet
};

let token = "";

const baseURL = "https://fakestoreapi.com/auth/login";

describe("API Tests", () => {
  test("successfull login control for authenticated user", async () => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", //the sample API
    {
      ...credentials,
    });

    expect(response.data).toHaveProperty("token");
    token = response.data.token;
    expect(response.status).toBe(200);
  });

  test("control for wrong password", async () => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor_2314",
      password: "83",
    });

    expect(response.status).toBe(400);
  });

  test("control for wrong username", async () => {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: "mor-2314",
      password: "83r5^_",
    });

    expect(response.status).toBe(400);
  });

  test("User Endpoint should use received headers after logging in with correct form", async () => {

    const headers = {
      Authorization: token,
      username: "mor_2314",
      password: "83r5^_",
    };
    const response = await axios.get(`${baseURL}/user`, { headers });
    expect(response.status).toBe(200); 
    alert('Your sign in was successful!');
  });

  test("User Endpoint should use received headers after logging in without token", async () => {
    
    const headers = {
      username: "mor_2314",
      password: "83r5^_",
    };
    const response = await axios.get(`${baseURL}/user`, { headers });
    expect(response.status).toBe(400); // It got 400 bcs there is no token used
  });

  test("User Endpoint should use received headers after logging in without credentials", async () => {
  
    const headers = {
      Authorization: token,
    };
    const response = await axios.get(`${baseURL}/user`, { headers });
    expect(response.status).toBe(400); // It got 400 bcs there are no credentials defined
  });
  
  test("control for only GET and POST methods usage", async () => {
    const response = await axios.options(baseURL);
    expect(response.status).toBe(405); 
  });

  test("control for whether header got username and pass", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [1, 2, 3],
    });
    expect(response.status).toBe(400);
  });

  test("control for the API can't get more then 5 parameters as input", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [1, 2, 3, 4, 5, 6],
    });
    expect(response.status).toBe(400); 
  });
});
