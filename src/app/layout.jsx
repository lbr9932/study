import "@/styles/globals.scss";

export const metadata = {
  title: "Movie Time",
  description: "Movie Time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
