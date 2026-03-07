function trivia(trivias) {
    const trivialist = document.getElementById("trivialist");
    trivialist.innerHTML = `<p>${trivias.Question}</p>
    <p>${trivias.Answer}</p>`;
}
async function asincronia() {
    fetch(`https://opentdb.com/api.php?amount=1`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let trivias = {
            Question: data.results[0].question,
            Answer: data.results[0].correct_answer
        }
        console.log(trivias)
        trivia(trivias);
    })
    .catch(error => console.error('Error:', error));
}          
asincronia();
