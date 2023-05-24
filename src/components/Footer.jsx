import { Email } from "@/icons";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary-medium/80 mt-24 p-6">
      <p className="text-center font-bold text-lg text-primary-dark">
        &copy; Tacos de canasta &quot;La canasta yucateca&quot;, {currentYear}
      </p>
      <div>
        <h4>Contacto</h4>
        <address>
          <a
            href="mailto:cielmchacong97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email /> cielmchacong97@gmail.com
          </a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
