export function handleResponse(response) {
  if (!response.ok) {
    const data = response;
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  const data = response;
  return data;
}