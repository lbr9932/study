import "@/styles/globals.scss";
import Header from "@/app/_components/Header"; // 헤더 컴포넌트 import
import Footer from "@/app/_components/Footer"; // 풋터 컴포넌트 import

export const metadata = {
  title: "Movie Time",
  description: "Movie Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <div className="gr" role="presentation"></div>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
