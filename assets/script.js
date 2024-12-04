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





const servicesAnchor = document.getElementById('services-anchor');
const servicesDropdown = document.querySelector('.services-dropdown');

function showDropdown() {
  servicesDropdown.style.display = 'flex';
  servicesDropdown.style.opacity = '1';
}

function hideDropdown() {
  servicesDropdown.style.display = 'none';
  servicesDropdown.style.opacity = '0';
}

servicesAnchor.addEventListener('mouseover', showDropdown);
servicesDropdown.addEventListener('mouseover', function() {
  servicesDropdown.style.display = 'flex';
  servicesDropdown.style.opacity = '1';
});

servicesAnchor.addEventListener('mouseout', function(event) {
  if (!servicesDropdown.contains(event.relatedTarget)) {
    hideDropdown();
  }
});
servicesDropdown.addEventListener('mouseout', function(event) {
  if (!servicesAnchor.contains(event.relatedTarget)) {
    hideDropdown();
  }
});

// document.querySelectorAll('.services-dropdown .item').forEach((item)=>item.addEventListener("click",function(){
//     window.location.replace="services.html"
// }))