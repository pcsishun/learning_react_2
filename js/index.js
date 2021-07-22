// JAVASCRIPT //

// เขียนแบบเต็ม

// document.addEventListener('DOMContentLoaded', render)
 
// function render(){
//     let counting = 0;
//     function justClick (){
//         console.log('click');
//         console.log(counting);
//         counting ++;
    
//         function updateElement(element){
//             element.innerHTML = counting;
//         }
        
//         if (counting === 10){
//             counting = 0;
//             alert('Reset click');
//         }
//         // document.querySelector('p').innerHTML = counting;
    
//         //   กรณีต้องการ update tag  <p> มากกว่า 1 ตัว ต้องใช้ loop
//         //   นับจำนวน <p> ทั้งหมด เเละจะถูกเก็บออกมาเป็น array 
    
//         // เขียนแบบเต็มรูปปแบบ // 
//         // const element = document.querySelectorAll('p') // คำสั่งนี้จะนับจำนวน <p> ทั้งหมดใน html
//         // for (let i = 0; i < element.length; i++){
//         //     element[i].innerHTML = counting; 
//         // }
    
//         // เขียนแบบย่อส่วน // 
//         document.querySelectorAll('p').forEach(updateElement)
//     }
//     const button = document.querySelector('button');
//     button.onclick = justClick;
// }

// เขียนแบบลดรูป 


document.addEventListener('DOMContentLoaded', function(){
    let counting = 0;
    const button = document.querySelector('button');

    button.onclick = function(){
        counting ++ ;
        function updateElement(element){
            element.innerHTML = counting;
        }

        if (counting === 10){
            counting = 0;
            alert('Reset count')   
        }

        document.querySelectorAll("#count-tag > p").forEach(updateElement);
    }
    
    function updateName(){
        const fistName = document.querySelector("#fistname").value;
        const lastName = document.querySelector("#lastname").value;

        document.querySelector("#show-user-name").innerHTML = "Hello " + fistName + ' ' + lastName;
    }
    document.querySelector("#fistname").onkeyup = updateName;
    document.querySelector("#lastname").onkeyup = updateName;

})







