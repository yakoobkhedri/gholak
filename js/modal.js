document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal-box");
    const closeModal = document.getElementById("closeAuthModal");

    // بررسی کنید آیا کاربر قبلاً مودال را دیده است یا نه
    if (!localStorage.getItem("modalClosed")) {
        modal.classList.add('active')
    }

    // با کلیک روی دکمه بستن، مودال را ببندید و وضعیت را در localStorage ذخیره کنید
    closeModal.addEventListener("click", function() {
        modal.classList.remove('active')
        localStorage.setItem("modalClosed", true);
    });

    // اگر کاربر خارج از مودال کلیک کند، مودال بسته شود
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove('active')
            localStorage.setItem("modalClosed", true);
        }
    });
});