function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div.target')
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length, i++) {
    number = parseInt(lis[i].innerHTML, 10)
    number + n
  }
}

function deepestChild(){

}
