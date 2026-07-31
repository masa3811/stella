//headerスクロールしたら背景色変化------
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // 50px以上スクロールしたら
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // 50px 以上スクロールしたら
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


//ハンバーガーメニュー-----
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const spMenu = document.querySelector('.sp-menu');
const spMenuItems = spMenu.querySelectorAll('li');

menuToggle.addEventListener('change', () => {
  // ハンバーガーアイコンのアニメーション
  menuIcon.classList.toggle('open', menuToggle.checked);

  if (menuToggle.checked) {
    // メニューの高さを動的に取得
    const ul = spMenu.querySelector('ul');
    const height = ul.scrollHeight;
    spMenu.style.maxHeight = height + 'px';

    // フェードインアニメーション
    spMenuItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    });
  } else {
    spMenu.style.maxHeight = '0';

    // フェードアウトアニメーション
    spMenuItems.forEach((item) => {
      item.style.transitionDelay = `0s`;
      item.style.opacity = '0';
      item.style.transform = 'translateY(-10px)';
    });
  }
});


//topに戻る------
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.getElementById('to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTopBtn.classList.add('show');
    } else {
      toTopBtn.classList.remove('show');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


//mvのH2位置-----
function animateMvText() {
  const h2 = document.querySelector('.mv-wrap h2');

  requestAnimationFrame(() => {
    h2.classList.add('is-animated');
  });
}

// ページ読み込み時
window.addEventListener('load', animateMvText);
// リサイズ時にも対応
window.addEventListener('resize', animateMvText);




// kvのタイトル位置-----
function animateSectionTitle() {
  const sectionTitle = document.querySelector(".kv .page-ttl");

  if (!sectionTitle) return;

  requestAnimationFrame(() => {
    sectionTitle.classList.add("is-animated");
  });
}

window.addEventListener("load", animateSectionTitle);

/* --------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  // .link-box 内の .flex-1 全て
  const boxes = document.querySelectorAll('.link-box .flex-1');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 左から順番に表示
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('show');
          }, index * 400);
        });
        // 一度だけアニメーションさせる
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 }); // 少し見えたら発火

  boxes.forEach(box => observer.observe(box));
});



/* --------------------------------
 */


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.left-in, .right-in, .up-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elements.forEach((el, index) => {
          setTimeout(() => el.classList.add('show'), index * 150);
        });
        observer.disconnect(); // 一度だけアニメーション
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});


/* contactのチェックボタン */

document.addEventListener('DOMContentLoaded', () => {
  const agree = document.querySelector('.agree-check');
  const submitBtn = document.querySelector('.submit-btn');
  if (!agree || !submitBtn) return;
  submitBtn.disabled = true;
  agree.addEventListener('change', () => {
    submitBtn.disabled = !agree.checked;
    submitBtn.classList.toggle('inactive', !agree.checked);
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const backBtn = document.querySelector('.wpcf7-previous');
  if (backBtn) {
    backBtn.addEventListener('click', function (e) {
      e.preventDefault();
      history.back();
    });
  }
});



/*  戻るボタンで２通送らない */
document.addEventListener('wpcf7mailsent', function () {
  setTimeout(() => {
    sessionStorage.clear();
  }, 800);
});


/*トップスライダー*/
$('.mv-slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  fade: true,
  arrows: false,
  dots: false,
});