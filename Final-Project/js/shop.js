fetch('data/cheeses.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cheese-container');

    data.cheese.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('cheese-item');

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.title = item.name;
      img.onclick = () => alert(`${item.name} added to cart!`);

      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.textContent = item.name;

      wrapper.appendChild(img);
      wrapper.appendChild(tooltip);
      container.appendChild(wrapper);
    });
  })
 
