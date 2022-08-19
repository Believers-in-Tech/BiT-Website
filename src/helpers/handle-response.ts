

export function handleResponse(response: any) {
  return response
  // .text().then((text: string) => {
  //   // if (!response.ok) {
  //   //   if ([401, 403].indexOf(response.status || response.code) !== -1) {
  //   //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
  //   //     authenticationService.logout();
  //   //     window.location.reload();
  //   //   }
  //   //   const data = text && JSON.parse(text);
  //   //   const error = (data && data.message) || response.statusText;
  //   //   return Promise.reject(error);
  //   // }
  //   const data = text && JSON.parse(text);
  //   return data;
  // });
}