
$(function(){
  console.log('hoge');
  console.log(jQuery('#hoge'));
        $('#postcode1').jpostal({
        postcode : [
          '#postcode1',
        ],
        address : {
          '#address1'  : '%3',
          '#address2'  : '%4',
          '#address3'  : '%5'
        }
      });
});
