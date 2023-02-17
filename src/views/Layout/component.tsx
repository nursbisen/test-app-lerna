const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="h-full my-4 flex flex-col mx-60">
    {children}
  </div>
);

export default Layout;