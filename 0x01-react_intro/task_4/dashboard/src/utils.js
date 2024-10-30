export function getFullYear() {
  const date = new Date(); // create a new Date object
  return date.getFullYear(); // returns the year from the date object
}

export function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
    // if (isIndex) {
    //   return "Holberton School";
    // } else {
    //   return "Holberton School main dashboard";
    // }
}


export function getLatestNotification() {
  return  '<strong>Urgent requirement</strong> - complete by EOD';
}