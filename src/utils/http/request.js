const createRequestData = (method, body = null, authToken = null) => {
  const auth = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  return {
    method,
    body: JSON.stringify({ ...body }),
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
  };
};

// Niezbyt dokladna nazwa. Ta funkcja nie tworzy requestu, tylko ustawia czesc jego parametrow.
const createRequestDataGet = (method, authToken = null) => {
  const auth = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
  };
};

export const httpRequest = async (url, method, body) => {
  try {
    const response = await fetch(url, createRequestData(method, body));
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    return e;
  }
};


export const httpRequestAuth = async (url, method, body = null) => {
  try {
    const authToken = localStorage.getItem('AccessToken'); // Bezposrednie odwolanie do implementacji storage, zamiast przez util/serwis
    let response; // Mutowalna zmienna, czego latwo uniknac przy funkcjach async + brak wartosci poczatkowej (null to tez wartosc)
    if (body) {
      response = await fetch(url, createRequestData(method, body, authToken));
      return response.json();
    }
    response = await fetch(url, createRequestDataGet(method, authToken));
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    return e;
  }
};

// Przydaloby sie, zeby funkcje mialy popisane JSDocsy, bo nie masz kontroli nad typami argumentow.
