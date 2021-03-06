// import moment from 'moment-timezone';


// Convert epoch string to Day of the week
export const EpochToDay = (epoch) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let date = new Date(epoch * 1000);
    return days[date.getDay()];
}

// Convert timezone to location string
export const CleanUpTimezone = (timezone) => {
  let data = timezone.substring(timezone.lastIndexOf("/") + 1);
  data = data.replace('_', ' ');
  return data.toUpperCase();
}

// Convert time of day to night, day, sunrise, sunset
export const TimeToString = (obj, zone) => {
  const periods = ['night', 'sunrise', 'day', 'sunset'];
  let time = obj.tz(zone).format('HH');
  time = parseInt(time, 10);
  switch (true) {
    case (time >= 22 || time < 5):
      return periods[0];
    case (time >= 5 && time < 8):
      return periods[1];
    case (time >= 8 && time < 18):
      return periods[2];
    case (time >= 18 && time < 22):
      return periods[3];
    default:
      return periods[2];
  }
}

// Convert Fahrenheit to Celcius and reverse
export const UnitConversion = (degrees) => {
  // Do stuff soon
}

export const LocalTime = (time, zone, format) => {
  return time.tz(zone).format(format);
}

export const LocalDate = (time, zone) => {
  const format = 'LL';
  return time.tz(zone).format(format);
}