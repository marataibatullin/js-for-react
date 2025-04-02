console.log('var и функциональная область видимости');
function exampleVar() {
    var x = 10;
    if (true) {
      var x = 20; // Перезаписывает x
      console.log(x); // 20
    }
    console.log(x); // 20, а не 10
  }
  exampleVar();


console.log('let и блочная область видимости');
  function exampleLet() {
    let y = 10;
    if (true) {
      let y = 20; // Отдельная переменная внутри блока
      console.log(y); // 20
    }
    console.log(y); // 10
  }
  exampleLet();


console.log('const и неизменяемость');
const z = 30;
// z = 40; // Ошибка: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // Разрешено, изменяется содержимое объекта
console.log(obj.a); // 2


console.log('Hoisting с var');
console.log(a); // undefined
var a = 5;


console.log('Ошибка с let до объявления');
// console.log(b); // Ошибка: Cannot access 'b' before initialization
let b = 10;

// Напишите функцию testScope, которая:
// Объявляет переменную var внутри функции и перезаписывает её в блоке if.
// Объявляет переменную let внутри функции и пытается объявить такую же внутри блока if.
// Объявляет переменную const с объектом { value: 100 } и изменяет свойство value.
// Выведите значения всех переменных в консоль внутри и вне блоков.
// Объясните, почему результаты различаются.

function testScope() {
    console.log('Задание');
    var testVar = 1;
    if (true) {
        var a = 3;
        console.log(testVar);
    }
    console.log(testVar);
    
    let testLet = 1;
    if (true) {
        let testLet = 3;
        console.log(testLet);
    }
    console.log(testLet);

    const testObject = { value: 100 };
    console.log(testObject.value);
    testObject.value = 99;
    console.log(testObject.value);
};

testScope()



// Переменная var testVar в функции testScope имеет функциональную область видимости, 
// поэтому её переобъявление внутри if изменяет значение для всей функции — оба console.log(testVar) выводят 3. 
// Переменная let testLet имеет блочную область видимости, поэтому внутри if создаётся новая переменная testLet, не влияющая на внешнюю testLet. 
// В результате внутри блока выводится 3, а снаружи — 1.
// Константа testObject позволяет изменять свойства объекта, так как const фиксирует только ссылку на объект, а не его содержимое.


// Усложненное задание
// Предскажите, что выведет каждый console.log в коде выше.
// Напишите объяснение для каждого вывода, учитывая:
// // Область видимости var, let и const.
// // Поведение при переобъявлении и изменении значений.
// // Влияние вложенных блоков.



function trickyScope() {
    var x = 1;
    let y = 2;
    const z = { value: 3 };
    console.log("Объявлены(var, let, const.value):", x, y, z.value);

    if (true) {
        var x = 10; // Перезапись? да
        let y = 20; // Новая переменная? да
        z.value = 30; // Изменение свойства

        console.log("Внутри первого if:", x, y, z.value); // 10, 20, 30

        {
            var x = 100; // Ещё одна перезапись? да
            let y = 200; // Ещё одна новая переменная? да
            const z = { value: 300 }; // Новая константа? да

            console.log("Внутри вложенного блока:", x, y, z.value); // 100, 200, 300
        }

        console.log("После вложенного блока:", x, y, z.value); // 100, 20, 300 (ошибся) - верно 100, 20, 30
    }

    console.log("Вне if:", x, y, z.value); // 100, 2, 300 (ошибся) - верно 100, 2, 30
}

trickyScope();