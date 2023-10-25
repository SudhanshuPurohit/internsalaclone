"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Footer from '@/components/Footer';



const page = () => {

  const cardsForIntroScreenData = [
    "bsc-student.png.webp",
    "city_launch_sept23-student.png.webp",
    "int_opps-student.png.webp",
    "isp_38-student.png.webp",
    "pgc_banner-student.png.webp",
    "straive-student.png.webp"

  ]

  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");

    }
  }, [isAuthenticated]);

  return (
    <div className=''>
      <div id='SwiperCardsForIntroScreen' className='mt-5'>

        <div id='main-heading ' className='mt-5'>
          <h1 className='m-2'>Make your dream career a reality </h1>
          <span id='underline'></span>
        </div>
        <h3 className='m-2 mb-5'>Trending on Internshala</h3>
        <Swiper

          slidesPerView={3}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >

          {cardsForIntroScreenData.map((elem, index) => <SwiperSlide key={index}>
            <img src={elem} alt="" />
          </SwiperSlide>)}



        </Swiper>
      </div>

      <div id="footerbg" className='mt-5 p-4' style={{ backgroundImage: 'url("footer_bg_1920.webp")' }}>
        <h3> Empower your career with Internshala today</h3>

        <form className="d-flex gap-2 " role="search">
          <Link href="/student" className='btn btn-light'>Student</Link>

          <Link href="/student" className='btn btn-light'>Employer</Link>

        </form>
      </div>

    </div>
  )
}

export default page