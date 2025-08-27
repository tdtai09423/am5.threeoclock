export default function KolPage() {
  return (
    <div className="w-full p-6 flex flex-col items-center">
      {/* Top Section */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <h3 className="text-sm font-bold uppercase">Sub-Title</h3>
        <p className="text-gray-600 max-w-lg mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat.
        </p>

        {/* Main Avatar */}
        <div className="relative mt-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-200 to-orange-50 scale-125 blur-xl"></div>
          <img
            src="/avatar.png"
            alt="Profile"
            className="relative z-10 w-60 h-60 object-cover rounded-full"
          />
        </div>

        {/* Name */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-black">
          DIỄN VIÊN CHÍ TÂM
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Small avatar */}
        <div className="flex justify-center">
          <div className="rounded-full overflow-hidden w-40 h-40 shadow-md">
            <img
              src="/avatar.png"
              alt="Small profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text bubble */}
        <div className="bg-orange-100 rounded-2xl p-6 relative shadow-sm">
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis.
          </p>
          <div className="absolute -left-4 top-8 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-orange-100"></div>
        </div>
      </div>
    </div>
  );
}
