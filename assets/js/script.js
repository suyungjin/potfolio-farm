//모바일 네비게이션 바

$(document).ready(function(){

    const $closegroupbox = $('.close-group-box');
    const $navspacer = $('.nav-spacer');
    const $nounderlinelarge = $('.no-underline-large');
    const $nounderline = $('.no-underline');
    const $nounderlinemiddle = $('.no-underline-middle');
    const $refgroup = $('.ref-group');
    const $nounderlineref = $('.ref-group-top .no-underline-large');


    $closegroupbox.css({
        'padding-top': '20px',
        'padding-right': '20px',
        'padding-bottom': '16px',
        'padding-left': '20px'
    });

    $navspacer.css('height','53px');

    $nounderlinelarge.css({
        'margin-right': '5%',
        'margin-left': '5%',
        'padding-bottom': '24px',
        'font-size': '22px',
        'font-style': 'normal',
        'font-weight': '500'
    });

    $nounderline.css({
        'margin-top': '18px',
        'font-size': '16px'
    });

    $nounderlinemiddle.css({
        'margin-right': '5%',
        'margin-left': '5%',
        'padding-bottom': '24px',
        'font-size': '16px',
        'font-style': 'normal',
        'font-weight': '400'
    });

    $nounderlineref.css({
        'margin-right': '0%',
        'margin-left': '0%',
        'padding-bottom': '0px',
    })

    $refgroup.css({
        'margin-bottom': '24px',
        'padding-right': '5%',
        'padding-left': '5%'
    });

    $(".menu-mo").on("click", function () {
    if ($(".mobile-bar").is(":visible")) {
      $(".mobile-bar").fadeOut(150);
    } else {
      $(".mobile-bar").fadeIn(150);
    }
    });
    $(".close-group").on("click", function () {
    $(".mobile-bar").fadeOut(150);
    });

  // 서브메뉴 토글 버튼 클릭 시 하위 메뉴 열고 닫기
    $(".ref-open-close").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".has-sub").toggleClass("open");
    
    const $refGroupUnder = $(this).closest(".ref-group").find(".ref-group-under");
    const $refOpen = $(this).find(".ref-open");
    const $refClose = $(this).find(".ref-close");

    if ($refGroupUnder.is(":hidden")) {
        $refGroupUnder.fadeIn();
        $refOpen.css("display", "none");
        $refClose.css("display", "block");
    } 
    else {
        $refGroupUnder.fadeOut();
        $refOpen.css("display", "block");
        $refClose.css("display", "none");
    }
        
    });
});

//서치 모달

$(".search").on("click", function () {
    if ($(".search-modal").is(":visible")) {
      $(".search-modal").fadeOut(150);
    } else {
      $(".search-modal").fadeIn(150);
    }
    });
    $(".search-close").on("click", function () {
    $(".search-modal").fadeOut(150);
    });

