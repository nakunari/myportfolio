// $(document).ready(function(){
//     $('#loadData').on('click', function(){
//       $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts', // 예시 API
//         method: 'GET',
//         success: function(data) {
//           let result = '<ul>';
//           data.slice(0, 5).forEach(function(post) {
//             result += '<li>' + post.title + '</li>';
//           });
//           result += '</ul>';
//           $('#dataResult').html(result); // 데이터를 결과 영역에 출력
//         },
//         error: function() {
//           $('#dataResult').html('<p>There was an error loading the data.</p>');
//         }
//       });
//     });
//   });
  
//포폴 버튼
$(document).ready(function () {
    // 페이지가 로드될 때 초기에 모든 이미지를 숨기고 pc-version-img만 표시
    $('.accordion-body').each(function () {
        $(this).find('.pc-version-img').show();  // PC 버전 첫 번째 이미지만 표시
        $(this).find('.mobile-version-img, .tablet-version-img, .all-version-img, .pc-version-img2, .mobile-version-img2, .tablet-version-img2').hide();  // 나머지 숨김
    });
  
    // 버튼 클릭 시 해당 아코디언 내에서 이미지만 보이도록 설정
    $('.pc-version').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.pc-version-img');
    });
  
    $('.pc-version2').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.pc-version-img2');
    });
  
    $('.mobile-version').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.mobile-version-img');
    });
  
    $('.mobile-version2').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.mobile-version-img2');
    });
  
    $('.tablet-version').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.tablet-version-img');
    });
  
    $('.tablet-version2').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.tablet-version-img2');
    });
  
    $('.all-version').click(function () {
        const parent = $(this).closest('.accordion-body');
        showOnly(parent, '.all-version-img');
    });
  
    // 선택한 이미지만 보이고 나머지는 숨기는 함수
    function showOnly(parent, selector) {
        parent.find('.pc-version-img, .pc-version-img2, .mobile-version-img, .mobile-version-img2, .tablet-version-img, .tablet-version-img2, .all-version-img').hide();  // 모든 이미지를 숨김
        parent.find(selector).show();  // 선택된 이미지만 표시
    }
  });
  

  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function (event) {
        // 작은 지연 시간을 줘야 아코디언이 열린 후에 스크롤이 조정됨
        setTimeout(() => {
            const offset = 100; // 상단 여백 조정을 위한 값 (필요에 따라 조정)
            const scrollPosition = button.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth' // 스크롤 애니메이션 적용
            });
        }, 300); // 300ms 지연
    });
});
