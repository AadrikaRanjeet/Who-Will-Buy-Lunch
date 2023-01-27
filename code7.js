const prompt=require("prompt-sync")();
var names=["Aadrika","Apoorva","Siddhi","Shreya","Akshata"];
var length=names.length;
function WhoIsBuying(names,length)
{
    var namePosition=Math.floor(Math.random()*length);
    return names[namePosition];
}
var ans =WhoIsBuying(names ,length);
console.log(ans +" is going to buy lunch for everyone");