//메인 슬라이더
const sliderData = {
            animal: {
                image: './assets/images/1.png',
                type: '공공기관 • 유튜브 • 콘텐츠',
                content: '유튜브 필승법 = 귀여운 동물? 공공기관도, AI 크리에이터도 써먹는 콘텐츠 치트'
            },
            ai: {
                image: './assets/images/2.png',
                type: 'AI • F&B • 관광',
                content: '오늘의 뉴스 클리핑과 영상/캠페인 트렌드! 한눈에 보고 확인하세요',
                summary: '챗GPT의 ‘공부 모드’ 출시 소식부터 최신 광고 캠페인 영상까지?'
            },
            shortform: {
                image: './assets/images/3.png',
                type: '숏폼 • 크리에이터',
                content: '요즘 숏폼계 강자는 꾸준한 자기 기록! 시리즈 콘텐츠 크리에이터 모음'
            },
            sns: {
                image: './assets/images/4.png',
                type: 'SNS • 스레드',
                content: '스레드 유저를 사로잡은 브랜드 계정은? 운영 팁까지 한눈에 보기'
            },
            meme: {
                image: './assets/images/5.png',
                type: '밈 • 챌린지 • 해외',
                content: '콜드플레이가 만든 올해 가장 핫한 밈? 브랜드도 뛰어든 해외 밈·챌린지!'
            },
            platform: {
                image: './assets/images/6.png',
                type: '서비스기획 • 트랜드 • 플랫폼',
                content: '재고 떨이 아니고 행운 박스입니다만? 요즘 주목받는 절약 소비 트렌드!'
            }
        };

        $(document).ready(function() {
            const $mainwrapper = $('.main-wrapper');
            const $slider = $('.main-slider');
            const $sliderContainer = $('#slider-container');
            const $sliderTemplate = $('#slider-template');
            const $wrappersticker = $('.wrapper-sticker');
            const $prevBtn = $('.slider-prev-btn');
            const $nextBtn = $('.slider-next-btn');
            const $pagination = $('.slider-pagination');
            const $sticker1 = $('.wrapper-sticker1');
            const $sticker2 = $('.wrapper-sticker2');
            const $sticker3 = $('.wrapper-sticker3');
            const $sticker4 = $('.wrapper-sticker4');

            $mainwrapper.css('padding-top', '30px');
            $mainwrapper.css('padding-bottom', '0px');
            $mainwrapper.css('background-position', 'center bottom -80px');
            $mainwrapper.css('opacity', '1');
            $mainwrapper.css('background-color', 'rgb(251,251,251)');
            $slider.css('max-width', '1138px');
            $slider.css('opacity', '1');
            $sliderContainer.css('max-width', '100%');
            $sliderContainer.css('display', 'flex');
            $wrappersticker.css('padding-bottom', '180px');
            $pagination.css('display', 'none');

            function setSliderTransform() {
                if ($(window).width() >= 1124) {
                    $mainwrapper.css('transition', '2s ease-in');
                    $slider.css('transform', 'translateY(5%)');
                    $slider.css('opacity', '1');
                } else {
                    $mainwrapper.css('transition', 'none');
                    $slider.css('transform', 'translate(0px, 0%)');
                    $slider.css('opacity', '1');
                }
            }

            setTimeout(function() {
            $sticker1.css('opacity', '1');
            $sticker1.css('transition', '1s ease-in');
            }, 3000);

            setTimeout(function() {
            $sticker2.css('opacity', '1');
            $sticker2.css('transition', '1s ease-in');
            }, 3500);

            setTimeout(function() {
            $sticker3.css('opacity', '1');
            $sticker3.css('transition', '1s ease-in');
            }, 4000);

            setTimeout(function() {
            $sticker4.css('opacity', '1');
            $sticker4.css('transition', '1s ease-in');
            }, 5000);
            
            let isScaledUp = false;

            setInterval(() => {

                $sticker4.css('transition', '1s ease-in');
                if (isScaledUp) {
                $sticker4.css('transform', 'scale(1.0)');
                } else {
                $sticker4.css('transform', 'scale(1.1)');
                }
                isScaledUp = !isScaledUp;
            }, 1000);

            setSliderTransform();
            $(window).on('resize', function() {
                setSliderTransform();
            });

            for (const key in sliderData) {
                if (Object.hasOwnProperty.call(sliderData, key)) {
                    const data = sliderData [key];
                    const $newsliderItem = $sliderTemplate.find('.slider-item').clone();
                    $newsliderItem.attr('data-slider', key);
                    $newsliderItem.find('.slider-image > img').attr({
                        src: data.image,
                        alt: data.content
                    });
                    $newsliderItem.find('.slider-type').text(data.type);
                    $newsliderItem.find('.slider-content').text(data.content);
                    $newsliderItem.find('.slider-botton-box');
                    $sliderContainer.append($newsliderItem);
                }
            }

            const imageCount = $sliderContainer.find('li').length;
            const cloneCount = 1;
            const imageMargin = 30;

            $sliderContainer.find('li').css('margin-right', `${imageMargin}px`);
            const $originalSlides = $sliderContainer.children('li');
            $originalSlides.last().clone().addClass('clone').prependTo($sliderContainer);
            $originalSlides.first().clone().addClass('clone').appendTo($sliderContainer);

            const totalImageCount = $sliderContainer.find('li').length;
            let currentIndex = cloneCount;
            let isMoving = false;
            let isDragging = false;
            let startPosition = 0;
            let currentTranslate = 0;
            let autoSlideInterval;

            // --- 함수 정의 ---
            function setInitialPosition() {
                const slideItemWidth = $sliderContainer.find('li').first().outerWidth(true);
                $sliderContainer.css('width', `${totalImageCount * slideItemWidth}px`);
                $sliderContainer.css('transform', `translateX(${-currentIndex * slideItemWidth}px)`);
            }

            function updateSlider() {
                isMoving = true;
                const slideItemWidth = $sliderContainer.find('li').first().outerWidth(true);
                const moveDistance = -currentIndex * slideItemWidth;
                $sliderContainer.css('transition', 'transform 0.5s ease-in-out');
                $sliderContainer.css('transform', `translateX(${moveDistance}px)`);
                updatePagination();
            }

            function createPagination() {
                $pagination.empty();
                const paginationCount = 3;
                for (let i = 0; i < paginationCount; i++) {
                    const $bullet = $('<div class="slider-pagination-bullet"></div>');
                    $bullet.attr('data-index', i);
                    $pagination.append($bullet);
                }
                updatePagination();
            }

            function updatePagination() {
                const activeIndex = (currentIndex - cloneCount + imageCount) % imageCount;
                $pagination.find('.slider-pagination-bullet').removeClass('active');
                $pagination.find(`.slider-pagination-bullet[data-index="${activeIndex % 3}"]`).addClass('active');
            }

            function startAutoSlide() {
                if (autoSlideInterval) return;
                autoSlideInterval = setInterval(function() {
                    if (!isMoving) {
                        currentIndex++;
                        updateSlider();
                    }
                }, 3000);
            }

            function stopAutoSlide() {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }

            // --- 마우스/터치 이벤트 핸들러 통합 ---
            const handleStart = (e) => {
            e.preventDefault();
            isDragging = true;
            isMoving = false;
            startPosition = e.type.includes('mouse') ? e.pageX : e.originalEvent.touches[0].pageX;
            stopAutoSlide();
            $sliderContainer.css('transition', 'none');

            const transformMatrix = $sliderContainer.css('transform').match(/matrix\((.+)\)/);
            if (transformMatrix && transformMatrix[1]) {
                currentTranslate = parseFloat(transformMatrix[1].split(', ')[4]); 
            } else {
                currentTranslate = 0;
            }
        };

        const handleMove = (e) => {
            if (!isDragging) return;
            e.preventDefault(); // 
            const currentPosition = e.type.includes('mouse') ? e.pageX : e.originalEvent.touches[0].pageX;
            const dragDistance = currentPosition - startPosition;
            const newTranslate = currentTranslate + dragDistance;
            $sliderContainer.css('transform', `translateX(${newTranslate}px)`);
        };

        const handleEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const endPosition = e.type.includes('mouseup') ? e.pageX : e.originalEvent.changedTouches[0].pageX;
        const dragDistance = endPosition - startPosition;
        
        if (Math.abs(dragDistance) > 50) { 
            if (dragDistance < 0) {
                currentIndex++;
            } else {
                currentIndex--;
            }
        }
        
        updateSlider();
        startAutoSlide();
        };

        $(window).on('resize', setInitialPosition);

        $sliderContainer.on('transitionend', function() {
            isMoving = false;
            if (currentIndex >= imageCount + cloneCount) {
                $sliderContainer.css('transition', 'none');
                currentIndex = cloneCount;
                const slideItemWidth = $sliderContainer.find('li').first().outerWidth(true);
                $sliderContainer.css('transform', `translateX(${-currentIndex * slideItemWidth}px)`);
            } else if (currentIndex <= 0) {
                $sliderContainer.css('transition', 'none');
                currentIndex = imageCount;
                const slideItemWidth = $sliderContainer.find('li').first().outerWidth(true);
                $sliderContainer.css('transform', `translateX(${-currentIndex * slideItemWidth}px)`);
            }
        });

        $nextBtn.on('click', function() {
            if (!isMoving) {
                currentIndex++;
                updateSlider();
            }
        });

        $prevBtn.on('click', function() {
            if (!isMoving) {
                currentIndex--;
                updateSlider();
            }
        });

        $sliderContainer.on('mouseenter', stopAutoSlide).on('mouseleave', startAutoSlide);

        // 이벤트 리스너 연결
        $sliderContainer.on('mousedown', handleStart);
        $sliderContainer.on('mousemove', handleMove);
        $(document).on('mouseup', handleEnd);
        
        $sliderContainer.on('touchstart', handleStart);
        $sliderContainer.on('touchmove', handleMove);
        $(document).on('touchend', handleEnd);

        $pagination.on('click', '.slider-pagination-bullet', function() {
            if (isMoving) return;
            stopAutoSlide();
            const targetIndex = parseInt($(this).attr('data-index'), 10);
            currentIndex = targetIndex + cloneCount;
            updateSlider();
            startAutoSlide();
        });

        setInitialPosition();
        createPagination();
        startAutoSlide();
    });

