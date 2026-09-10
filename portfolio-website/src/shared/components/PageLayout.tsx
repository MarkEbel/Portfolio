import type { ReactNode } from "react";
import Sidebar from "../navigation/Sidebar";
import "./PageLayout.css";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => (
  <>
    <Sidebar isHome={!title} />
    <main className="main-content">
      {title && (
        <header className="page-header">
          <p className="page-header__eyebrow">Portfolio</p>
          <h1>{title}</h1>
        </header>
      )}
      {children}
    </main>
  </>
);

export default PageLayout;
