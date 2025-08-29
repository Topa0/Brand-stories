fetch('config.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('grid');

    data.cards.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'card';

      if (idx % 2 === 0) {
        // 偶数：图片在左，文字在右
        card.innerHTML = `
          <a class="card-img" href="${item.link}">
            <img src="${item.image}" alt="">
          </a>
          <div class="card-text">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `;
      } else {
        // 奇数：文字在左，图片在右
        card.innerHTML = `
          <div class="card-text">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <a class="card-img" href="${item.link}">
            <img src="${item.image}" alt="">
          </a>
        `;
      }

      container.appendChild(card);
    });
  });