//인기 아티클

$(document).ready(function() {
    const articles = [
        "이건 첫 번째 레슨~ 요즘 유행하는 밈은 알고 가기! [2025년 7월 최신 밈 모음]",
        "요즘 숏폼게 감자는 꾸준한 자기 기록! 시리즈 콘텐츠 크리에이터 모음",
        "인기 밈 알면 하루아침에 날아가서 궁전으로 갈 수도 있어~ [2025년 6월 최신 밈 모음]",
        "2025 상반기 마케팅 트렌드·이슈 총결산! 실무자가 주목해야 할 변화는?",
        "재고 떨이가 아니고 행운 박스입니다만? 요즘 주목받는 절약 소비 트렌드!",
        "저희는 합의 끝에 이 챌린지로 골랐습니다. 알고리즘 탑승 직행하는 인기 릴스 모음!",
        "인스타 DM 창에 이모지를 보내면 시작되는 게임? 숨겨진 인스타그램 업데이트 소식 확인하세요! [게이미피케이션]",
        "CEO가 콘텐츠 천재면 벌어지는 일? 대표가 직접 운영하는 SNS의 성공 법칙!",
        "유튜브 필승법 = 귀여운 동물? 공공기관도, AI 크리에이터도 써먹는 콘텐츠 치트키!",
        "치킨 안 먹는다고? 복날인데? 오빠닭과 bhc의 똑똑한 복날 마케팅 전략!"
    ];

    const $articleWrapper = $('.article-wrapper');
    const $prevBtn = $('.prev-btn1');
    const $nextBtn = $('.next-btn1');
    const $sliderContainer = $('.article-container');
    const $pagination = $('.article-pagination');

    let currentPage = 1;
    const totalPages = 2;

    const $articleList1 = $articleWrapper.find('.article-list').eq(0);
    const $articleList2 = $articleWrapper.find('.article-list').eq(1);

    articles.forEach(function(articleTitle, index) {
        const rank = index + 1;
        const articleHtml = `
            <li>
                <div class="article-item">
                    <span class="rank">${rank}</span>
                    <a href="#">
                        ${articleTitle}
                    </a>
                </div>
            </li>
        `;
        if (index < 5) {
            $articleList1.append(articleHtml);
        } else {
            $articleList2.append(articleHtml);
        }
    });

    $articleList2.clone().prependTo($articleWrapper).addClass('cloned-list-pre');
    $articleList1.clone().appendTo($articleWrapper).addClass('cloned-list-post');

    const $allArticleLists = $articleWrapper.find('.article-list');

    // 페이지네이션 및 드래그 기능 추가
    const createPagination = () => {
        $pagination.empty();
        for (let i = 0; i < totalPages; i++) {
            $('<div class="pagination-bullet"></div>').attr('data-index', i + 1).appendTo($pagination);
        }
    };

    const updatePagination = () => {
        const activeIndex = currentPage > totalPages ? 1 : currentPage < 1 ? totalPages : currentPage;
        $pagination.find('.pagination-bullet').removeClass('active');
        $pagination.find(`[data-index="${activeIndex}"]`).addClass('active');
    };

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let slideWidth = $articleWrapper.find('.article-list').first().outerWidth(true);

    const handleStart = (e) => {
        isDragging = true;
        const event = e.originalEvent || e;
        startPosition = event.touches ? event.touches[0].pageX : event.pageX;
        $articleWrapper.css('transition', 'none');
        const transformMatrix = $articleWrapper.css('transform').match(/matrix(?:(.*?))?/);
        if (transformMatrix && transformMatrix[1]) {
            currentTranslate = parseFloat(transformMatrix[1].split(', ')[4]);
        }
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const event = e.originalEvent || e;
        const currentPosition = event.touches ? event.touches[0].pageX : event.pageX;
        const dragDistance = currentPosition - startPosition;
        $articleWrapper.css('transform', `translateX(${currentTranslate + dragDistance}px)`);
    };

    const handleEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        const event = e.originalEvent || e;
        const endPosition = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
        const dragDistance = endPosition - startPosition;

        if (Math.abs(dragDistance) > slideWidth / 4) {
            if (dragDistance > 0) {
                $prevBtn.trigger('click');
            } else {
                $nextBtn.trigger('click');
            }
        } else {
            updateSlider();
        }
    };

    // 이벤트 리스너 연결
    $articleWrapper.on('mousedown touchstart', handleStart);
    $articleWrapper.on('mousemove touchmove', handleMove);
    $(document).on('mouseup touchend', handleEnd);

    // 슬라이더 이동 함수
    function updateSlider() {
        $articleWrapper.css('transition', 'transform 0.5s ease-in-out');
        $articleWrapper.css('transform', `translateX(-${currentPage * 100}%)`);
        updatePagination();
    }

    // 버튼 클릭 이벤트
    $nextBtn.on('click', function() {
        if (currentPage < totalPages + 1) {
            currentPage++;
            updateSlider();
        }
    });

    $prevBtn.on('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    });

    // 페이지네이션 클릭 이벤트
    $pagination.on('click', '.pagination-bullet', function() {
        currentPage = parseInt($(this).attr('data-index'));
        updateSlider();
    });

    // 무한 루프 처리
    $articleWrapper.on('transitionend', function() {
        if (currentPage === totalPages + 1) {
            $articleWrapper.css('transition', 'none');
            currentPage = 1;
            $articleWrapper.css('transform', `translateX(-${currentPage * 100}%)`);
        } else if (currentPage === 0) {
            $articleWrapper.css('transition', 'none');
            currentPage = totalPages;
            $articleWrapper.css('transform', `translateX(-${currentPage * 100}%)`);
        }
    });

    // 자동 슬라이드
    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            $nextBtn.trigger('click');
        }, 3000);
    }
    
    // 마우스 오버 시 자동 슬라이딩 중지, 마우스 아웃 시 다시 시작
    $sliderContainer.on('mouseenter', function() {
        clearInterval(autoSlideInterval);
    }).on('mouseleave', function() {
        startAutoSlide();
    });

    // 초기화
    $articleWrapper.css('transform', `translateX(-${currentPage * 100}%)`);
    createPagination();
    updatePagination();
    startAutoSlide();
});

