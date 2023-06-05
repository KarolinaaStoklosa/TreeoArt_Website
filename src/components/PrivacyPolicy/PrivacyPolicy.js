import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import NavSideBar from "../NavBar/NavSideBar";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  useEffect(() => {
    const footerElement = document.getElementById("PPfooter");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    observer.observe(footerElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}
    >
      <div
        className={`${
          isFooterVisible ? "bg-dark-900 text-light" : "bg-light text-dark-900"
        } min-h-screen transition-colors duration-500`}
      >
        <div className="bg-inherit z-10 relative top-0 left-0 w-full">
          <nav className="bg-inherit h-28 w-full z-10">
            <NavBar />
          </nav>
          <div className="ml-6 mr-6 pb-12 md:ml-20 md:mr-16 text-sm md:text-base">
            <h1 className="text-3xl font-bold mb-16 mt-12">Polityka Prywatności</h1>
            <p className="pb-1">
              <strong>Dane, które gromadzimy</strong>
              <br />
              Nasza strona internetowa nie pobiera żadnych danych osobowych ani
              wrażliwych informacji od użytkowników. Nie zbieramy żadnych danych
              identyfikujących, takich jak imię, adres e-mail, numer telefonu ani
              żadnych innych informacji, które mogłyby prowadzić do identyfikacji
              użytkowników.
            </p>
            <br />

            <p className="pb-1">
              <strong>Wykorzystanie plików cookie</strong>
              <br />
              </p>
              <p>
              Nasza strona internetowa korzysta z plików cookie w celu poprawy
              działania witryny i dostarczania spersonalizowanych treści. Pliki
              cookie są niewielkimi plikami tekstowymi przechowywanymi na
              urządzeniu użytkownika. Nie służą one do identyfikacji użytkowników
              ani zbierania jakichkolwiek danych osobowych.
            </p>
            <br />

            <p className="pb-1">
              <strong>Bezpieczeństwo danych</strong>
              <br />
              </p>
              <p>
              Dbamy o bezpieczeństwo danych naszych użytkowników i stosujemy
              odpowiednie środki techniczne i organizacyjne, aby chronić dane przed
              nieautoryzowanym dostępem, utratą, zmianą lub nieuprawnionym
              ujawnieniem. Nie udostępniamy żadnych danych osobowych użytkowników
              osobom trzecim.
            </p>
            <br />

            <p className="pb-1">
              <strong>Zewnętrzne witryny</strong>
              <br />
              </p>
              <p>
              Na naszej stronie internetowej mogą znajdować się odnośniki do
              zewnętrznych witryn, które są poza naszą kontrolą. Nie ponosimy
              odpowiedzialności za prywatność ani zawartość tych witryn.
              Zachęcamy do zapoznania się z polityką prywatności każdej witryny,
              którą odwiedzasz.
            </p>
            <br />

            <p className="pb-1">
              <strong>Kontakt</strong>
              <br />
              </p>
              <p>
              Jeśli masz jakiekolwiek pytania dotyczące naszej Polityki Prywatności,
              prosimy o kontakt z nami za pomocą danych kontaktowych dostępnych na
              naszej stronie.
            </p>
          </div>
        </div>

        <div className={`${isFooterVisible ? "hidden" : "visible"}`}>
          <NavSideBar />
        </div>

        <footer id="PPfooter" className="">
          <ContactForm />
        </footer>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
