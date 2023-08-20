const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export function parseDate(date: number) {
  const dateCurr = new Date(date);
  // return dateCurr.toLocaleDateString("it-IT")
  // return `${dateCurr.getHours()}:${dateCurr.getMinutes()}, ${dateCurr.getDate()} ${months[dateCurr.getMonth()]}`
  return `${dateCurr.getDate()} ${MONTHS[dateCurr.getMonth()]}`
}

export function parseDateWithTime(date: number) {
  const dateCurr = new Date(date);
  return `${dateCurr.getHours()}:${dateCurr.getMinutes()}, ${dateCurr.getDate()} ${MONTHS[dateCurr.getMonth()]}`
}

export function parseTimestampFromNow(timestamp: number) {
  const dateCurr = new Date();
  const date = new Date(timestamp);
  const diff = dateCurr.getTime() - date.getTime();
  const absDiff = Math.abs(diff);
  
  const seconds = Math.floor(absDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} years ago`;
  if (months > 0) return `${months} months ago`;
  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;

  return `${seconds} seconds ago`;
}

export function parseTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds<10?'0':''}${seconds}`;
}

export function parseViews(views: number) {
  if (views < 1000) return views;
  if (views < 1000000) return `${Math.floor(views/1000)}K`;
  if (views < 1000000000) return `${Math.floor(views/1000000)}M`;
  return `${Math.floor(views/1000000000)}B`;
}