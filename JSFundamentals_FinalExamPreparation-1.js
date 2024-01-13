function imitationGame(input){
    let message = input[0];
    let index = 1;

    let commands = input[index];

    while(commands !== "Decode"){
        let splittedCommand = commands.split("|");

        if(splittedCommand[0] == "Move"){
            let count = splittedCommand[1];
            let arr = Array.from(message);

            let firstNLetters = message.substring(0, count);
            arr.splice(0, count);

            message = arr.join('') + firstNLetters;
            
            //console.log(message);
        }

        if(splittedCommand[0] == 'Insert'){
            let i = splittedCommand[1];
            let value = splittedCommand[2];
            
            let arr = Array.from(message);
            if(i == '0'){
                arr[Number(i)] = value + arr[Number(i)];
            } else {
                arr[Number(i)-1] += value;
            }

            message = arr.join("");
            //console.log(message);
        }

        if(splittedCommand[0] == "ChangeAll"){
            let substring = splittedCommand[1];
            let replacement = splittedCommand[2];
            for(letter of message){
                if(message.includes(substring)){
                    message = message.replace(substring, replacement);
                }
            }
            //console.log(message);
        }

        index ++;
        commands = input[index];
    }
    console.log("The decrypted message is: " + message);
}

imitationGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ]);