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
export const TimeToString = (obj) => {
  const periods = ['night', 'sunrise', 'day', 'sunset'];
  let time = obj.getHours();
  switch (time) {
    case time >= 22:
      return periods[0];
    case time <= 7:
      return periods[1];
    case time >= 8:
      return periods[2];
    case time >= 18:
      return periods[3];
    default:
      return periods[2]; 
  }
}

// Convert Fahrenheit to Celcius and reverse
export const UnitConversion = (degrees) => {
  // Do stuff soon
}
export const LocalTime = (time, zone) => {
  const format = 'HH:mm:ss';
  return time.tz(zone).format(format);
}

export const LocalDate = (time, zone) => {
  const format = 'DD/MM/2018';
  return time.tz(zone).format(format);
}