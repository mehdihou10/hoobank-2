export const isCookieExists = () => {
    let findCookie = document.cookie
      .split(";")
      .filter((ck) => ck.includes("hoobank-user"));
  
    return findCookie.length === 0
      ? false
      : findCookie[0].split("=")[1] === null
      ? false
      : true;
  };