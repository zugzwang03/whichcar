function myFunction() {
    var Price = document.getElementById("Price").value;

    var d = document.getElementById("Colour");
    var Colour = d.options[d.selectedIndex].text;

    var e = document.getElementById("Types");
    //var value = e.value;
    var Types = e.options[e.selectedIndex].text;

    var obj = {
        "obj1": [
            {
                "car" : "Maruti S-Presso (Petrol)",
                "colour" : ["Red 🔴","Blue 🔵","Black ⚫","White ⚪"],
                "colr" : "🔴 🔵 ⚫ ⚪",
                "type" : "SUV",
                "price" : 4.7
            },
            {
                "car" : "Maruti",
                "colour" : ["Red 🔴","Blue 🔵"],
                "colr" : "🔴 🔵 ⚫ ⚪",
                "type" : "SUV",
                "price" : 18
            },
            {
                "car" : "H City",
                "colour" : ["Red 🔴","Blue 🔵","Black ⚫"],
                "colr" : "🔴 🔵 ⚫ ⚪",
                "type" : "SUV",
                "price" : 12
            }
    ]
    };

    let resultCar = [];
    let resultPrice = [];
    let j = 0;
    let t = "";
    let cl = "";
    for(let i=0; i<obj.obj1.length; i++)
    {
        let clr = 0;
        
        

        if(obj.obj1[i]["price"]<=Price && obj.obj1[i]["type"]==Types){
            for(let k=0; k<obj.obj1[i].colour.length; k++)
            {
                if(obj.obj1[i].colour[k]==Colour){
                    clr = 1;
                }
                cl = cl + obj.obj1[i].colour[k].substring(obj.obj1[i].colour[k].length-1,1) + " ";
            }
            if(clr==1){
                resultCar[j] = obj.obj1[i]["car"];
                resultPrice[j] = obj.obj1[i]["price"] + " lacs " + " | " + obj.obj1[i].colr;
                j = j+1;
            }
        }
    }

    console.log("resultCar");
    console.log(resultPrice.length);

    for(let i=0; i<resultCar.length-1; i++)
    {
        t = t + resultCar[i] + " : Rs. " + resultPrice[i] + "\n";
    }
    t = t + resultCar[resultCar.length-1] + " : Rs. " + resultPrice[resultCar.length-1];

    document.querySelector('#demo').textContent = t;
}