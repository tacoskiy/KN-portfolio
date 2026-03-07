if (typeof window !== "undefined") {
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.work-item');
        const target = document.querySelector(".work-item.first");

        if (target && elements.length > 0) {
            target.classList.add('hovered');

            elements.forEach(el => {
                const addHoverClass = () => {
                    elements.forEach(item => item.classList.remove('hovered'));
                    el.classList.add('hovered');
                }

                el.addEventListener('mouseenter', addHoverClass);
                el.addEventListener('click', addHoverClass);
            });
        }

        const menuButton = document.querySelector(".menu-button");
        const navPanel = document.querySelector(".nav-panel");
        const navContent = document.getElementsByClassName("nav-item-content");

        if (menuButton && navPanel) {
            menuButton.addEventListener('click', tapHamburgerMenu);

            for(let i = 0; i < navContent.length; i++) {
                navContent[i].addEventListener('click', tapHamburgerMenu);
            }

            function tapHamburgerMenu () {
                // @ts-ignore
                menuButton.classList.toggle("active")
                // @ts-ignore
                navPanel.classList.toggle("active")
            }
        }

        const copyToast = document.querySelector('.copy-toast');
        const buttons = document.querySelectorAll('.copy-btn');
        
        if (copyToast && buttons) {
            buttons.forEach((button: any) => {
                button.addEventListener('click', (event: any) => {
                    const text = event.currentTarget.innerText;
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                        navigator.clipboard.writeText(text)
                            .then(() => {
                                copyToast.classList.add('active')
                                setTimeout(() => {
                                    copyToast.classList.remove('active')
                                }, 2000);
                            })
                            .catch(err => {
                            console.error("コピー失敗:", err);
                        });
                    } else {
                        fallbackCopyTextToClipboard(text);
                    }
            });
        });

            function fallbackCopyTextToClipboard(text: string) {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();

                try {
                    document.execCommand('copy');
                    copyToast?.classList.add('active')
                    setTimeout(() => {
                        copyToast?.classList.remove('active')
                    }, 2000);
                } catch (err) {
                    console.error('Fallback: コピー失敗', err);
                    alert("コピーできませんでした");
                }

                document.body.removeChild(textarea);
            }
        }
    });
}
