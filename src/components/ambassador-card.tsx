import Image from "next/image";
import Link from "next/link";

interface AmbassadorCardProps {
  imageSrc: string;
  name: string;
  description: string;
  socialLabel?: string;
  socialHref?: string;
}

export function AmbassadorCard({
  imageSrc,
  name,
  description,
  socialLabel = "Social link",
  socialHref,
}: AmbassadorCardProps) {
  const SocialButton = (
    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#C19268] text-white text-sm font-semibold shadow-sm">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2F241E] font-semibold">
        f
      </span>
      {socialLabel}
    </div>
  );

  return (
    <div className="relative flex justify-center text-black">
      <div className="relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]">
        {/* Avatar đè lên card: đặt ở top=0 và kéo lên 1/2 chiều cao */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full overflow-hidden border-[6px] border-white shadow-[0_16px_32px_rgba(0,0,0,0.2)]">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 45vw"
            priority
          />
        </div>

        {/* Card: chiều cao cố định để tất cả bằng nhau, nội dung co giãn, nút sát đáy */}
        <div className="rounded-[48px] bg-white px-6 sm:px-7 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 shadow-[0_18px_60px_rgba(0,0,0,0.14)] min-h-[520px] sm:min-h-[560px] flex flex-col items-center text-center">
          <h3 className="text-xl font-bold uppercase tracking-[0.04em] text-black mb-4">{name}</h3>

          {/* flex-1 để đẩy nút xuống đáy, max-w cho cột chữ gọn */}
          <p className="text-sm sm:text-base leading-relaxed text-black/75 flex-1 max-w-[260px] sm:max-w-[280px]">
            {description}
          </p>

          <div className="mt-8">
            {socialHref ? (
              <Link href={socialHref} target="_blank" rel="noopener noreferrer">
                {SocialButton}
              </Link>
            ) : (
              SocialButton
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
