const { getApi } = require("../../src/api/api")

it("get api를 호출한다", async () => {
    const res = await getApi()
    const text = await res.text()
    expect(res.status).toBe(200)
    expect(text).toBe("---- 캬 난 천재야")
})