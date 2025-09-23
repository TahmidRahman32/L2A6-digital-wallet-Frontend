// app/notice/page.tsx (Next.js) or components/NoticePage.tsx

import { Bell, Info, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notices = [
   {
      id: 1,
      title: "Scheduled Maintenance",
      description: "Our services will be temporarily unavailable on Sept 25th from 1:00 AM to 4:00 AM (GMT+6) due to scheduled system maintenance.",
      type: "warning",
      date: "2025-09-20",
   },
   {
      id: 2,
      title: "New Feature Released",
      description: "Introducing instant money transfers with zero fees! Update your app to access this feature.",
      type: "info",
      date: "2025-09-18",
   },
   {
      id: 3,
      title: "Security Alert",
      description: "Never share your OTP or password with anyone. Get Pyment will never ask for your login details.",
      type: "alert",
      date: "2025-09-15",
   },
];

const NoticePage = () => {
   return (
      <div className=" bg-gray-50 dark:bg-gray-900 py-10 px-4">
         <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
               <Bell className="w-7 h-7 text-indigo-600" />
               Notices & Announcements
            </h1>

            <div className="space-y-5">
               {notices.map((notice) => (
                  <Card key={notice.id} className="shadow-sm hover:shadow-md transition rounded-2xl">
                     <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                           {notice.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
                           {notice.type === "warning" && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                           {notice.type === "alert" && <AlertTriangle className="w-5 h-5 text-red-500" />}
                           {notice.title}
                        </CardTitle>
                        <span className="text-sm text-gray-500">{notice.date}</span>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{notice.description}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   );
};

export default NoticePage;
