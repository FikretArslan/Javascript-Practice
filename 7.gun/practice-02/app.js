function sicaklikHesaplama(){

    function celVeFah(celsius){
        
        let fahrenheit = Math.round(celsius*(9/5)+32);
        return fahrenheit
    }

    function fahVeCel(fahrenheit){

        let celsius = Math.round((fahrenheit-32)*5/9);
        return celsius;
    }

    let tempSecim = document.querySelectorAll("#sayi_deger");
    console.log(tempSecim.options);
    let valueTemp = tempSecim.options[tempSecim.selectedIndex].value;
    console.log(valueTemp)
    let numberTemp = document.querySelector("#deger").value;

    let result;
    if(valueTemp == 1){
        result = celVeFah(numberTemp);
        document.querySelector(".sonuc").innerHTML = ` ${result} Fahrenheit`;
    }
    else{
        result = fahVeCel(numberTemp);
        document.querySelector(".sonuc").innerHTML = ` ${result} Celcius`;
    }
}
