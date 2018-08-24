$(function() {
    console.log('ready')
    $('input[name="empname"]').change(function(e) {
        console.log('input')
        var $this = $(this);
        // console.log($this.val());
      $.ajax({
        type: 'GET',
        url: '/',
        data:{"name":`${$this.val()}`}
      }).done(function() {
        window.location.href = '/p2'
      })
    })
    
  });
