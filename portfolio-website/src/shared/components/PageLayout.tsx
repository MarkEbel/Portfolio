import type { ReactNode } from "react";
import BackLink from "../navigation/BackLink";
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
          <BackLink fallback="/Portfolio/" />
          <h1>{title}</h1>
        </header>
      )}
      {children}
    </main>
  </>
);

export default PageLayout;
