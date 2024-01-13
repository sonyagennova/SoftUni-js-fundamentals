function decrypting(input){
    let text = input[0];

    let index = 1;
    let command = input[index];

    while(command !== "Finish"){
        let splittedCommand = command.split(" ");

        if(splittedCommand[0] === "Replace"){
            for(letter of text){
                if(text.includes(splittedCommand[1])){
                    text = text.replace(splittedCommand[1], splittedCommand[2]);
                }
            }
            console.log(text);
        } else if(splittedCommand[0] === "Cut"){
            let startIndex = Number(splittedCommand[1]);
            let endIndex = Number(splittedCommand[2]);

            let array = Array.from(text);
            if(startIndex < array.length && startIndex >= 0 && endIndex < array.length && endIndex > 0){
                array.splice(startIndex, (endIndex - startIndex)+1);
                text = array.join('');
                console.log(text);
            } else {
                console.log("Invalid indices!");
            }

        } else if(splittedCommand[0] === "Make"){
            let font = splittedCommand[1];
            if(font === "Upper"){
                text = text.toUpperCase();
            } else if(font === "Lower"){
                text = text.toLowerCase();
            }
            console.log(text);
        } else if(splittedCommand[0] === "Check"){
            let string = splittedCommand[1];
            if(text.includes(splittedCommand[1])){
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else if(splittedCommand[0] === "Sum"){
            let startIndex = Number(splittedCommand[1]);
            let endIndex = Number(splittedCommand[2]);
            let array = Array.from(text);

            if(startIndex < array.length && startIndex >= 0 && endIndex < array.length && endIndex > 0){
                let substring = text.substring(startIndex, endIndex+1);
                let arrayText = Array.from(substring);
                let sum = 0;

                for(let i = 0; i < arrayText.length; i++){
                    let ascii = Number(substring.charCodeAt(i));
                    sum += ascii;
                }
                console.log(sum);
            } else {
                console.log("Invalid indices!");
            }
        }

        index ++;
        command = input[index];
    }
}
decrypting(["HappyNameDay",
"Replace p r",
"Make Lower",
"Cut 2 1",
"Sum -2 -1",
"Finish"]);