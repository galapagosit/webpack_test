$(function () {
  $('#postcode1').jpostal({
    postcode: [
      '#postcode1',
    ],
    address: {
      '#address1': '%3',
      '#address2': '%4',
      '#address3': '%5',
      '#address1_kana': '%8',
      '#address2_kana': '%9',
      '#address3_kana': '%10',
    }
  });
});
