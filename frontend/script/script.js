const api_call = () => {

    let file = []
    fetch("https://localhost:4000/sheet",{method: 'GET'})
        .then(res => res.json())
        .then(data => {
            file.push(data)
        })

    console.log(file)
}
