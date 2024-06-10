const host = process.env.VITE_HOST;
const port = process.env.VITE_PORT;
const loginApp = process.env.VITE_LOGIN_APP;

function getCookie(cookieName) {
  const name = `${cookieName}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let cookie of cookieArray) {
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return null;
}



async function checkAuthentication() {
  const bearerToken = getCookie(process.env.VITE_JWT_KEY)
  try {
    const response = await fetch(`${host}:${port}/api/users/auth`, {
      headers: {
        Authorization: bearerToken,
      },
    });

    if (response.status !== 200) {
      window.location.href = loginApp;
    }
  } catch (error) {
    window.location.href = loginApp;
  }
}

checkAuthentication();
