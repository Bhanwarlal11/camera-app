'use client'

import useWindowSize from "@/app/hooks/useWindowSize";
import Footer from "../footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function CommonLayout({children}){

    const { width } = useWindowSize();

    return (
        <div className="flex flex-col min-h-screen">
        
        {/* <Header /> */}
        {
          width < 994 ? (
            null
          ) : (
            <Header />
          )
        }
        
        {width < 994 ? (
        <Footer />
      ) : (
        <Sidebar />
      )}

        {/* main content */}
        <main className="lg:mx-20 md:mx-20 sm:mx-5">{children}</main>
        </div>
    )
}

export default CommonLayout;