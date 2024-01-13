function degustation(input){
    let index = 0;
    let guests = {};
    let array = [];

    let commands = input[index];
    let unliked = 0;
    while(commands !== "Stop"){
        let splittedCommands = commands.split("-");
        let name = splittedCommands[1];
        let meal = splittedCommands[2];

        
        if(splittedCommands[0] === "Like"){
            let result = array.find((x) => x.name === name);
            let result1 = array.find((x) => x.meal.includes(meal));
            let index = array.indexOf(result);
            if(result && !result1){
                array[index].meal += ", " + meal;
            } else if(!result){
                guests = {name, meal};
                array.push(guests);
            }
        } else if(splittedCommands[0] === "Dislike"){
            let result = array.find((x) => x.name === name);
            let result1 = array.find((x) => x.meal.includes(meal));
            let index = array.indexOf(result);

            if(result && result1){
                array[index].meal = array[index].meal.replace(meal, "");
                console.log(`${name} doesn't like the ${meal}.`)
                unliked += 1;
            } else if(!result){
                console.log(`${name} is not at the party.`);
            } else if(!result1){
                console.log(`${name} doesn't have the ${meal} in his/her collection.`);
            }
        }
        index++;
        commands = input[index];
    }
    for(let i = 0; i < array.length; i++){
        let arr = array[i].meal.split(", ");
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === ""){
                arr.splice(i, 1);
            }
        }
        console.log(`${array[i].name}: ${arr.join(", ").trim()}`);
    }
    console.log(`Unliked meals: ${unliked}`);
    // console.log(array[0])
}
degustation(["Like-Katy-fish",
"Like-Katy-peas",
"Like-Katy-peas",
"Dislike-Katy-fish",
"Like-Katy-Bread",
"Like-Katy-fish",
"Dislike-Katy-Bread",
"Like-Mattew-salad",
"Dislike-Mattew-salad",
"Dislike-Mattew-iceCream",
"Stop"]);