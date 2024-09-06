$(document).ready(function(){
    $('#loadData').on('click', function(){
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts', // 예시 API
        method: 'GET',
        success: function(data) {
          let result = '<ul>';
          data.slice(0, 5).forEach(function(post) {
            result += '<li>' + post.title + '</li>';
          });
          result += '</ul>';
          $('#dataResult').html(result); // 데이터를 결과 영역에 출력
        },
        error: function() {
          $('#dataResult').html('<p>There was an error loading the data.</p>');
        }
      });
    });
  });
  