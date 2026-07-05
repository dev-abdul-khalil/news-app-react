const NavBar = ({ setCategory }) => {
  const categories = [
    "technology",
    "business",
    "health",
    "sports",
    "entertainment",
    "science",
  ];

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg bg-dark rounded-4 shadow-sm px-3 py-2">
        <a className="navbar-brand fw-bold text-white" href="#">
          <span className="badge bg-warning text-dark px-3 py-2 fs-6">
            📰 NewsMag
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-2">
            {categories.map((item) => (
              <li className="nav-item" key={item}>
                <button
                  className="btn btn-sm nav-btn text-capitalize"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;