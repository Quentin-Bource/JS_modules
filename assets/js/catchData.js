export async function catchData()
{
    //récuperer l'input
    let input = document.getElementById('chooseCity');
    let inputValue = input.value;

    let city = inputValue


    let tmp = JSON.parse(localStorage.getItem("response"));
    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d6972f200ed637ee7fd868fe68f3bf7e&units=metric`,
    //  {
    //       method: 'GET'
    //   }
    //  );
    // let stock = await response.json();
    stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));
    allTimes = stock.list;
    console.log(" " + allTimes[0].dt_txt + " " +  allTimes[0].main.temp + " " + allTimes[0].weather[0].description + " " + stock.city.name);







    let date = new Date (allTimes[0].dt_txt)
    console.log(date.getDate())

    //div complete
   let newDiv = document.createElement('div')
   newDiv.classList.add('weather')
   document.getElementById('main').appendChild(newDiv)

    //h2 Nom de la ville
   let newCity = document.createElement('h2')
   newCity.classList.add('nameCity')
   newCity.appendChild(document.createTextNode(stock.city.name))
   newDiv.appendChild(newCity)

   // temperature actuelle + date
   let newTemp = document.createElement('div')
   newTemp.classList.add('tempToday')
   newTemp.appendChild(document.createTextNode(allTimes[0].dt_txt.split('-')[2].split(' ')[0] + '/' + allTimes[0].dt_txt.split('-')[1]+ " "  + allTimes[0].main.temp.toFixed(0) + '°c'))
   newDiv.appendChild(newTemp)

       //delete button
       let newDel = document.createElement('button')
       newDel.classList.add('delete')
       newDiv.appendChild(newDel)
       //img button 
        let imgDel = document.createElement('img')
       imgDel.classList.add('imgDelete')
       imgDel.setAttribute('src', 'assets/img/delete.png')
       newDel.appendChild(imgDel)

   // les 5 prochain jour tout
   let newDay = document.createElement('div')
   newDay.classList.add('alltemp')
   newDiv.appendChild(newDay)

 

   // 1 jour
   let newDay1 = document.createElement('div')
   newDay1.classList.add('temp1')
   newDay.appendChild(newDay1)

      //2 jour
      let newDay2 = document.createElement('div')
      newDay2.classList.add('temp2')
      newDay.appendChild(newDay2)
   
       //3jour
      let newDay3 = document.createElement('div')
      newDay3.classList.add('temp3')
      newDay.appendChild(newDay3)
   
      //4jour
      let newDay4 = document.createElement('div')
      newDay4.classList.add('temp4')
      newDay.appendChild(newDay4)
   
      //5jour
      let newDay5 = document.createElement('div')
      newDay5.classList.add('temp5')
      newDay.appendChild(newDay5)



  

   TempsDays(date, newDay1, newDay2, newDay3, newDay4, newDay5);
   
   bgcolor(newTemp);

}
    