//뉴스 아티클

const newsData = {
    animal: {
        image: './assets/images/1.png',
        type: '공공기관 • 유튜브 • 콘텐츠',
        content: '유튜브 필승법 = 귀여운 동물? 공공기관도, AI 크리에이터도 써먹는 콘텐츠 치트',
        summary: '안 본다고? 내가 이렇게 귀여운데?'
    },
    ai: {
        image: './assets/images/2.png',
        type: 'AI • F&B • 관광',
        content: '오늘의 뉴스 클리핑과 영상/캠페인 트렌드! 한눈에 보고 확인하세요',
        summary: '챗GPT의 ‘공부 모드’ 출시 소식부터 최신 광고 캠페인 영상까지?'
    },
    shortform: {
        image: './assets/images/3.png',
        type: '숏폼 • 크리에이터',
        content: '요즘 숏폼계 강자는 꾸준한 자기 기록! 시리즈 콘텐츠 크리에이터 모음',
        summary: '갓생러들의 일상 들여다보기!'
    },
    sns: {
        image: './assets/images/4.png',
        type: 'SNS • 스레드',
        content: '스레드 유저를 사로잡은 브랜드 계정은? 운영 팁까지 한눈에 보기',
        summary: '스레드 잘하는 브랜드 계정'
    },
    meme: {
        image: './assets/images/5.png',
        type: '밈 • 챌린지 • 해외',
        content: '콜드플레이가 만든 올해 가장 핫한 밈? 브랜드도 뛰어든 해외 밈·챌린지!',
        summary: '지금 해외에서 가장 핫한 밈은?'
    },
    platform: {
        image: './assets/images/6.png',
        type: '서비스기획 • 트랜드 • 플랫폼',
        content: '재고 떨이 아니고 행운 박스입니다만? 요즘 주목받는 절약 소비 트렌드!',
        summary: '지금 뜨는 절약 소비 트랜드?'
    }
};

