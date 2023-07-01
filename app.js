function BMICalcuator() {
    alert("Daha iyi sonuçlar için lütfen vücut bilgilerinizi doğru girin");
    const weight = parseFloat(prompt("Kilonuzu girin (KG):"));
    const height = parseFloat(prompt("Boyunuzu girin (M):"));
    const BMI = weight / (height*height);
    alert("Beden Kitle İndeksiniz (BMI): " + BMI);
    console.log(BMI);
    if(BMI < 18.5){
        var weakMessage = alert("Sonuç: Zayıfsınız");
        console.log(weakMessage);
    }else if(BMI > 18.5 && BMI < 25){
        var healtyMessage = alert("Sonuç : Oldukça sağlıksınız");
        console.log(healtyMessage);
    }else if(BMI > 25 && BMI < 30){
        var fatMessage = alert("Sonuç: Kilolusunuz");
        console.log(fatMessage);
    }else if(BMI > 30 && BMI < 35){
        var obeseMessage1th = alert("Sonuç: 1.derece obezsiniz");
        console.log(obeseMessage1th);
    }else if(BMI > 35 && BMI < 40){
        var obeseMessage2th = alert("Sonuç: 2.derece obezsiniz. Doktora Görünmelisiniz ve Spor faliyerlerini aksatmamalısınız.");
        console.log(obeseMessage2th);
    }else if(BMI > 35 && BMI < 40){
        var obeseMessage3th = alert("Sonuç: 3.derece obezsiniz. Doktora Görünmelisiniz ve Spor faliyerlerini aksatmamalısınız. Durumuzun ciddi olmakla beraber tibbi müdahale gerektirebilir.");
        console.log(obeseMessage2th);
    }else{
        loginErrorMessage = alert("Lütfen geçerli bir giriş yapınız.");
        console.log(loginErrorMessage);
    }
  
}
  BMICalcuator();
  


  /*
  sonuç < 18,5 ise Zayıf
18,5 < sonuç < 25 ise Normal
25 < sonuç < 30 ise Fazla kilolu
30 < sonuç < 35 ise 1. derece obez
35 < sonuç < 40 ise 2. derece obez
40 < sonuç < 45 ise 3. derece obez
*/