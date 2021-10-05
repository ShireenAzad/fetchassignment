import {mocking} from "../src/app"
import fetchMock from "jest-fetch-mock";
jest.mock("../src/app.ts")
fetchMock.enableMocks();

describe("api fetched or not",function()
{
    
    it("failedcase",async function ():Promise<any> {
        
        fetchMock.mockReject(async () =>await mocking().then(() => 
        {
            Promise.reject("failed")
            expect.assertions(1)

        } 
        )

        ) 
        
        
        
        
    })
    it("success case",async function (): Promise<any>{
        //expect.assertions(1)
        fetchMock.mockResponse(async () => await mocking().then(() => {
            expect.assertions(1)
            return "success"}
        ))
        
    })
    
    
})   

//Fetching manually without mocking by using Try catch
// describe("checking status",function()
// {
//     test("checking the status whether  pass or fail", async function () 
        
//     {
        
//         try {
//             const solution=await mocking()
//         expect(solution).toBe("success")
//         console.log("success")
//         } catch (e) {
//           expect(e).toMatch('null');
//           console.log("Failed")
//         }
//       });
// })

//Using fetch ,mock implementation by resolving promises 
  
//   it('success test case', async function ()  {
//     const mockSuccessResponse = await fetch( `https://dog.ceo/api/breeds/image/random`);
//     const mockJsonPromise = Promise.resolve(mockSuccessResponse);
//     const mockFetchPromise = Promise.resolve({
//         json: () => mockJsonPromise,
//     });
//     var globalRef:any =global;
//     globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    

//     mocking();

//   });
//   it('failed test case', async function ()  {
//     jest.fn().mockImplementationOnce(() => Promise.reject('null'));
//     mocking();

//   });