export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  if (error.response && !error.response.ok) {

    error.response.text().then(text => {
      console.error(`API call failed with response: ${text}`);
    }).catch(textError => {
      console.error("Failed to parse error response text.", textError);
    });
  } else {

    console.error("API call failed. " + error.toString());
}
}
