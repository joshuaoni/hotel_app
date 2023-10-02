export const getAllProperties = async () => {
  // creating a delay to test loading page
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const res = await fetch('http://localhost:8000/properties');
    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export const getProperty = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/properties/${id}`);
    const property = await res.json();
    return [property, null];
  } catch (error) {
    return [null, error];
  }
}