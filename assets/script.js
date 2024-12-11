document.querySelectorAll('.accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item'); 
        const icon = button.querySelector('i');
        const content = accordionItem.querySelector('.accordion-content');

        icon.classList.toggle('active');
        content.classList.toggle('active');
    });
});
document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector(".respo-header").classList.toggle("active");
});





document.addEventListener('DOMContentLoaded', function () {
  const servicesAnchor = document.getElementById('services-anchor');
  const servicesDropdown = document.querySelector('.services-dropdown');
  const header = document.querySelector('.header-1');

  let firstHover = true; // Track the first hover interaction

  servicesAnchor.addEventListener('mouseenter', function () {
    if (firstHover) {
      const bounding = header.getBoundingClientRect();
      const fromTop = bounding.bottom >= 0; // Check if hovering comes from the top
      if (fromTop) {
        servicesDropdown.classList.remove('visible'); // Do not open dropdown
      } else {
        servicesDropdown.classList.add('visible'); // Open dropdown
      }
      firstHover = false; // Disable this logic for subsequent interactions
    } else {
      servicesDropdown.classList.add('visible');
    }
  });

  servicesDropdown.addEventListener('mouseenter', function () {
    servicesDropdown.classList.add('visible');
  });

  function hideDropdown(e) {
    if (
      !header.contains(e.relatedTarget) &&
      !servicesDropdown.contains(e.relatedTarget)
    ) {
      servicesDropdown.classList.remove('visible');
    }
  }

  header.addEventListener('mouseleave', hideDropdown);
  servicesDropdown.addEventListener('mouseleave', hideDropdown);
});


// document.querySelectorAll('.services-dropdown .item').forEach((item)=>item.addEventListener("click",function(){
//     window.location.replace="services.html"
// }))