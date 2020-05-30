export const formatData = (data) =>
  [...data.hits].map(({ author, objectID, title, url }) => ({
    author,
    objectID,
    title,
    url,
  }));
