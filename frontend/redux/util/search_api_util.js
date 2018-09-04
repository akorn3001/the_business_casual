export const fetchSearchedResults = search => {
  return $.ajax({
    method: 'GET',
    url: `api/search/?query=${search}`,
  });
};
