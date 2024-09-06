import "../styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header"; // 헤더 컴포넌트 import
import Footer from "../components/Footer"; // 풋터 컴포넌트 import
config.autoAddCss = false;

export const metadata = {
  title: "Movie Time",
  description: "Movie Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="gr" role="presentation"></div>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
