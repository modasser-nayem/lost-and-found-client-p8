import Image from "next/image";

export default function Home() {
   return (
      <div className="flex items-center justify-center h-screen">
         <h2 className="text-4xl">Lost and Found System</h2>
         <Image
            src="https://alimodassernayem.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnayem4.48d67321.png&w=1920&q=75"
            height={400}
            width={400}
            alt="Ali Modasser Nayem"
         />
      </div>
   );
}
