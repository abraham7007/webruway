<template>
    <section class="home-slider-area slider-default">
        <div class="home-slider-content">
            <div class="home-slider-container">
                <swiper :options="swiperOptions">
                    <!-- Start Slide Item -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg2.jpg')` }">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="Images">
                                    <h6>Desde 2018</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>Industria<span> 4.0</span></h2>
                                </div>
                                <p>La innovación y creatividad nos caracteriza como empresa.</p>
                                <n-link to="/service" class="btn btn-theme btn-theme-color2">Nuestros servicios <i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img src="/images/slider/1.png" alt="Images">
                                </div>                                
                                <div class="success-rate"><div class="content">+250 <span>Proyectos Exitosos</span></div></div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->
                    <!-- Start Slide Item -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg3.jpg')` }">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="Images">
                                    <h6>Desde 2018</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>Innovamos<span> para crear el futuro.</span></h2>
                                </div>
                                <p>Construimos soluciones innovadoras utilizando tecnologías emergentes.</p>
                                <n-link to="/service" class="btn btn-theme btn-theme-color2">Nuestros servicios <i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img src="/images/slider/2.jpg" alt="Images">
                                </div>
                                <div class="success-rate"><div class="content">+250 <span>Proyectos Exitosos</span></div></div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->
                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-button-next">
                    <i class="icofont-rounded-double-right"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="icofont-rounded-double-left"></i>
                </div>
            </div>
        </div>
        <div class="home-slider-sidebar" data-aos="fade-zoom-in" data-aos-duration="1300">
            <div class="social-icon">
                <a href="https://m.facebook.com/profile.php?id=100063552639710"><i class="icofont-facebook"></i></a>
                <a href="https://www.linkedin.com/company/80447477"><i class="icofont-instagram"></i></a>
                <a href="https://www.linkedin.com/company/80447477"><i class="icofont-linkedin"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    slidesPerView : 1,
                    loop: true,
                    spaceBetween : 30,
                    autoplay: false,
                    navigation: {
                        nextEl: '.home-slider-container .swiper-button-next',
                        prevEl: '.home-slider-container .swiper-button-prev',
                    }
                }
            }
        },
    };
</script>
