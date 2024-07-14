import Image from "next/image";

type UserInfoProps = {
  profile: {
    profileImage: string;
    firstName: string;
  };
};

function UserInfo({ profile: { profileImage, firstName } }: UserInfoProps) {
  return (
    <article className="mt-4 grid grid-cols-[auto,1fr] gap-4">
      <Image
        src={profileImage}
        alt={firstName}
        width={50}
        height={50}
        className="size-12 rounded object-cover"
      />
      <div>
        <p>
          Hosted by <span className="font-bold">{firstName}</span>
        </p>
        <p className="font-light text-muted-foreground">
          Superhost &middot; 2 years hosting
        </p>
      </div>
    </article>
  );
}

export default UserInfo;
