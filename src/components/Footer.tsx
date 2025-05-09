const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center space-x-8 mb-8 md:mb-0">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all mb-4 md:mb-0"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all mb-4 md:mb-0"
          >
            YouTube
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all mb-4 md:mb-0"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-all mb-4 md:mb-0"
          >
            Facebook
          </a>
        </div>

        {/* Explore Links */}
        <div className="flex flex-wrap justify-center space-x-8 w-full md:w-auto mb-8 md:mb-0">
          <a
            href="/templates"
            className="text-yellow-500 hover:text-yellow-400 transition-all mb-4 md:mb-0"
          >
            Templates
          </a>
          <a
            href="/quizzes"
            className="text-yellow-500 hover:text-yellow-400 transition-all mb-4 md:mb-0"
          >
            Quizzes
          </a>
          <a
            href="/blog"
            className="text-yellow-500 hover:text-yellow-400 transition-all mb-4 md:mb-0"
          >
            Blog
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-400 mt-8">
          &copy; {currentYear} DevSch. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
