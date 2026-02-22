export default function Testimonials() {
  const testimonials = [
    {
      name: "Devon Lane",
      image: "/students/student1.jpg",
      rating: 5,
    },
    {
      name: "Guy Hawkins",
      image: "/students/student2.jpg",
      rating: 5,
    },
    {
      name: "Annette Black",
      image: "/students/student3.jpg",
      rating: 5,
    },
    {
      name: "Jenny Wilson",
      image: "/students/student4.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center gap-8 sm:gap-10 md:gap-12">

        {/* HEADING */}
        <h2 className="font-display text-black text-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight md:leading-[4rem] lg:leading-[5rem] tracking-[-0.04rem]">
          Hear From Our Students
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[1.5rem] overflow-hidden group"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[320px] sm:h-[360px] md:h-[420px] object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm cursor-pointer group-hover:scale-110 transition">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-5 sm:h-5 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* BOTTOM INFO */}
              <div className="absolute bottom-4 w-full flex flex-col items-center gap-2 text-white px-2">
                <p className="font-display font-medium text-sm sm:text-base">
                  {item.name}
                </p>

                {/* STARS */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-3 h-3 sm:w-4 sm:h-4"
                    >
                      <path d="M12 17.3l6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}