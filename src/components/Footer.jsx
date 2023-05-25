import { Email, Facebook, Instagram, Location, WhatsApp } from "@/icons";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary-medium/80 mt-24 p-6 text-primary-dark text-lg">
      <p className="text-center font-bold col-span-full mb-4">
        &copy; Tacos de canasta &quot;La canasta yucateca&quot;, {currentYear}
      </p>
      <div className="grid sm:grid-cols-2 place-content-center sm:justify-items-center max-w-2xl mx-auto gap-y-4">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Contacto</h4>
          <address>
            <ul className="flex flex-col gap-1 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2">
              <li>
                <a
                  href="mailto:cielmchacong97@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email /> cielmchacong97@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=529992787091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp /> (999) 278 7091
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/19Wdgwe8HkbhESRWA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Location /> Ubicación
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">Redes sociales</h4>
          <ul className="flex flex-col gap-1 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100085831440625"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lacanastayucateca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
