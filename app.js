var boxes = document.getElementById("boxes")
var listNumbers = [0,1,2,3,4,5,6,7,8];
var human = "box boxHuman"
var computer = "box boxComputer"

for (var x=0; x< boxes.children.length; x++)
{
  boxes.children[x].setAttribute("id",x)
}

for (var i = 0; i < boxes.children.length; i++)
{

  boxes.children[i].addEventListener("click", function()
  {
    this.className += " boxHuman"
    var tall = listNumbers.indexOf(parseInt(this.id));
    if(tall > -1)
    {
      listNumbers.splice(tall,1);
    }
    if(winningComboHuman()==true){
      setTimeout(function(){
        alert("Gratulerer du vant")
        return restart()
      },500)
    }
    if (listNumbers.length==0){
      setTimeout(function(){
        alert("Uavgjort")
        return restart()
      },500)
    }
    if (listNumbers.length > 0 && winningComboHuman() == false)
    {
      var valgt = Math.floor(Math.random()*listNumbers.length)
      var test = listNumbers[valgt];
      document.getElementById(test).className += " boxComputer"
      if(valgt > -1)
      {
        listNumbers.splice(valgt,1);
      }
    }
    if(winningComboComputer()==true){
      setTimeout(function(){
        alert("Du tapte desverre")
        return restart()
      },500)
    }
  })
  // Gjør at det blir en sirkel når musen beveger seg over.
  boxes.children[i].addEventListener("mouseover", function()
  {
    this.style.backgroundImage = "url('img/o.svg')";
  })
  // Gjør at sirkelen forvinner når musen fjernes
  boxes.children[i].addEventListener("mouseout", function()
  {
    this.style.backgroundImage = "";
  })
}
function winningComboHuman(){
  if (
    (boxes.children[0].className == human && boxes.children[1].className == human && boxes.children[2].className == human) ||
    (boxes.children[3].className == human && boxes.children[4].className == human && boxes.children[5].className == human) ||
    (boxes.children[6].className == human && boxes.children[7].className == human && boxes.children[8].className == human) ||
    (boxes.children[0].className == human && boxes.children[3].className == human && boxes.children[6].className == human) ||
    (boxes.children[1].className == human && boxes.children[4].className == human && boxes.children[7].className == human) ||
    (boxes.children[2].className == human && boxes.children[5].className == human && boxes.children[8].className == human) ||
    (boxes.children[0].className == human && boxes.children[4].className == human && boxes.children[8].className == human) ||
    (boxes.children[2].className == human && boxes.children[4].className == human && boxes.children[6].className == human)
  ){
    return true;
  } else {
    return false;
  }
}
function winningComboComputer(){
  if (
    (boxes.children[0].className == computer && boxes.children[1].className == computer && boxes.children[2].className == computer) ||
    (boxes.children[3].className == computer && boxes.children[4].className == computer && boxes.children[5].className == computer) ||
    (boxes.children[6].className == computer && boxes.children[7].className == computer && boxes.children[8].className == computer) ||
    (boxes.children[0].className == computer && boxes.children[3].className == computer && boxes.children[6].className == computer) ||
    (boxes.children[1].className == computer && boxes.children[4].className == computer && boxes.children[7].className == computer) ||
    (boxes.children[2].className == computer && boxes.children[5].className == computer && boxes.children[8].className == computer) ||
    (boxes.children[0].className == computer && boxes.children[4].className == computer && boxes.children[8].className == computer) ||
    (boxes.children[2].className == computer && boxes.children[4].className == computer && boxes.children[6].className == computer)
  ){
    return true;
  } else {
    return false;
  }
}
function restart(){
  listNumbers = [0,1,2,3,4,5,6,7,8]
  for (var y = 0; y < boxes.children.length; y++){
    boxes.children[y].className = boxes.children[y].className.replace(" boxHuman", "");
    boxes.children[y].className = boxes.children[y].className.replace(" boxComputer", "");
  }
}
