import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      <div className="bg-orange-100">NAVBAR</div>
      <div className="flex">
        <div className="bg-blue-100">SIDEBAR</div>
        <section className="flex flex-1 min-h-screen flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 bg-yellow-100">
          {children}
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
