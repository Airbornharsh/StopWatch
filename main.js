class Watch {
 constructor() {
  this.startcheck = true;
  this.stopcheck = true;
  this.i = 0;
  this.j = 0;
  this.m = 0;
  this.c = 0;
  this.click();
 }

 click() {
  this.watch = document.getElementById("watch");
  this.watchtoo = document.getElementById("watchtoo");
  this.minute = document.getElementById("minute");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const laps = document.getElementById("laps");
  start.addEventListener('click', () => {
   if (this.startcheck == true) {
    this.startId = setInterval(() => { this.startProcess() }, 10);
   }
  });
  stop.addEventListener('click', () => {
   if (this.stopcheck == true) {
    this.stopProcess()
   }
  });
  reset.addEventListener('click', () => { this.resetProcess() });
  laps.addEventListener('click', () => { this.lapsProcess() });
 }

 startProcess() {
  if (this.i < 99) {
   this.i = this.i + 1;
   if (this.i < 10) {
    this.watchtoo.textContent = `0${this.i}`;
   } else {
    this.watchtoo.textContent = this.i;
   }
  } else {
   this.i = 0;
   this.j = this.j + 1;
   if (this.j < 10) {
    this.watch.textContent = `0${this.j}`;
   } else {
    if (this.j < 60) {
     this.watch.textContent = this.j;
    } else {
     this.j = 0;
     this.m = this.m + 1;
     if (this.m < 10) {
      this.minute.textContent = `0${this.m}`;
     } else {
      this.minute.textContent = this.m;
     }
     this.watch.textContent = `0${this.j}`
    }
   }
  }
  if (this.stopcheck == false) {
   clearInterval(this.blink);
   this.stopwatch.classList.remove("visible");
   this.stopcheck = true;
  }
  this.startcheck = false;
 }

 stopProcess() {
  clearInterval(this.startId);
  this.startcheck = true;
  this.stopwatch = document.getElementById("stopwatch");
  this.blink = setInterval(() => {
   this.stopwatch.classList.toggle("visible");
  }, 300);
  this.stopcheck = false;
 }

 resetProcess() {
  this.i = 0;
  this.m = 0;
  this.j = 0;
  this.c = 0;
  const li = document.querySelectorAll("li");
  for (const lis of li) {
   lis.parentElement.removeChild(lis);
  }
  clearInterval(this.startId);
  clearInterval(this.blink);
  this.stopwatch.classList.remove("visible");
  this.watch.textContent = "00";
  this.watchtoo.textContent = "00";
  this.minute.textContent = "00";
  this.startcheck = true;
  this.stopcheck = true;
 }

 lapsProcess() {
  if (this.i > 0 || this.j > 0 || this.m > 0) {
   this.c = this.c + 1;
   const ul = document.getElementById("renderlaps");
   const li = document.createElement("li");
   li.textContent = `${this.c}. ${this.minute.textContent} Minutes, ${this.watch.textContent} Seconds, ${this.watchtoo.textContent} Miliseconds.`;;
   ul.append(li);
  }
 }

}


class App {
 static work() {
  new Watch();
 }
}

App.work();