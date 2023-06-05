import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [showBanner, setShowBanner] = useState(!cookies.cookieConsent);

  const handleAccept = () => {
    setCookie('cookieConsent', true, { path: '/' });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // Jeśli użytkownik już zaakceptował pliki cookie, nie wyświetlaj banera
  }

  return (
    <div className="fixed bottom-0 right-0 p-4 md:p-8 w-10/12 md:w-1/2">
      <div className="bg-light bg-opacity-80 text-dark-900 p-4 md:p-8 rounded-md shadow-lg">
        <p className="text-sm">
          Nasza strona korzysta z plików cookie w celu zapewnienia optymalnego działania, personalizacji treści, analizy statystyk oraz funkcji mediów społecznościowych. Więcej informacji na ten temat znajdziesz w naszej{' '}
            <a href='/politykaPrywatnosci' className="underline">
                 Polityce Prywatności.
            </a>
        </p>
        <button
          className="bg-dark-900 bg-opacity-80 text-light px-4 py-2 rounded-md mt-4 w-full hover:bg-opacity-80 transition-colors"
          onClick={handleAccept}
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
