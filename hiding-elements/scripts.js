// jQuery(document).ready(function(){
//   jQuery("p").click(function(){
//     jQuery("img").show();
//     // jQuery("p2").click(function(){
//     //   jQuery("img").hidden();
//     //  used for hidding staff.
//     // });
//   });
// });
jQuery(document).ready(function(){
  jQuery("p").click(function(){
    jQuery("#walrus-showing").show();
  });
  jQuery("span").click(function(){
    jQuery("#walrus-hidden").hide();
  });
});
