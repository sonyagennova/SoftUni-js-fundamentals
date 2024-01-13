function password(input){
    let regex = /(.+)(>)(?<number>\d+)(\|)(?<lowerCase>[a-z]+)\4(?<upperCase>[A-Z]+)\4(?<symbols>[^<>]+)(<)\1/gm;
    let count = Number(input[0]);
    input.shift();
    let index = 0;
    let pass = input[index];

    let matches = regex.exec(pass);
    let result = pass.match(regex);
    
    for(let i = 0; i < count; i++){
        if(matches && pass === result[0]){
            console.log(`Password: ${matches.groups['number'] + matches.groups['lowerCase'] 
            + matches.groups['upperCase'] + matches.groups['symbols']}`);
        } else {
            console.log("Try another password!");
        }
        index ++;
        if(index < input.length){
            pass = input[index];
            matches = regex.exec(pass);
            result = pass.match(regex);
        }
    }
}
password(["4",
"##>00|no|NO|!!!?<###",
"##>1|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$",
"ll<2|hjku|MOON!<lll"]);