import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className="size-6 rounded-full object-cover"
        alt="profile image"
      />
    );
  }
  return <LuUser2 className="size-6 rounded-full bg-primary text-white" />;
}

export default UserIcon;
