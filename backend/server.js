let fullname = "Dilip Sanp";
let res=''
for (let i = fullname.length-1; i >= 0; i--){
    res += fullname[i];
}
console.log(res)

for (let i = fullname.length - 1; i >= 0; i--) {
    console.log(fullname[i]);
}

let result=''
for (let i = 0; i < fullname.length; i++){
    if (fullname[i] == "S" || fullname[i] == "a" || fullname[i] == "n") {
        continue;
    } else {
        result+=fullname[i]
    }
}
console.log(result)

