import axios from "axios"; //library for http requests in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions that will use

const baseURL = "https://fakestoreapi.com/auth/login"; //random URL for successful test

describe("API Operation Tests", () => {

  test("control for substraction for two parameters with POST method", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 1], //happy path scenario
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(4); //5-1 = 4
    alert('The result for your operation is 4.');
  });

  test("control for substraction for three parameters with POST method", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 1, 2], //happy path scenario
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(2); //5-1-2 = 2
    alert('The result for your operation is 2.');
  });

  test("control for substraction for four parameters with POST method", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 1, 2, 2], //happy path scenario
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(0); //5-1-2-2 = 0
    alert('The result for your operation is 0.');
  });

  test("control for substraction for five parameters with POST method", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 1, 2, 2, 5], //happy path scenario
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-5); //5-1-2-2-5  = -5
    alert('The result for your operation is -5.');
  });

  test("control for substraction for six parameters with POST method", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 1, 2, 2, 5, 7], 
    });
    expect(response.status).toBe(400);
    alert('Maximum number of allowed parameters is 5!');
  });

  test("control for substraction for one parameter with GET method", async () => {
    const response = await axios.get(`${baseURL}/sub`, {
      params: [2],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for substraction for two parameters with GET method", async () => {
    const response = await axios.get(`${baseURL}/sub`, {
      params: [2, 4],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for substraction for three parameters with GET method", async () => {
    const response = await axios.get(`${baseURL}/sub`, {
      params: [2, 4, 6],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for substraction for four parameters with GET method", async () => {
    const response = await axios.get(`${baseURL}/sub`, {
      params: [2, 4, 6, 5],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for substraction for five parameters with GET method", async () => {
    const response = await axios.get(`${baseURL}/sub`, {
      params: [2, 4, 6, 5, 9],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for substraction for zero", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [5, 0], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(5); //5-0 = 5
    alert('The result for your operation is 5.');
  });

  test("control for substraction for zero", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [0, 2], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-2); //0-2 = -2
    alert('The result for your operation is -2.');
  });

  test("control for substraction for both negatives", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [-8, -2], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-6); //-8 - (-2) = -6
    alert('The result for your operation is -6.');
  });

  test("control for substraction for the first is negative only", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [-12, 2], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-14); //-12-2 = -14
    alert('The result for your operation is -14.');
  });

  test("control for substraction for the second is negative only", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [25, -2], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(27); //25 - (-2) = 27
    alert('The result for your operation is 27.');
  });

  test("control for substraction for the same parameters for both positives", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [25, 25], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(0); //25 - 25 = 0
    alert('The result for your operation is 0.');
  });

  test("control for substraction for the same parameters for both negatives", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [-6, -6], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(0); //-6 - (-6) = 0
    alert('The result for your operation is 0.');
  });

  test("control for substraction for 0-0", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [0, 0], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(0); //0-0 = 0
    alert('The result for your operation is 0.');
  });

  test("control for boundaries", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [999999999999999, 999999999999999], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(0); //999999999999999-999999999999999 = 0
    alert('The result for your operation is 0.');
  });

  test("control for boundaries", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [999999999999999, 0], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(999999999999999); //999999999999999-0 = 999999999999999
    alert('The result for your operation is 999.999.999.999.999.');
  });

  test("control for boundaries", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [-999999999999999, -999999999999999], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(999999999999999); //-999999999999999- (-999999999999999) = 0
    alert('The result for your operation is 0.');
  });

  test("control for boundaries", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [-999999999999999, 999999999999999], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(1999999999999998); //-999999999999999-999999999999999 = -1.999.999.999.999.998
    alert('The result for your operation is 1.999.999.999.999.998.');
  });

  test("control for invalid data types", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [a, b], 
    });
    expect(response.status).toBe(400);
    alert('Only numeric values are accepted!');
  });

  test("control for decimal values", async () => {
    const response = await axios.post(`${baseURL}/sub`, {
      params: [100,456, 108,653], 
    });
    expect(response.status).toBe(200);
    expect(response.data.result).toBe(-8,197); //100,456 - 108,653 = -8,197
    alert('The result for your operation is -8,197.');
  });
});