$(document).ready(function() {
    const $recent = $('#recent');
    const $newsContainer = $('#news-container');
    const $newsTemplate = $('#news-template');

    $recent.css('margin-top', '100px');

    for (const key in newsData) {
        if (Object.hasOwnProperty.call(newsData, key)) {
            const data = newsData[key];

            // newsTemplate에서 .news-item을 복제
            const $newNewsItem = $newsTemplate.find('.news-item').clone();
            $newNewsItem.attr('data-news', key);

            // 복제된 요소의 하위 요소들을 찾아 데이터를 설정
            $newNewsItem.find('.news-image > img').attr({
                src: data.image,
                alt: data.content
            });
            $newNewsItem.find('.news-type').text(data.type);
            $newNewsItem.find('.news-content').text(data.content);
            $newNewsItem.find('.news-summary').text(data.summary);

            // newsContainer의 끝에 추가
            $newsContainer.append($newNewsItem);
        }
    }
});

//슬라이더

$(document).ready(function() {
    const $slide = $('#slide');
    const $imageList = $('.image-list');
    const $sliderContainer = $('.slider-container');
    const $prevBtn = $('.prev-btn');
    const $nextBtn = $('.next-btn');
    const $pagination = $('.slide-pagination');

    $slide.css('margin-top', '100px');
    $slide.css('margin-bottom', '100px');

    const sliderData = {
        1: {
            image: './assets/images/cliping/0807-700x400.png'
        },
        2: {
            image: './assets/images/cliping/0806-700x400.png'
        },
        3: {
            image: './assets/images/cliping/0805-700x400.png'
        },
        4: {
            image: './assets/images/cliping/0804-700x400.png'
        },
        5: {
            image: './assets/images/cliping/0801-700x400.png'
        }
    };

    $.each(sliderData, function(key, data) {
        $imageList.append(`<li><img src="${data.image}" alt=""></li>`);
    });

    const $listItems = $imageList.find('li');
    const imageCount = $listItems.length;
    let itemsToShow = 3;
    const imageMargin = 15;

    $listItems.css('margin-right', `${imageMargin}px`);
    $listItems.css('margin-left', `${imageMargin}px`);

    $listItems.slice(0, itemsToShow).clone().appendTo($imageList);
    $listItems.slice(-itemsToShow).clone().prependTo($imageList);

    const $allListItems = $imageList.find('li');
    const totalImageCount = $allListItems.length;
    let currentIndex = itemsToShow;
    let slideWidth;

    function initializeSlider() {
        if ($(window).width() <= 768) {
            itemsToShow = 1;
            const newLiWidth = $sliderContainer.width();
            $allListItems.css('width', `${newLiWidth}px`);
        } else {
            itemsToShow = 3;
            const itemWidth = ($sliderContainer.width() - (imageMargin * 2 * itemsToShow)) / itemsToShow;
            $allListItems.css('width', `${itemWidth}px`);
        }
        
        slideWidth = $allListItems.first().outerWidth(true);
        $imageList.css('width', `${totalImageCount * slideWidth}px`);
        $imageList.css('transform', `translateX(${-currentIndex * slideWidth}px)`);
        updatePagination();
    }

    function updateSlider() {
        const moveDistance = -currentIndex * slideWidth;
        $imageList.css('transition', 'transform 0.5s ease');
        $imageList.css('transform', `translateX(${moveDistance}px)`);
        updatePagination();
    }

    function createPagination() {
        $pagination.empty();
        for (let i = 0; i < imageCount; i++) {
            const $bullet = $('<div class="pagination-bullet"></div>');
            $bullet.attr('data-index', i);
            $pagination.append($bullet);
        }
    }

    function updatePagination() {
        let activeIndex = currentIndex - itemsToShow;
        if (activeIndex < 0) {
            activeIndex = imageCount - 1;
        } else if (activeIndex >= imageCount) {
            activeIndex = 0;
        }

        $pagination.find('.pagination-bullet').removeClass('active');
        $pagination.find(`.pagination-bullet[data-index="${activeIndex}"]`).addClass('active');
    }

    $nextBtn.on('click', function() {
        if (currentIndex < imageCount + itemsToShow) {
            currentIndex++;
            updateSlider();
        }
    });

    $prevBtn.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    $pagination.on('click', '.pagination-bullet', function() {
        const targetIndex = parseInt($(this).attr('data-index'), 10);
        currentIndex = targetIndex + itemsToShow;
        updateSlider();
    });

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    
    let isTransitioning = false; 

    const handleStart = (e) => {
        if (isTransitioning) return;
        
        e.preventDefault();
        isDragging = true;
        const event = e.originalEvent || e;
        startPosition = event.touches ? event.touches[0].pageX : event.pageX;
        $imageList.css('transition', 'none');
        const transformMatrix = $imageList.css('transform').match(/matrix(?:(.*?))?/);
        if (transformMatrix && transformMatrix[1]) {
            currentTranslate = parseFloat(transformMatrix[1].split(', ')[4]);
        }
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const event = e.originalEvent || e;
        const currentPosition = event.touches ? event.touches[0].pageX : event.pageX;
        const dragDistance = currentPosition - startPosition;
        const newTranslate = currentTranslate + dragDistance;
        $imageList.css('transform', `translateX(${newTranslate}px)`);
    };

    const handleEnd = (e) => {
        if (!isDragging) return;
        isDragging = false;
        isTransitioning = true; 
        
        const event = e.originalEvent || e;
        const endPosition = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
        const dragDistance = endPosition - startPosition;

        const dragDirection = Math.sign(dragDistance); 
        const slideChange = Math.round(Math.abs(dragDistance) / slideWidth);

        if (slideChange > 0) {
            currentIndex -= slideChange * dragDirection;
        }

        updateSlider();
    };

    $imageList.on('mousedown touchstart', handleStart);
    $imageList.on('mousemove touchmove', handleMove);
    $(document).on('mouseup touchend', handleEnd);

    let autoSlideInterval;
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            $nextBtn.trigger('click');
        }, 3000);
    }
    
    $sliderContainer.on('mouseenter', function() {
        clearInterval(autoSlideInterval);
    }).on('mouseleave', function() {
        startAutoSlide();
    });

    $imageList.on('transitionend', function() {
        isTransitioning = false;
        
        if (currentIndex >= imageCount + itemsToShow) {
            $imageList.css('transition', 'none');
            currentIndex = itemsToShow;
            $imageList.css('transform', `translateX(${-currentIndex * slideWidth}px)`);
        } 
        else if (currentIndex <= 0) {
            $imageList.css('transition', 'none');
            currentIndex = imageCount;
            $imageList.css('transform', `translateX(${-currentIndex * slideWidth}px)`);
        }
    });

    $(window).on('resize', function() {
        initializeSlider();
    });

    createPagination();
    initializeSlider();
    startAutoSlide();
});

