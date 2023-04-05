import Image from "next/image";

import Link from "next/link";

const TeamSection = () => {
  return (
    <div className="flex transform-gpu scroll-m-6 gap-32 overflow-x-auto py-24">
      {/* create an empty array and loop it 6 times */}
      {[...Array(4)].map((_, i) => (
        <div key={i} className="group pb-8">
          <Image
            src={
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80"
            }
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-40 w-40 rounded-full object-cover duration-100 ease-in group-hover:-translate-y-2 group-hover:shadow-xl"
          />
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-900">Cool Name</h3>
            <p className="hidden text-sm text-gray-500 group-hover:block">
              Cool Title
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
