import Layout from "./components/Layout";
import Main from "./components/Main";

import { I18Provider, LOCALES } from "./i18n";
import { FormattedMessage } from "react-intl";
function App() {
  return (
    // <I18Provider locale={LOCALES.english}>
    <Layout>
      <Main />
    </Layout>
    // </I18Provider>
  );
}

export default App;
