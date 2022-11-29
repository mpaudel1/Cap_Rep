function budget() {
    const p1_cost = document.getElementById('p1_cost');
    const p1_quantity = document.getElementById('p1_quantity');
    const budget = document.getElementById('budget');
    const p1_dif = int(budget)-int(p1_cost);
    const p1 = document.getElementById('p1')
    if ((p1_cost&&budget)!= null) {
        document.getElementById("p1_rembalance").innerHTML =
        "You're remaining balance after purchasing "+ p1 + " is " + p1_dif;
    }
}
const chromosome = document.getElementById('p1');
function test(){
    document.getElementById("input").innerHTML = chromosome;
}

function result() {

    
    if (!isNaN(numberValue))
        console.log("The value=" + parseInt(dif));
    else
        console.log("Please enter the integer value..");
}
