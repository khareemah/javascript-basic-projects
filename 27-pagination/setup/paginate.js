const paginate = (followers) => {
  const itemsPerPage = 9;
  const noOfPages = Math.ceil(followers.length / itemsPerPage);
  const pages = Array.from({ length: noOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return pages;
};

export default paginate;
