import axios from "axios"; //library for http requests in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions which will use

const baseURL = "https://fakestoreapi.com/auth/login"; //random URL for successful test

describe("API Operation Tests", () => {

  test("control for add operation with 1 param for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [1],
       //It must get 405 because GET method is invalid for this operation     
    });

    expect(response.status).toBe(405);
  });

  test("control for add operation for two parameters for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [1, 4],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(5); 
    alert('The result for your operation is 5.');
  });

  test("control for add operation for two parameters for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [5, 8],
    });
    expect(response.status).toBe(405);
    //It must get 405 because GET method is invalid for this operation
  });

  test("control for add operation for three parameters for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [5, 6, 7],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(18); 
    alert('The result for your operation is 18.');
  });

  test("control for add operation for three parameters for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [2, 6, 9],
    });

    expect(response.status).toBe(405);
     //It must get 405 because GET method is invalid for this operation
  });

  test("control for add operation for four parameters for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [5, 6, 7, 8],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(26); 
    alert('The result for your operation is 26.');
  });

  test("control for add operation for five parameters for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [5, 6, 7, 8, 2],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(28); 
    alert('The result for your operation is 28.');
  });

  test("control for add operation for five parameters for POST method with one negative", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [5, 6, 7, -8, 2],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(20); 
    alert('The result for your operation is 20.');
  });

  test("control for add operation for five parameters for POST method with two negative", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [5, -6, 7, -8, 2],
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(14); 
    alert('The result for your operation is 14.');
  });

  test("control for boundaries", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [9999999999, 9999999999], //boundary test
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(19999999998); 
    alert('The result for your operation is 19.999.999.998.');
  });

  test("control for the API can't get more then 5 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [1, 2, 3, 4, 5, 6], 
      //the Get method cannot be used for four operations(add,div,mul,sub) and multiple parameters
    });
    expect(response.status).toBe(405); //not allowed for GET operations
  });

  test("control for the API can't get more then 5 parameters as input", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [1, 2, 3, 4, 5, 6], 
      //I've already test it in api.test.js but i test it again in here just in case
    });
    expect(response.status).toBe(400);
  });

  test("control for the API get 4 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [1, 2, 3, 4], 
      //It must get 405 because GET method is invalid for this operation
    });
    expect(response.status).toBe(405); //not allowed for GET operations
  });

  test("control for the API get 0 parameter as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [], 
      //It must get success because the maximum # of parameters are 5 and there are no wrong inputs
    });
    expect(response.status).toBe(200);
  });

  test("control for the API get 0 parameter as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/add`, {
      params: [], 
      //It must get 405 because GET method is invalid for this operation
    });
    expect(response.status).toBe(405);
  });

  test("control for add operation with 1 param for POST method", async () => {
    const response = await axios.post(`${baseURL}/add`, {
      params: [1],
      //it should print exactly what the input is as a result, for this case it's 1      
    });

    expect(response.status).toBe(200);
    expect(response.data.result).toBe(1);
    alert('The result for your operation is 1.');
  });
});
