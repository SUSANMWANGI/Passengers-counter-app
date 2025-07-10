
let count =0
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")




function increament(){
    count=count+1
    countEl.innerText=count
}
function save(){
    let countStr = count + " -"
    saveEl.innerText+=countStr
    
    

}