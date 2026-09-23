document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       タブ切り替え
    ===================================== */

    const tabButtons =
        document.querySelectorAll(".tab-button");

    const pages =
        document.querySelectorAll(".character-page");


    tabButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target =
                button.dataset.target;


            // タブのactiveを変更

            tabButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            // ページを切り替える

            pages.forEach(function (page) {

                page.classList.remove("active-page");

            });


            const targetPage =
                document.getElementById(target);


            if (targetPage) {

                targetPage.classList.add("active-page");

            }


            // タブ切り替え時はページ上部へ

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    });



    /* =====================================
       キャラクタークリック
    ===================================== */

    const characterCards =
        document.querySelectorAll(".character-card");


    characterCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const targetId =
                card.dataset.scroll;


            const target =
                document.getElementById(targetId);


            if (!target) {

                return;

            }


            /*
             * 画面上部に固定している
             * タブの高さを考慮
             */

            const headerOffset = 75;


            const targetPosition =
                target.getBoundingClientRect().top
                + window.pageYOffset
                - headerOffset;


            // スムーズスクロール

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });

});
