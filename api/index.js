const KEY = "?client_id=OZfImlGvk2e8p8hyoOIhUPdWDMyiT_OHL_DvXnwC7Jk";

const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async (page) => {
  const res = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await res.json();

  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async (id) => {
  const res = await fetch(`${URL}${id}/statistics${KEY}`);
  const data = await res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }

  return data;
};

export { fetchImages, fetchImageStats };
