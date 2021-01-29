document.getElementById('increase').addEventListener('click', function(){
    const currentValue = parseInt(document.getElementById('current-number').innerText);
    const newCurrentValue = currentValue + 1;
    console.log(newCurrentValue);
    document.getElementById('current-number').innerText = newCurrentValue;
})

document.getElementById('decrease').addEventListener('click', function(){
    const currentValue = parseInt(document.getElementById('current-number').innerText);
    const newCurrentValue = currentValue - 1;
    console.log(newCurrentValue);
    document.getElementById('current-number').innerText = newCurrentValue;
})

document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('current-number').innerText =0;
})