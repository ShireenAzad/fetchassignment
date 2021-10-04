import mocking from "../src/app"
describe("checking status",function()
{
    test("success ",async function() {

        expect(await mocking()).toBe("success")
    })
//     test("fail",async function() {
//         expect(await mocking()).toBe("cannot import")
//     })
})