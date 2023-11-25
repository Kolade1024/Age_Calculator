const arrowBTN = document.querySelector(".arrow");

const DAY = document.querySelector("#day");

const MONTH = document.querySelector("#month");

const YEAR = document.querySelector("#year");

const daysOld = document.querySelector(".days span");

const monthsOld = document.querySelector(".months span");

const yearsOld = document.querySelector(".years span");

const topSpan = document.querySelector(".Month .topSpan");
const emPty = document.querySelector(".Month .emPty");
const Valid = document.querySelector(".Month .Valid");

const topSpan1 = document.querySelector(".day .topSpan");
const emPty1 = document.querySelector(".day .emPty");
const Valid1 = document.querySelector(".day .Valid");

const topSpan2 = document.querySelector(".Year .topSpan");
const emPty2 = document.querySelector(".Year .emPty");
const Valid2 = document.querySelector(".Year .Valid"); 


arrowBTN.addEventListener("click", (e)=>{

    let BirthDate = new Date(`${YEAR.value},${MONTH.value},${DAY.value}`);
    console.log(BirthDate);
    
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let timeDifference = currentDate - BirthDate;
    let ageInMilliseconds = new Date(timeDifference);
    
    let BirthYear = ageInMilliseconds.getUTCFullYear() - 1970;
    let BirthMonth = ageInMilliseconds.getUTCMonth();
    let BirthDay = ageInMilliseconds.getUTCDate() - 1;
    
  
    
/* MONTH VALIDATION */
    if(MONTH.value>12){
        MONTH.classList.add("borderError");
        MONTH.classList.remove("noError");
        topSpan.classList.add("errorState");
        emPty.classList.add("hidden");
        Valid.classList.remove("hidden");
    }else if(MONTH.value==""){
        topSpan.classList.add("errorState");
        MONTH.classList.remove("noError");
        MONTH.classList.add("borderError");
        emPty.classList.remove("hidden");
        Valid.classList.add("hidden");
    }
    else{
        topSpan.classList.remove("errorState");
        MONTH.classList.remove("borderError");
        MONTH.classList.add("noError");
        emPty.classList.add("hidden");
        Valid.classList.add("hidden");
        let start = 0;
        let end = Math.abs(BirthMonth);
        let myInterval = setInterval(() => {
            start++;
            monthsOld.textContent = start;
            if(start==end){
                clearInterval(myInterval);
            }
        }, 50);
        
    };

   

    /* DAY VALIDATION */
    if(DAY.value>31){
        DAY.classList.add("borderError");
        DAY.classList.remove("noError");
        topSpan1.classList.add("errorState");
        emPty1.classList.add("hidden");
        Valid1.classList.remove("hidden");
    }else if(DAY.value==""){

        topSpan1.classList.add("errorState");
        DAY.classList.remove("noError");
        DAY.classList.add("borderError");
        emPty1.classList.remove("hidden");
        Valid1.classList.add("hidden");
    }
    else{
        topSpan1.classList.remove("errorState");
        DAY.classList.remove("borderError");
        DAY.classList.add("noError");
        emPty1.classList.add("hidden");
        Valid1.classList.add("hidden");
        let start = 0;
        let end = Math.abs(BirthDay);
        let myInterval = setInterval(() => {
            start++;
            daysOld.textContent = start;
            if(start==end){
                clearInterval(myInterval);
            }
        }, 50);
    };

/* YEAR VALIDATION */
    if(YEAR.value>currentYear){
        YEAR.classList.add("borderError");
        YEAR.classList.remove("noError");
        topSpan2.classList.add("errorState");
        emPty2.classList.add("hidden");
        Valid2.classList.remove("hidden");
    }else if(YEAR.value==""){
        topSpan2.classList.add("errorState");
        YEAR.classList.remove("noError");
        YEAR.classList.add("borderError");
        emPty2.classList.remove("hidden");
        Valid2.classList.add("hidden");
    }
    else{
        topSpan2.classList.remove("errorState");
        YEAR.classList.remove("borderError");
        YEAR.classList.add("noError");
        emPty2.classList.add("hidden");
        Valid2.classList.add("hidden");
        let start = 0;
        let end = Math.abs(BirthYear);
        let myInterval = setInterval(() => {
            start++;
            yearsOld.textContent = start;
            if(start==end){
                clearInterval(myInterval);
            }
        }, 50);
        
    };
    
})