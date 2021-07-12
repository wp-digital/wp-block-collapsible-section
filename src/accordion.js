export default () => {
  var $accordionHeading = jQuery('.block-collapsible-section__heading');

  $accordionHeading.on('click', function(e){
    jQuery(e.target).closest('.wp-block-innocode-collapsible-section').toggleClass('is-opened')
  });
};
