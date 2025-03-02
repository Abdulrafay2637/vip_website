/*
function abc(){


      document.getElementById('ttt').innerHTML = 'Hello world'
      document.getElementById('anc').style.display = 'none'
    //document.getElementById('anc').innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia nobis modi? Eius ipsum aliquid, fuga mollitia amet beatae ducimus accusantium aut, distinctio fugiat ratione quo quia. Praesentium, rem laborum?'
    //alert('Hello world')
   // document.getElementById('abc').innerHTML = 'Hello world'

}

//abc()

*/

function cooking(e){
  document.getElementById('inp').value += e
}

function eq(){
  var a = document.getElementById('inp')
  a.value = eval(a.value)
}