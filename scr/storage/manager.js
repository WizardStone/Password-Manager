// Internal Functions
const overwriteLocal = (username, password, id) => {
  try {
    const userData = JSON.stringify({ "username": username, "password": password });
    localStorage.setItem(id, userData);
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
};

// External Functions -> exported
export function set(username, password, ID){
    // Set local Data
    overwriteLocal(username, password, ID);
}

export function remove(ID){
  localStorage.removeItem(ID);
}

export function getCredentials(ID) {
  // Get Data
  const userData = localStorage.getItem(ID);
  // Safety Check
  if (!userData) return null; 
  try {
    return JSON.parse(userData); // Safe Return
  } catch (error) {
    console.error("Failed to parse user data:", error);
    return null;
  }
}