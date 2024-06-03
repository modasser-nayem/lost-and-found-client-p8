import Profile from "@/components/UI/ProfilePage/Profile/Profile";
import ProfileClaimItems from "@/components/UI/ProfilePage/ProfileClaimItems/ProfileClaimItems";
import ProfileFoundItems from "@/components/UI/ProfilePage/ProfileFoundItems/ProfileFoundItems";
import ProfileLostItems from "@/components/UI/ProfilePage/ProfileLostItems/ProfileLostItems";

const MyProfilePage = () => {
   return (
      <div className="container">
         <Profile />
         <ProfileLostItems />
         <ProfileFoundItems />
         <ProfileClaimItems />
      </div>
   );
};

export default MyProfilePage;
