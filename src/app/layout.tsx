import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import getCurrentUser from "./actions/getCurrentUser";
import ToasterContext from "./context/ToasterContext";
import SignupModal from "./components/modals/SIgnupModal";
import AuthContext from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="ja">
      <body>
        <AuthContext>
          <ToasterContext />
          <SignupModal />
          <div className="flex min-h-screen flex-col">
            <Navigation currentUser={currentUser} />

            <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">
              {children}
            </main>

            <footer className="py-5">
              <div className="text-center text-sm">
                Copyright @ ALL rights reserved ¥ Yusei Imamura
              </div>
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
