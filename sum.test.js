import axios from "axios"; //library for http requests in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions that will use

const baseURL = "https://fakestoreapi.com/auth/login";

describe("API Operation Tests", () => {

    test("control for sum of 1 to n operation for two parameters for GET method", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [4,7],
    });
    expect(response.status).toBe(422); //unprocessable entry bcs there must be just 1 parameter
  });

  test("control for sum of 1 to n operation for two parameters for POST method", async () => {
    const response = await axios.post(`${baseURL}/sum`, {
      params: [4,7],
    });
    expect(response.status).toBe(405); //unprocessable entry bcs POST method is invalid for this operation
  });

  test("control for sum operation for 1 to n with GET method", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [4],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(10); //1+2+3+4=10
    alert('The result for your operation is 10.');
  });

  test("control for sum operation for 1 to n with POST method", async () => {
    const response = await axios.post(`${baseURL}/sum`, {
      params: [3], //1+2+3 but invalid METHOD
    });

    expect(response.status).toBe(405); //not allowed for POST operations
  });

  test("control for sum operation for 1 to n with GET method for 0 as input", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [0], //1+0
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(1);
    alert('The result for your operation is 1.');
  });

  test("control for sum operation for 1 to n with GET method for 0 as input", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [-2], //1+(0)+(-1)+(-2)
  });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-2);
    alert('The result for your operation is -2.');
  });

  test("control for sum operation for 1 to n with GET method", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [99999999], //boundary test for positive
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(4999999950); //1+2+3+....+99.999.999=4.999.999.950
    alert('The result for your operation is 4.999.999.950.');
  });

  test("control for sum operation for 1 to n with GET method", async () => {
    const response = await axios.get(`${baseURL}/sum`, {
      params: [-99999999], //boundary test for negative
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(4999999950); //1+0+(-1)+....+-(99.999.999)=4.999.999.950
    alert('The result for your operation is 4,999,999,950.');
  });
});
