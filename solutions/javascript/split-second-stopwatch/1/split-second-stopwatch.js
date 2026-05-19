export class SplitSecondStopwatch {
  constructor() {
    this._state = 'ready';
    this._currentLap = '00:00:00';
    this._total = '00:00:00';
    this._previousLaps = [];
  }

  get state() {
    return this._state;
  }

  get currentLap() {
    return this._currentLap;
  }

  get total() {
    return this._total;
  }

  get previousLaps() {
    return this._previousLaps;
  }

  start() {
    if (this.state === 'running')
      throw new Error('cannot start an already running stopwatch');
    
    this._state = 'running';
  }

  stop() {
    if (this.state !== 'running')
      throw new Error('cannot stop a stopwatch that is not running');
    
    this._state = 'stopped';
  }

  lap() {
    if (this.state !== 'running')
      throw new Error('cannot lap a stopwatch that is not running');
    
    this._previousLaps.push(this._currentLap);
    this._currentLap = '00:00:00';
  }

  reset() {
    if (this.state !== 'stopped')
      throw new Error('cannot reset a stopwatch that is not stopped');
    
    this._state = 'ready';
    this._currentLap = '00:00:00';
    this._total = '00:00:00';
    this._previousLaps = [];
  }

  advanceTime(duration) {
    if (this.state === 'running') {
      this._currentLap = this.addTime(this.currentLap, duration);
      this._total = this.addTime(this.total, duration);
    }
  }

  addTime(time1, time2) {
    const toSeconds = (time) => {
      const [hours, minutes, seconds] = time.split(':').map(Number);
      return (hours * 3600) + (minutes * 60) + seconds;
    };
  
    const formatTime = (totalSeconds) => {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
  
      return [hours, minutes, seconds]
        .map(num => String(num).padStart(2, '0'))
        .join(':');
    };
  
    const total = toSeconds(time1) + toSeconds(time2);
  
    return formatTime(total);
  }
}
