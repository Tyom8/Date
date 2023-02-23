function myDate (year,month,date,hours,minutes,second,milisecond,weekday) {
    let t = new Date();
    this.year = year
    if (this.year === undefined) {
        this.year =  t.getFullYear();
    } else if (this.year === 0) {
        this.year = 1970
    };
    this.month = month
        let plusyear = Math.floor(this.month / 12);
        this.year = this.year + plusyear;
        let plusmonth = plusyear * 12;
        this.month = this.month - plusmonth
        if (this.month === 0 && this.month === 00) {
            this.month = "Hunvar"
        } else if (this.month === 1 && this.month === 01) {
            this.month = "Petrvar"
        }  else if (this.month === 2 && this.month === 02) {
            this.month = "Mart"
        }  else if (this.month === 3 && this.month === 03) {
            this.month = "April"
        }  else if (this.month === 4 && this.month === 04) {
            this.month = "Mayis"
        }  else if (this.month === 5 && this.month === 05) {
            this.month = "Hunis"
        }  else if (this.month === 6 && this.month === 06) {
            this.month = "Hulis"
        }  else if (this.month === 7 && this.month === 07) {
            this.month = "Ogostos"
        }  else if (this.month === 8 && this.month === 08) {
            this.month = "September"
        }  else if (this.month === 9 && this.month === 09) {
            this.month = "Hoktemer"
        }  else if (this.month === 10) {
            this.month = "Noyember"
        }  else if (this.month === 11) {
            this.month = "Dectember"
        }
        if (this.year === t.getFullYear()) {
        this.month = t.getMonth();
        if (this.month === 0 && this.month === 00) {
            this.month = "Hunvar"
        } else if (this.month === 1 && this.month === 01) {
            this.month = "Petrvar"
        }  else if (this.month === 2 && this.month === 02) {
            this.month = "Mart"
        }  else if (this.month === 3 && this.month === 03) {
            this.month = "April"
        }  else if (this.month === 4 && this.month === 04) {
            this.month = "Mayis"
        }  else if (this.month === 5 && this.month === 05) {
            this.month = "Hunis"
        }  else if (this.month === 6 && this.month === 06) {
            this.month = "Hulis"
        }  else if (this.month === 7 && this.month === 07) {
            this.month = "Ogostos"
        }  else if (this.month === 8 && this.month === 08) {
            this.month = "September"
        }  else if (this.month === 9 && this.month === 09) {
            this.month = "Hoktemer"
        }  else if (this.month === 10) {
            this.month = "Noyember"
        }  else if (this.month === 11) {
            this.month = "Dectember"
        }
    } else if (this.year !== undefined && this.month === undefined) {
        this.month = "Hunvar"
    } ;
    this.date = date 
    if (this.date <= 31) {
        this.date;
    }
    else if (this.date > 31 && this.date < 63) {
        let mnacord =   this.date - 31;
        this.month += 1,this.date = mnacord;
    }    else if (this.date > 62) {
        let mnacord =   this.date - 62;
        this.month += 2,this.date = mnacord;
    } else if (this.year === t.getFullYear()) {
        this.date = t.getDate();
    } else if (this.year !== undefined && this.date === undefined) {
        this.date = 01
    };    
    this.hours = hours
    if (this.year === t.getFullYear()) {
        this.hours = t.getHours()
    } else if (this.year !== undefined && this.hours === undefined) {
        this.hours = 04
    } else if (this.hours < 24) {
        this.hours = hours
    } else if (this.hours > 23 && this.hours < 48) {
        let mnacordhours = this.hours - 24;
        this.date++,this.hours = mnacordhours 
    } else if (this.hours > 47) {
        let mnacordhours = this.hours - 48;
        this.date += 2,this.hours = mnacordhours
    }
    this.minutes = minutes
    if (this.year === t.getFullYear()) {
        this.minutes = t.getMinutes();
    } else if (this.year !== undefined && this.hours === undefined) {
        this.minutes = 00
    } else if (this.year !== undefined && this.month !== undefined && this.date !== undefined && this.hours !== undefined && this.minutes === undefined) {
        this.minutes = 00
    } else if (this.minutes < 60) {
        this.minutes = minutes
    } else if (this.minutes > 59 && this. minutes < 120) {
        let mnacordminutes = this.minutes - 60;
        this.hours++,this.minutes = mnacordminutes;
    }
    this.second = second
    if (this.year === t.getFullYear()) {
        this.second = t.getSeconds();
    } else if (this.year !== undefined && this.minutes === undefined) {
        this.second = 00
    } else if (this.year !== undefined && this.month !== undefined && this.date !== undefined && this.hours !== undefined && this.minutes !== undefined && this.second === undefined) {
        this.second = 00
    } else if (this.second < 60) {
        this.second = second
    } else if (this.second > 59 && this. second < 120) {
        let mnacordsecond = this.second - 60;
        this.minutes++,this.second = mnacordsecond;
    }
    this.getFullYear = function() {
        if (this.year === undefined) {
            let x = new Date();
            return x.getFullYear();
        } else {
            return this.year;
        }
    },
    this.getMonth = function() {
        if (this.month === undefined && this.year === undefined) {
            let y = new Date();
            return y.getMonth();
        }
        else if (this.year !== undefined && this.month === undefined) {
            return 0
        }
         else  {
            return this.month;
        }
    },
    this.getDate = function () {
        if (this.month === undefined && this.year === undefined) {
            let y = new Date();
            return y.getDate();
        }
        else if (this.year !== undefined && this.month === undefined) {
            return 1
        }
        else {
            return this.date;
        }
    };
    this.getHours = function () {
        if (this.month === undefined && this.year === undefined && this.date === undefined) {
            let q = new Date();
            return q.getHours();
        }  else if (this.year !== undefined && this.month === undefined) {
            return 4
        } else if (this.year !== undefined && this.month !== undefined && this.date !== undefined && this.hours === undefined) {
            return 0
        }
         else {
            return this.hours
        }
    };
    this.getMinutes = function () {
        if (this.month === undefined && this.year === undefined && this.date === undefined && this.hours === undefined) {
            let q = new Date();
            return q.getMinutes();
        }  else if (this.year !== undefined && this.month === undefined) {
            return 0
        } else {
            return this.minutes
        }
    };
    this.getSeconds = function () {
        if (this.month === undefined && this.year === undefined && this.date === undefined && this.hours === undefined && this.minutes === undefined) {
            let q = new Date();
            return q.getSeconds();
        }  else if (this.year !== undefined && this.month === undefined) {
            return 0
        } else {
            return this.second
        }
    }
};

const mydate = new myDate(2022,800,25,12,55,44);
console.log(mydate);


        // this.date = date 
        // let plusmonth2 = Math.floor(this.date / 31);
        // this.month = this.month + plusmonth2;
        // let plusdate = plusmonth2 * 31;
        // this.date = this.date - plusdate;
