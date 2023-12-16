import { NewContactform } from "./NewContactform";
import { ProfileForm } from "./profile-form";

export default function TestPage() {
  return (
    <div className="flex flex-row [&>*]:flex-1 gap-8 px-16 pt-16 pb-32">
      {/* <ProfileForm /> */}
      <NewContactform />
    </div>
  );
}
