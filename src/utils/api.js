export async function callApi(method, url, path, data) {
  const res = await fetch(`${url}/api${path}`, {
    method,
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
