let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];

cargoHold.forEach(element => {
    console.log("Внимание: груз", element, "проверен")
    if( element == "Кристаллы"){
         console.log("⚠️ Внимание! Обнаружен ценный груз!")
    }
 });

 let last = cargoHold.pop();
 console.log("Разгружен последний отсек:",last)

 let scienceCarlgo = cargoHold.slice(1,4);
 console.log(scienceCarlgo);
console.log(cargoHold);

cargoHold.splice(1,2);
console.log(cargoHold);

cargoHold.splice(1,0,'Золото','Детектор лжи');
console.log(cargoHold);