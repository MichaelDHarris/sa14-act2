function convert() {
    const source = document.getElementById('source').value;
    const target = document.getElementById('target').value;
    const amount = document.getElementById('amount').value;
    fetch(`https://v6.exchangerate-api.com/v6/c479ad92cc11082fb9bfa2cd/latest/${source}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[target];
            const convertedAmount = rate * amount;
            document.getElementById('result').innerHTML = `${amount} ${source} = ${convertedAmount} ${target}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerHTML = 'Error occurred fetching data.';
        });
}