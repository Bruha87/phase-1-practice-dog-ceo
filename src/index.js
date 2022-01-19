//console.log('%c HI', 'color: firebrick')

fetchDogs()
fetchBreeds()

const dropDown = document.querySelector('#breed-dropdown')
const imgDiv = document.querySelector('#dog-image-container')



function fetchDogs(){
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(dogObj => addImagesToDom(dogObj.message))
}

function fetchBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res=>res.json())
  .then(breedObj=>createBreedList(breedObj.message))
}

function addImagesToDom(dogImgArray){
  //console.log(dogObj);
  dogImgArray.forEach(dogUrl => {
    const img = document.createElement('img')
    img.src = dogUrl
    img.style.maxWidth = '300px'
    
    imgDiv.append(img)
  }
)}

function createBreedList(breedObj){
  const dogBreedList=document.querySelector('#dog-breeds')
  const breedArray=Object.keys(breedObj)
  console.log(breedArray)
  breedArray.forEach(breed=>{
      const dogBreedListItem=document.createElement('li')
      dogBreedListItem.textContent=breed
      dogBreedList.append(dogBreedListItem)
      dogBreedListItem.addEventListener('click', ()=>{
          dogBreedListItem.style.color="green"
          })
  })   
}








// function renderBreedlis(dogBreedObj){
//   const breedArray = Object.keys(dogBreedObj.message)
    
//   breedArray.forEach(breed => {
//     const breedLi = document.createElement('li')
//     breedLi.textContent = breed

//     breedLi.addEventListener("click", changeLiColor)

//     breedUl.append(breedLi)
//   })
// } 
  // console.log(breedObj);
    // console.log(typeof breedObj)
    //for (breed in breedObj.message){
        // console.log(`${breed}`)
    