//푸터

    $(document).ready(function() {
        const $footerimg = $('.footer-img');
        const $footergoguma = $('.footer-goguma');
        const $leftgoguma = $('.left-goguma');
        const $rightgoguma = $('.right-goguma');
        const $gogumasteam = $('.goguma-steam');
        const $stickernews = $('.sticker-news');
        const $stickersub = $('.sticker-sub');
        const $footertextgroup = $('.footer-text-group');

        $footerimg.css('padding-top', '50px');
        $footerimg.css('padding-bottom', '50px');

        $footerimg.hover(
            function(){
                $footergoguma.css('opacity', '0');
                $leftgoguma.css('opacity', '1');
                $leftgoguma.css('left', 'calc(50% - 130px)');
                $leftgoguma.css('rotate', '0deg');
                $rightgoguma.css('opacity', '1');
                $rightgoguma.css('right', 'calc(50% - 106px)');
                $rightgoguma.css('rotate', '0deg');
                $gogumasteam.css('opacity', '1');
                $gogumasteam.css('top', '10px');
                $stickernews.css('opacity', '1');
                $stickernews.css('left', 'calc(50% - 190px)');
                $stickersub.css('opacity', '1');
                $stickersub.css('right','calc(50% - 241px)');
            },
            function(){
                $footergoguma.css('opacity', '1');
                $leftgoguma.css('opacity', '0');
                $leftgoguma.css('left', 'calc(50% - 72px)');
                $leftgoguma.css('rotate', '15deg');
                $rightgoguma.css('opacity', '0');
                $rightgoguma.css('right', 'calc(50% - 66px)');
                $rightgoguma.css('rotate', '-15deg');
                $gogumasteam.css('opacity', '0');
                $gogumasteam.css('top', '30px');
                $stickernews.css('opacity', '0');
                $stickernews.css('left', 'calc(50% - 167px)');
                $stickersub.css('opacity', '0');
                $stickersub.css('right','calc(50% - 218px)');
            }

        );

        $footertextgroup.css('padding-top', '12px');
        $footertextgroup.css('padding-bottom', '12px');
    });