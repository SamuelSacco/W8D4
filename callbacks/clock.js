class Clock {
    constructor() {
        // 1. Create a Date object.
        this.time = new Date()

        // 2. Store the hours, minutes, and seconds.
        this.arrayTime = this.time.toString().split(" ")[4].split(":")
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        this.tick = 1000
    }
    
    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.arrayTime[0]}:${this.arrayTime[1]}:${this.arrayTime[2]}`)
    }
    
    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        
        setInterval(this.printTime.bind(this), 1000)
    }
}

const clock = new Clock();
// console.log(clock.time)
// console.log(clock.arrayTime.toString().split(" ")[4])
// clock.printTime()
clock._tick()