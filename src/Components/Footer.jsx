const Footer = () => {
  return (
    <footer className="container mt-5 mb-4">
      <div className="bg-dark text-light rounded-4 shadow-sm py-4 px-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Logo */}
          <div className="mb-3 mb-md-0">
            <h5 className="fw-bold mb-1">
              <span className="badge bg-warning text-dark px-3 py-2">
                📰 NewsMag
              </span>
            </h5>
            <p className="text-secondary mb-0 small">
              Stay updated with the latest news from around the world.
            </p>
          </div>

          {/* Links */}
          <div className="d-flex gap-3">
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              Categories
            </a>
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} <strong>NewsMag</strong>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;