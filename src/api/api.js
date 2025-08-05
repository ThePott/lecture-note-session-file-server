const getApi = async () => {
    const res = await fetch("http://localhost:3000")
    // console.log("--- res:", await res.text()) // !!!! you can't consume res twice!
    return res
}

module.exports = { getApi }