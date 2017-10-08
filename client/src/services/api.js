export function getRandom() {
  // `axios` function returns promise, you can use any ajax lib, which can
  // return promise, or wrap in promise ajax call
  return fetch('/counter/get-random', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(function(response) {
    return response.json();
  }, function(error) {
    return error.message; //=> String
  });
}
