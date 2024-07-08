import Image from "next/image";
import notificationImage from '../../../public/notification_image.jpg'

function NotificationPage() {
    return ( <div className=" flex flex-col items-center justify-center">
        <Image src={notificationImage} alt="notification-image" width={300} height={300} />
        <p className="text-gray-600">No System notifications</p>
    </div> );
}

export default NotificationPage;