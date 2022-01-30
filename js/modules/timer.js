function timer (id, deadline) {

    const addZero = (num) => {
        if(num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            // seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000/60 * 60 * 60)) % 24),
            days = Math.floor((t/(1000*60*60*24)));
            console.log('Date: ', + t);

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes
        };
    };

    const setClock = (selector, endtime) => {
        var day = 1;
        var  d = new Date().getDate();
        var c = new  Date('2021-11-9').getDate(); 
        console.log('D: ', d);
        console.log('c: ', c);
        if(c <= d ){
          for(var i = new Date('2021-11-9'); i<= new Date("11/15/2021"); i.setDate(i.getDate()+ 1)){
            c = c + day;
            console.log('Date seeet: ', c);
          }
        }
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();
            
            function updateClock() {
                var t = getTimeRemaining(endtime);
                days.textContent = addZero(t.days);
                hours.textContent = addZero(t.hours );
                minutes.textContent = addZero(t.minutes);
                console.log("endtime",t.days);
                if(t.total <= 0){
                    days.textContent ="00";
                    hours.textContent = "00";
                    minutes.textContent ="00"; 
                    clearInterval(timeInterval);
                    // var result = new Date(new Date(endtime).setDate(new Date(endtime).getDate() + day));
                    // console.log('Date: ', result);
                    // t = getTimeRemaining(result);
                }
            }
    };

   setClock(id, deadline);
}

export default timer;