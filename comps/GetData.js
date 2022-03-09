const GetData = (input) => {
    console.log(input)
    fetch(input)
        .then(response => response.json())
        .then(data => console.log(data));
}

 
export default GetData;