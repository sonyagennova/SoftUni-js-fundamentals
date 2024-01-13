function pirates(input){
    let cities = {};
    let array = [];

    
    
    while(input[0] !== 'Sail'){
        let command = input.shift().split("||");
        
        let city = command[0];
        let population = Number(command[1]);
        let gold = Number(command[2]);
        
        let result = array.find((x) => x.city === city);
        let index = array.indexOf(result);
        
        if(result){
            array[index].population += population;
            array[index].gold += gold;
        } else {
            cities = {city, population, gold};
            array.push(cities);
        }
    }
    
    let index = 1;
    let command = input[index];

    while(command != "End"){
        let commands = command.split("=>");
        //console.log(commands);

        if(commands[0] == "Prosper"){
            let city = commands[1];
            let gold = Number(commands[2]);

            for(let i = 0; i < array.length; i++){
                if(array[i].city == city){
                    if(Number(gold) > 0){
                        array[i].gold += Number(gold);
                        console.log(`${gold} gold added to the city treasury. ${city} now has ${array[i].gold} gold.`)
                    } else {
                        console.log("Gold added cannot be a negative number!");
                    }
                }
            }
        } else if(commands[0] == "Plunder"){
            let city = commands[1];
            let people = Number(commands[2]);
            let gold = Number(commands[3]);

            for(let i = 0; i < array.length; i++){
                if(array[i].city == city){
                    array[i].population -= people;
                    array[i].gold -= gold;

                    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                    if(array[i].population == 0 || array[i].gold == 0){
                        array.splice(i, 1);
                        console.log(`${city} has been wiped off the map!`);
                    }
                }
            }
        }
        
        index ++;
        command = input[index];
    }
    if(array.length > 0){
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);
        for(let i = 0; i < array.length; i++){
            console.log(`${array[i].city} -> Population: ${array[i].population} citizens, Gold: ${array[i].gold} kg`)
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"]);