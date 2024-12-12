const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; // Відкриваємо/закриваємо меню
});

// Модальне вікно

let modal = document.getElementById("trialModal");
let openModalBtn = document.getElementById("openModal");
let closeModalBtn = document.getElementById("closeModal");

openModalBtn.onclick = function() {
    modal.style.display = "flex";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*Свайпер*/

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Генерація карточок блогу

const blogCards = [
    {
        icon: "fa-regular fa-images",
        title: "Ідеї та натхнення.",
        description: "Дізнайтеся, як використовувати наш додаток для організації своїх думок та ідей."
    },
    {
        icon: "fa-solid fa-magnifying-glass",
        title: "Оптимізація робочих процесів.",
        description: "Дізнайтеся, як наш додаток допомагає структурувати ваші робочі нотатки та підвищити продуктивність."
    },
    {
        icon: "fa-solid fa-robot",
        title: "Автоматизація та синхронізація.",
        description: "Ваші нотатки завжди синхронізуються між різними пристроями, забезпечуючи доступ до них у будь-який час і в будь-якому місці."
    },
    {
        icon: "fa-solid fa-circle-info",
        title: "Вся інформація під рукою.",
        description: "Всі ваші нотатки зберігаються в одному місці. Переглядайте, редагуйте та організовуйте їх без зайвих зусиль."
    },
    {
        icon: "fa-solid fa-people-arrows",
        title: "Спільна робота над нотатками.",
        description: "Спільно працюйте над нотатками з колегами чи друзями, обговорюйте ідеї, додавайте коментарі та обирайте оптимальні рішення разом."
    },
    {
        icon: "fa-solid fa-file-shield",
        title: "Безпека ваших даних.",
        description: "Ваші нотатки завжди під захистом. Використовуйте шифрування та захист паролем, щоб забезпечити конфіденційність та безпеку вашої інформації."
    }
];

const blogSection = document.querySelector('.blog-cards-container');

blogCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card-notes');

    cardElement.innerHTML = `
        <i class="${card.icon}" style="color: #ffffff;"></i>
        <p><span>${card.title}</span>${card.description}</p>
    `;

    blogSection.appendChild(cardElement);
});
