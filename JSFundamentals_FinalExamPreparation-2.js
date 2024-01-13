function adAstra(input){
    let regex = /([\|#])(?<name>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;

    let days = 0;
    let caloriesSum = 0;
    let allProducts = [];
    let output = [];

    let matches = regex.exec(input);

    while(matches){
        let kcal = matches.groups['kcal'];
        let name = matches.groups['name'];
        let date = matches.groups['date'];

        caloriesSum += Number(kcal);
        let currentProduct = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
        allProducts.push(currentProduct);

        matches = regex.exec(input);
    }
    days = caloriesSum / 2000;
    console.log(`You have food to last you for: ${Math.floor(days).toFixed(0)} days!`);
    for(product of allProducts){
        console.log(product);
    }
   
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])