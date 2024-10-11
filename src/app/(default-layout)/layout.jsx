import Header from "@/app/_components/Header"; // 헤더 컴포넌트 import
import Footer from "@/app/_components/Footer"; // 풋터 컴포넌트 import

export default function RootLayout({ children, modal }) {
  return (
    <>
      <div className="gr" role="presentation"></div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      {modal}
    </>
  );
}
