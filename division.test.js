import axios from "axios"; //library for http request in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions which will use

const baseURL = "https://fakestoreapi.com/auth/login"; //random URL for successful test

describe("API Operation Tests", () => {

  test("control for the API get 2 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [10, 5], //happy path scenario
    });
    expect(response.status).toBe(200); //10/5 = 2
    expect(response.data.result).toBe(2);
    alert('The result for your operation is 2.');
  });

  test("control for division by zero with POST method", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [3, 0], //division by zero special case
    });
    expect(response.status).toBe(400);
    alert('Division by zero is not allowed'); // ErrorMessage for division by zero
  });

  test("control for non-numeric inpıt", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [o, b], //wrong inputs as parameters
    });
    expect(response.status).toBe(400);
    alert('Wrong inputs!'); 
  });

  test("control for division to 1", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [230492345, 1], 
    });
    expect(response.status).toBe(200); //230492345/1 = 230492345
    expect(response.data.result).toBe(230492345);
    alert('The result for your operation is 230.492.345.');
  });

  test("control for division to -1", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [-1, 924590238490], 
    });
    expect(response.status).toBe(200); //-1/924590238490 = -924590238490
    expect(response.data.result).toBe(-924590238490);
    alert('The result for your operation is -924.590.238.490.');
  });

  test("control for divison to 0", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [0, 904523904], 
    });
    expect(response.status).toBe(200); //0/904523904 = 0
    expect(response.data.result).toBe(0);
    alert('The result for your operation is 0');
  });

  test("control for divison by decimal value", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [456, 1,56], 
    });
    expect(response.status).toBe(200); //0/904523904 = 292,3076923076923
    expect(response.data.result).toBe(292,3076923076923);
    alert('The result for your operation is 292,3076923076923');
  });

  test("control for divison with two decimal value", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [45,644, 123,56], 
    });
    expect(response.status).toBe(200); //45,644/123,56 = 0,3694075752670767
    expect(response.data.result).toBe(0,3694075752670767);
    alert('The result for your operation is 0,3694075752670767');
  });

  test("control for division by zero with GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [3, 0], //division by zero special case
    });
    expect(response.status).toBe(405); //invalid method
  });

  test("control for overload with GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [9999999999999999, 3333333333333333], //basic stress test
    });
    expect(response.data.result).toBe(3);
    alert('The result for your operation is 3.');
  });

  test("control for overload with GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [9999999999999999, 2], //basic stress test
    });
    expect(response.data.result).toBe(1666666666666667);
    alert('The result for your operation is 1.666.666.666.666.667.');
  });

  test("control for the API get 2 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [10, 5],
    });
    expect(response.status).toBe(405); //10/5 = 2 but invalid method
  });

  test("control for the API can't get more then 5 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
      params: [5, 3, 1, 7, 9, 4], 
    //the Get method cannot be used for four operations(add,div,mul,sub) and multiple parameters
    });
    expect(response.status).toBe(405); //not allowed for GET operations
  });

  test("control for the API can't get more then 5 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/div`, {
      params: [9, 3, 8, 6, 3, 5], 
    });
    expect(response.status).toBe(400); //method is correct but six parameters are invalid
  });

  test("control for the API get 3 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [10, 5, 2], 
    });
    expect(response.status).toBe(200); //10/5/2 = 1
    expect(response.data.result).toBe(1);
  });

  test("control for the API get 3 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [10, 5, 2], 
    });
    expect(response.status).toBe(405); //invalid method
  });

  test("control for the API get 2 parameters as input for POST method one is negative", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [4, -2], //divison by a negative number
    });
    expect(response.status).toBe(200); //4/-2 = -2
    expect(response.data.result).toBe(-2);
    alert('The result for your operation is -2.');
  });

  test("control for the API get 2 parameters as input for GET method one is negative", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [4, -2], //divison by a negative number
    });
    expect(response.status).toBe(405); //Invalid method.
  });

  test("control for the API get 2 parameters as input for POST method for both negative", async () => {
    const response = await axios.post(`${baseURL}/div`, {
    params: [-6, -2], //divison by a negative number
    });
    expect(response.status).toBe(200); //-6/-2 = 3
    expect(response.data.result).toBe(3);
    alert('The result for your operation is 3.');
  });

  test("control for the API get 2 parameters as input for GET method both negative", async () => {
    const response = await axios.get(`${baseURL}/div`, {
    params: [-4, -2], //divison by a negative number
    });
    expect(response.status).toBe(405); //Invalid method.
  });
});
