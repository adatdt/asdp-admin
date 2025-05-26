import  "./globals.css";
import {Navbar, Sidebar} from "./components/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
    <body>
    <Navbar />
    <Sidebar />
    <div className="p-4 sm:ml-64">
        <div className="p-4  rounded-lg dark:border-gray-700 mt-14">
        {/* menu ->satu */}
            <div className=" h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">{children}</div>
        </div>
    </div>

    </body>
</html>
  )
}