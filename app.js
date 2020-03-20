const mainPage = document.getElementById('mainpage')
const nameOneInput = document.getElementById('name1input')
const nameTwoInput = document.getElementById('name2input')
const submitButton=document.getElementById('submit-btn')
const secondPage = document.getElementById('secondPage')
const showResult = document.getElementById('secondPage')
const heartImage = document.getElementById('heart-img')
const brokenHeart = document.getElementById('broken-heart')

submitButton.addEventListener('click', ()=>{
    mainPage.classList.add('hide');
    showPercentage();
})

function showPercentage(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${nameOneInput.value}&sname=${nameTwoInput.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "02da8b37c2msh82b095702520360p1ca45bjsnfb930e5f3916"
	}
})
.then(res => res.json())
.then(data => {
   let percentage = document.createElement('div');
   percentage.setAttribute('id', "percentageId")

   percentage.innerHTML = `<p id="p1"> ${nameOneInput.value} and ${nameTwoInput.value} ,you have a </p><p id=p2"> ${data.percentage} % compatibility. <br><p id="p4"> Result: ${data.result} </p>`
    showResult.append(percentage)  
    
    if (`${data.percentage}` >= 50) {
        heartImage.classList.remove('hide');
    } 

    if (`${data.percentage}` < 50) {
        brokenHeart.classList.remove('hide');
    } 

})}