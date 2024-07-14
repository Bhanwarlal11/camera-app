
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronRight, EarthLock } from "lucide-react";

function PrivacyPolicy() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-100 flex flex-row items-center justify-between  mx-3 px-3 py-3">
          <div className="flex flex-row items-center justify-center gap-3">
            <EarthLock />
            <div>Privacy Policy</div>
          </div>
          <ChevronRight />
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Welcome to [Your Camera App Name] We are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and share your personal information when you
            use our camera application . By using our App, you agree to
            the terms of this Privacy Policy. 1. Information We Collect 1.1
            Personal Information We may collect the following personal
            information when you use our App: Contact Information: such as your
            name, email address, and phone number if you choose to provide it.
            Account Information: if you create an account, we may collect your
            username, password, and profile picture. 1.2 Device Information We
            may collect information about the device you use to access our App,
            including: Device Type: such as your device model, operating system,
            and version. Device Identifiers: such as IP address, unique device
            identifiers (e.g., UDID, MAC address). 1.3 Usage Information We may
            collect information about how you use our App, including: Photos and
            Videos: photos and videos you capture using our App. App Activity:
            such as the features you use, the time and date of your activities,
            and error reports. 2. How We Use Your Information We use the
            information we collect to: Provide and Improve Our Services: to
            operate, maintain, and improve our App. Communicate with You: to
            send you updates, notifications, and other information related to
            your account and our services. Personalize Your Experience: to
            customize and enhance your experience with our App. Security and
            Compliance: to protect against, investigate, and prevent fraudulent,
            unauthorized, or illegal activities. 3. Sharing Your Information We
            do not share your personal information with third parties except in
            the following circumstances: Service Providers: we may share
            information with third-party service providers who perform services
            on our behalf, such as cloud storage providers. Legal Requirements:
            we may disclose information if required to do so by law or in
            response to valid requests by public authorities (e.g., a court or
            government agency). Business Transfers: we may share or transfer
            your information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company. 4. Your Choices You
            have the following choices regarding your information: Access and
            Update: you can access and update your personal information through
            your account settings in the App. Delete: you can request the
            deletion of your account and personal information by contacting us
            at [Your Contact Information]. 5. Security We take reasonable
            measures to protect your personal information from unauthorized
            access, use, or disclosure. However, no security system is
            impenetrable, and we cannot guarantee the security of your
            information. 6. s Privacy Our App is not intended for use
            by children under the age of 13. We do not knowingly collect
            personal information from children under 13. If we become aware that
            we have inadvertently collected personal information from a child
            under 13, we will delete such information promptly. 7. Changes to
            This Privacy Policy We may update this Privacy Policy from time to
            time. We will notify you of any changes by posting the new Privacy
            Policy on this page. You are advised to review this Priva
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PrivacyPolicy;
