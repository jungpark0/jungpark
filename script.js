const menu1 = document.querySelector('.menu1');
const list2025 = document.querySelector('.list2025');

menu1.addEventListener('click', () => {
    if (list2025.style.display === 'none' || list2025.style.display === '') {
        list2025.style.display = 'block';
    } else {
        list2025.style.display = 'none';
    }
});

const menu2 = document.querySelector('.menu2');
const list2024 = document.querySelector('.list2024');

menu2.addEventListener('click', () => {
    if (list2024.style.display === 'none' || list2024.style.display === '') {
        list2024.style.display = 'block';
    } else {
        list2024.style.display = 'none';
    }
});

const menu3 = document.querySelector('.menu3');
const list2023 = document.querySelector('.list2023');

menu3.addEventListener('click', () => {
    if (list2023.style.display === 'none' || list2023.style.display === '') {
        list2023.style.display = 'block';
    } else {
        list2023.style.display = 'none';
    }
});

const menu4 = document.querySelector('.menu4');
const list2002 = document.querySelector('.list2002');

menu4.addEventListener('click', () => {
    if (list2002.style.display === 'none' || list2002.style.display === '') {
        list2002.style.display = 'block';
    } else {
        list2002.style.display = 'none';
    }
});

// hideout pop-up창 관련
document.addEventListener("DOMContentLoaded", () => {
    // HTML 요소 가져오기
    const hideoutpopup = document.getElementById("hideoutpopup");
    const hideoutcloseButton = document.getElementById("hideoutclose");
    const hideoutprevButton = document.getElementById("hideoutprev");
    const hideoutnextButton = document.getElementById("hideoutnext");
    const hideoutpopupImage = document.getElementById("hideoutpopupimage");
    const hideoutLink = document.getElementById("hideout");
  
    // 이미지 배열 및 현재 이미지 인덱스
    const images = [
      "images/hideout/image1.svg",
      "images/hideout/image2.svg",
      "images/hideout/image3.svg",
      "images/hideout/image4.svg",
      "images/hideout/image5.svg",
      "images/hideout/image6.svg",
      "images/hideout/image7.svg",
      "images/hideout/image8.svg",
      "images/hideout/image9.svg",
      "images/hideout/image10.svg",
      "images/hideout/image11.svg",
    ];
    let currentIndex = 0;
  
    // 팝업 열기 함수
    function openPopup() {
      hideoutpopup.classList.remove("hidden");
      updateImage();
    }
  
    // 팝업 닫기 함수
    function closePopup() {
      hideoutpopup.classList.add("hidden");
    }
  
    // 이전 이미지로 변경
    function showPrevious() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    }
  
    // 다음 이미지로 변경
    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }
  
    // 이미지 업데이트 함수
    function updateImage() {
      hideoutpopupImage.src = images[currentIndex];
      hideoutpopupImage.alt = `image of 'hide out' ${currentIndex + 1}`;
    }
  
    // 이벤트 리스너 등록
    hideoutLink.addEventListener("click", (e) => {
      e.preventDefault(); // 기본 동작 차단
      openPopup();
    });
  
    hideoutcloseButton.addEventListener("click", closePopup);
    hideoutprevButton.addEventListener("click", showPrevious);
    hideoutnextButton.addEventListener("click", showNext);
    });

//typo1 pop-up창 관련
document.addEventListener("DOMContentLoaded", () => {
  // HTML 요소 가져오기
  const typo1popup = document.getElementById("typo1popup");
  const typo1closeButton = document.getElementById("typo1close");
  const typo1popupImage = document.getElementById("typo1popupimage");
  const typo1Link = document.getElementById("typo1");

  // 팝업 열기 함수
  function openPopup() {
    typo1popupImage.src = "images/typo1.svg"; // 이미지 설정
    typo1popupImage.alt = "image of 'i found myself..'";
    typo1popup.classList.remove("hidden");
  }

  // 팝업 닫기 함수
  function closePopup() {
    typo1popup.classList.add("hidden");
  }

  // 이벤트 리스너 등록
  typo1Link.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 동작 차단
    openPopup();
  });

  typo1closeButton.addEventListener("click", closePopup);
});

