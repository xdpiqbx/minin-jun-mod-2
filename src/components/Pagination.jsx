const Pagination = ({ contentLength, usersPerPage, currentPage, setPage }) => {
  const makeNumPagesArr = () => {
    const pages = Math.ceil(contentLength / usersPerPage);
    const pagesArr = [];
    for (let index = 0; index < pages; index++) {
      pagesArr.push(index);
    }
    return pagesArr;
  };

  const pageHandler = (event) => {
    event.preventDefault();
    setPage(parseInt(event.target.textContent));
    toggleCurrentPage(event.target.parentNode);
  };

  const toggleCurrentPage = (parentNode) => {
    removeCurrent(parentNode);
    parentNode.setAttribute('aria-current', 'page');
    parentNode.classList.add('active');
  };

  const removeCurrent = (node) => {
    [...node.parentNode.children].forEach((currNode) => {
      currNode.removeAttribute('aria-current');
      currNode.classList.remove('active');
    });
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {makeNumPagesArr().map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? 'active' : ''}`} // Error
          >
            <a onClick={pageHandler} className="page-link" href="#">
              {page + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
