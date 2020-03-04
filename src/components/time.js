class Time {

  /**
   * A number, the number of hours since midnight. e.g. 6 == 6AM, 13.75 == 1:45 PM
   */
  time;

  toString() {
    let HM = this.getHourMinuteObj();
    return `${HM.hourString}:${HM.minuteString} ${HM.isAm}`;
  }


  _setFromString(timeString) {
    let tokens = timeString.split(":");
    let isAm = timeString.indexOf("pm") === -1;
    let hour = parseInt(tokens[0]);
    let minute = parseInt(tokens[1]);
    this.time = hour * 60 + minute + (12 * 60 * (isAm ? 0 : 1));
  }

  constructor(time) {
    if (arguments.length = 1) {
      if (typeof time === "string") {
        this._setFromString(time);
      } else {
        this.time = time;
      }
    }

  }
  static normalize(time) {
    if (time > 24 * 60) {
      return Time.normalize(time - (24 * 60));
    }
    if (time < 0) {
      return Time.normalize(time + (24 * 60));
    }
    return time;
  }
  getHourMinuteObj() {
    let normalizedTime = Time.normalize(this.time);
    let hour = Math.floor(normalizedTime / 60);
    let isAm = hour < 12 ? "AM":"PM";
    while (hour >= 12) {
      hour -= 12;
    }
    let minute = normalizedTime % 60;

    console.log("TIME", this, hour, minute, isAm);
    return {
      hour,
      hourString:hour === 0 ? "12" : hour,
      minute,
      isAm,
      minuteString:(minute.toString().length == 1 ? "0" : "") + minute
    }
  }
  setTime(newTime) {
    this.time = newTime;
  }

  add(time) {
    this.setTime(this.time + time.time);
    // console.log("BAAH", this, time)

    // console.log("ACC", this)
    return this
  }

  subtract(time) {
    this.setTime(this.time - time.time);

    return this
  }

  toHourMinute() {
    let HM = this.getHourMinuteObj();
    console.log("TO", HM)
    console.log(`${HM.hourString}h ${HM.minuteString}m`)
    return `${HM.hour}h ${HM.minute}m`;
  }

  /**
   * Returns a positive number if this flight is before the provided one, negative number if it is after, and 0 if they are equal.
   * @param time
   * @returns {number}
   */
  compareTo(time) {
    return this.time - time.time;
  }

  clone() {
    return new Time(this.time);
  }

}
export default Time;