import axios from "axios"; //library for http requests in JavaScript
import { describe,test,expect } from "vitest"; //import of the functions that will use

const baseURL = "https://fakestoreapi.com/auth/login"; //random URL for successful test

describe("API Operation Tests", () => {

  test("control for the API get 2 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [4, 8], //happy path scenario
    });
    expect(response.status).toBe(200); //4*8 = 32
    expect(response.data.result).toBe(32);
    alert('The result for your operation is 32.');
  });

  test("control for the API get 3 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [2, 3, 6], //happy path scenario
    });
    expect(response.status).toBe(200); //2*3*6 = 36
    expect(response.data.result).toBe(36);
    alert('The result for your operation is 36.');
  });

  test("control for the API get 4 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [2, 3, 4, 2], //happy path scenario
    });
    expect(response.status).toBe(200); //2*3*4*2 = 48
    expect(response.data.result).toBe(48);
    alert('The result for your operation is 48.');
  });

  test("control for the API get 5 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [2, 3, 6, 1, 2], //happy path scenario
    });
    expect(response.status).toBe(200); //2*3*6*1*2 = 72
    expect(response.data.result).toBe(72);
    alert('The result for your operation is 72.');
  });

  test("control for the API can't get more then 5 parameters as input for POST method", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
      params: [91, 30, 8, 6, 78, 65], 
    });
    expect(response.status).toBe(400); //method is correct but six parameters are invalid
  });

  test("control for the API can't get more then 5 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/mul`, {
      params: [2, 5, 6, 8, 10, 2], 
    //the GET method cannot be used for four operations(add,div,mul,sub) and multiple parameters
    });
    expect(response.status).toBe(405); //not allowed for GET operations
  });

  test("control for multiplying 1 case", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [245923490239402, 1], 
    });
    expect(response.status).toBe(200); //245923490239402*1 = 245923490239402
    expect(response.data.result).toBe(245923490239402);
    alert('The result for your operation is 245.923.490.239.402.');
  });

  test("control for multiplying -1 case", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [-1, 456457484], 
    });
    expect(response.status).toBe(200); //-1*456457484 = 456457484
    expect(response.data.result).toBe(456457484);
    alert('The result for your operation is 456.457.484.');
  });

  test("control for the API get 2 parameters as input for POST method with two negatives.", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [-969545, -652], 
    });
    expect(response.status).toBe(200); //-969545*-652 = 632143340
    expect(response.data.result).toBe(632143340);
    alert('The result for your operation is 632.143.340.');
  });

  test("control for the API get 2 parameters as input for POST method with one negative.", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [-123456789, 652], 
    });
    expect(response.status).toBe(200); //-123456789*652 = 80493826428
    expect(response.data.result).toBe(80493826428);
    alert('The result for your operation is 80.493.826.428.');
  });

  test("control for multiplying 0 case", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [567567, 0], //multiplying zero case
    });
    expect(response.status).toBe(200); //567567*0 = 0
    expect(response.data.result).toBe(0);
    alert('The result for your operation is 0.');
  });

  test("control for multiplying with two decimal case", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [567,567, 124,68], 
    });
    expect(response.status).toBe(200); //567567*0 = 70.764,25356
    expect(response.data.result).toBe(70764,25356);
    alert('The result for your operation is 70.764,25356.');
  });

  test("control for boundary values", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [999999999999999, 1], 
    });
    expect(response.status).toBe(200); //999.999.999.999.999*1 = 999.999.999.999.999
    expect(response.data.result).toBe(999999999999999);
    alert('The result for your operation is 999.999.999.999.999.');
  });

  test("control for boundary values for negative number", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [-999999999999999, 1], 
    });
    expect(response.status).toBe(200); //-999.999.999.999.999*1 = -999.999.999.999.999
    expect(response.data.result).toBe(-999999999999999);
    alert('The result for your operation is -999.999.999.999.999.');
  });

  test("control for the API get 2 parameters as input for GET method", async () => {
    const response = await axios.get(`${baseURL}/mul`, {
    params: [4, 8], //happy path scenario with GET method
    });
    expect(response.status).toBe(405); //4*8 = 32 but invalid method
  });

  test("control for non-numeric inpıt", async () => {
    const response = await axios.post(`${baseURL}/mul`, {
    params: [o, b], // wrong inputs as parameters.
    });
    expect(response.status).toBe(400);
    alert('Wrong input type!'); // ErrorMessage for wrong inputs.
  });

});
