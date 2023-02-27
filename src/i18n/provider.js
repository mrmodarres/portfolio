import React from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";
const Provider = ({ children, locale = LOCALES.english }) => {
  <IntlProvider
    locale={locale}
    // textComponent={Feragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>;
};

export default Provider;
