import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperCoverflow = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-4"
    >
      <SwiperSlide>
        <div className="card border p-5 rounded hover:shadow-lg">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="rounded-full h-20 w-20"
                alt="avatar"
              />
              <div className="ml-4">
                <h1 className="text-xl font-medium">Eko</h1>
                <p className="text-gray-700">Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card border p-5 rounded hover:shadow-lg">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="rounded-full h-20 w-20"
                alt="avatar"
              />
              <div className="ml-4">
                <h1 className="text-xl font-medium">Eko</h1>
                <p className="text-gray-700">Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card border p-5 rounded hover:shadow-lg">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="rounded-full h-20 w-20"
                alt="avatar"
              />
              <div className="ml-4">
                <h1 className="text-xl font-medium">Eko</h1>
                <p className="text-gray-700">Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card border p-5 rounded hover:shadow-lg">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="rounded-full h-20 w-20"
                alt="avatar"
              />
              <div className="ml-4">
                <h1 className="text-xl font-medium">Eko</h1>
                <p className="text-gray-700">Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card border p-5 rounded hover:shadow-lg">
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="rounded-full h-20 w-20"
                alt="avatar"
              />
              <div className="ml-4">
                <h1 className="text-xl font-medium">Eko</h1>
                <p className="text-gray-700">Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCoverflow;
