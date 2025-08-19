import Image from "next/image";
export function TimelineSection() {
  const timelineItems = [
    {
      year: "2020",
      image: "/vietnamese-children-charity-mid-autumn-2020.png",
      position: "left",
    },
    {
      year: "2022",
      image: "/vietnamese-children-charity-mid-autumn-2022.png",
      position: "right",
    },
    {
      year: "2023",
      image: "/vietnamese-children-charity-mid-autumn-2023.png",
      position: "right",
    },
    {
      year: "2024",
      image: "/vietnamese-children-charity-mid-autumn-2024.png",
      position: "left",
    },
  ];

  return (
    <section className="relative py-16 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large background circles */}
        <div className="absolute w-96 h-96 bg-white rounded-full opacity-50 -right-20 top-20" />
        <div className="absolute w-80 h-80 bg-white rounded-full opacity-50 -left-20 bottom-32" />

        {/* Decorative stars */}
        <div className="absolute w-6 h-6 bg-white rounded-full blur-sm top-32 right-1/4 animate-pulse" />
        <div className="absolute w-8 h-8 bg-white rounded-full blur-sm bottom-40 left-1/4 animate-pulse delay-500" />
        <div className="absolute w-5 h-5 bg-white rounded-full blur-sm top-1/2 right-16 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-16 md:space-y-24">
          {timelineItems.map((item, index) => (
            <div
              key={item.year}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                item.position === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image container */}
              <div className="relative flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Ấm Campaign ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Year label */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white px-4 py-2 rounded-full shadow-lg border-2 border-amber-200">
                    <span className="text-xl font-bold text-black">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content space for future expansion */}
              <div className="flex-1 text-center md:text-left">
                <div className="w-full h-32 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
