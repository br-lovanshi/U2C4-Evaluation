// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",mainfun)
var arr = JSON.parse(localStorage.getItem("schedule")) ||  [] ;
function mainfun(){
event.preventDefault();
    var obj = {
    matchnum:masaiForm.matchNum.value,
    teama:masaiForm.teamA.value,
    teamb:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value
    }
    arr.push(obj); 
    console.log(arr);
    localStorage.setItem("schedule",JSON.stringify(arr))
    
}