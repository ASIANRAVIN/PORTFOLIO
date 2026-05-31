interface SiteFooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoading?: boolean;
}

export function SiteFooter({
  currentPage,
  onNavigate,
  isLoading = false,
}: SiteFooterProps) {
  if (currentPage === "Contact") {
    return null;
  }

  const handleContactClick = () => {
    if (!isLoading) {
      onNavigate("Contact");
    }
  };

  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="site-footer-inner">
          <div className="site-footer-copy">
            <h2 className="site-footer-heading">Contact Me</h2>
            <p className="site-footer-text">
              Have a project in mind, an opportunity, or just want to say hello?
              Head over to my contact page and send a message.
            </p>
          </div>
          <button
            type="button"
            className="site-footer-cta"
            onClick={handleContactClick}
            disabled={isLoading}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </footer>
  );
}
