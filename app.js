const counters =document.querySelectorAll('.counter')
//ในhtmlข้อมูลตัวเลขมันเป็นstring เราต้องเปลี่ยนประเภทข้อมูล
//เนื่องจากเราต้องการใช้ข้อมูลภายในอาเรย์เลยต้องใช้ forEach
counters.forEach(counter=>{
    counter.innerText = '0'
    const updateCounter = ()=>{ //จะดีงเอาตัวเลขที่อยู่ใน data target มาใช้ โดยใช้คำสั่ง getAttribute
        const target = +counter.getAttribute("data-target") //เครื่องหมาย + จะเปลี่ยน string เป็น number
        const start = +counter.innerText //จุดเริ่มต้นที่ 0 และไปจบที่ target
        const increment = target/200 //ทำการหน่วงเวลาการเพิ่มจำนวนโดยทำการหาร โดยตัวเลขมันจะเพิ่มเท่ากับจำนวนผลหารจนถึง target สุดท้าย
        if(start<target){ //ถ้าตัวเริ่มต้นน้อยกว่าค่าสุดท้าย จะทำการเพิ่มขึ้นเรื่อยๆ
            counter.innerText = `${Math.ceil(start+increment)}` //ใช้คลาส Math.ceil ในการปัดเศษไม่ให้มีเศษตัวเลข
            setTimeout(updateCounter,1) //ใช้ setTimeout เพื่อให้ทำงานแค่ครั้งเดียวโดยเรียกใช้ updateCounter
        }else{
            counter.innerText = target
        }

    }
    updateCounter()
})