/* ============================================================================
   Riley Gramlich — portfolio
   Everything the page needs, in one file, with no dependencies. The only
   external script is EmailJS, loaded from a CDN in index.html purely so the
   contact form keeps working without an npm install behind it.
   ========================================================================== */

(function () {
    "use strict";

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ------------------------------------------------------------- nav --- */

    var nav = document.getElementById("nav");
    var burger = document.getElementById("burger");
    var links = document.getElementById("nav-links");

    /* The bar tightens and goes opaque once you leave the top, so section copy
       passing underneath never shows through the labels. */
    if (nav) {
        var onNavScroll = function () {
            nav.classList.toggle("is-stuck", window.scrollY > 12);
        };
        onNavScroll();
        window.addEventListener("scroll", onNavScroll, { passive: true });
    }

    if (burger && links) {
        var setMenu = function (open) {
            links.classList.toggle("is-open", open);
            burger.classList.toggle("is-open", open);
            burger.setAttribute("aria-expanded", String(open));
            burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        };

        burger.addEventListener("click", function () {
            setMenu(!links.classList.contains("is-open"));
        });

        // Tapping a link should close the sheet behind it.
        links.addEventListener("click", function (e) {
            if (e.target.tagName === "A") setMenu(false);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && links.classList.contains("is-open")) {
                setMenu(false);
                burger.focus();
            }
        });

        // Coming back to a wide viewport with the sheet open would otherwise
        // leave the desktop nav stuck in its mobile transform.
        window.addEventListener("resize", function () {
            if (window.innerWidth > 1040) setMenu(false);
        });
    }

    /* ---------------------------------------------------------- reveal --- */
    /* Elements start displaced, small and soft, then snap into place once seen.
       They stay revealed, so scrolling back up does not replay anything. */

    var revealables = document.querySelectorAll(".reveal");

    if (reduced || !("IntersectionObserver" in window)) {
        // No observer, or the visitor asked us to stop moving things: show
        // everything immediately. Content must never depend on the animation.
        revealables.forEach(function (el) { el.classList.add("is-in"); });
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-in");
                io.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        revealables.forEach(function (el) { io.observe(el); });
    }

    /* --------------------------------------------------- project stack --- */
    /* The cards are `position: sticky` with stepped offsets, so CSS alone
       already stacks them. This adds the part CSS cannot express: how far a
       given card has been covered by the one after it.

       A stuck card's own rect stops moving — it is pinned — so progress has to
       be measured from the NEXT card's top edge closing on this one. That ratio
       becomes --overtake, and the stylesheet dims, shrinks and blurs the card
       as it slides underneath. */

    var stack = Array.prototype.slice.call(document.querySelectorAll(".project"));

    /* Each card's index drives its sticky offset and z-index in the stylesheet.
       Written unconditionally — before the reduced-motion and viewport checks
       below — because the stepped edge is layout, not animation, and it should
       survive both. */
    stack.forEach(function (card, i) { card.style.setProperty("--i", i); });

    /* The stylesheet drops the cards back to `position: static` below 720px
       wide or 620px tall, because stacking sheets taller than the viewport
       traps content behind them. Matching that here matters for more than
       tidiness: without it this would keep measuring six rects on every scroll
       frame of a phone, to set a variable nothing is reading. */
    var mqStacked = window.matchMedia("(max-width: 720px), (max-height: 620px)");

    if (stack.length > 1 && !reduced) {
        var ticking = false;
        var wasFlat = false;

        var updateStack = function () {
            if (mqStacked.matches) {
                // Clear once on the way in, then do nothing until it changes.
                if (!wasFlat) {
                    stack.forEach(function (c) { c.style.setProperty("--overtake", "0"); });
                    wasFlat = true;
                }
                ticking = false;
                return;
            }
            wasFlat = false;

            for (var i = 0; i < stack.length; i++) {
                var card = stack[i];
                var next = stack[i + 1];

                if (!next) {
                    card.style.setProperty("--overtake", "0");
                    continue;
                }

                var rect = card.getBoundingClientRect();
                var nextTop = next.getBoundingClientRect().top;

                // Distance between this card's top and the next card's top,
                // normalised by this card's height: 1 means fully covered.
                var travel = rect.height || 1;
                var covered = 1 - (nextTop - rect.top) / travel;

                if (covered < 0) covered = 0;
                if (covered > 1) covered = 1;

                card.style.setProperty("--overtake", covered.toFixed(3));
            }
            ticking = false;
        };

        var onStackScroll = function () {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateStack);
        };

        updateStack();
        window.addEventListener("scroll", onStackScroll, { passive: true });
        window.addEventListener("resize", onStackScroll, { passive: true });

        // Images load late and change card heights underneath the maths.
        window.addEventListener("load", updateStack);
    }

    /* --------------------------------------------- active section link --- */

    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

    if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var id = entry.target.id;
                navAnchors.forEach(function (a) {
                    a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
                });
            });
        }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

        sections.forEach(function (s) { spy.observe(s); });
    }

    /* ----------------------------------------------------------- year --- */

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    /* -------------------------------------------------------- contact --- */
    /* EmailJS, loaded from a CDN rather than bundled. These IDs are the
       publishable kind — they are designed to sit in client-side code, and
       they were already public in the previous React build. */

    var SERVICE = "service_ay4nvn7";
    var TEMPLATE = "template_iw49qpe";
    var PUBLIC_KEY = "KPjUKtAwiIoLni6eI";

    var form = document.getElementById("contact-form");
    var status = document.getElementById("contact-status");
    var submit = document.getElementById("contact-submit");

    if (form && status && submit) {
        var say = function (msg, kind) {
            status.textContent = msg;
            status.className = "contact-status" + (kind ? " is-" + kind : "");
        };

        if (window.emailjs && typeof window.emailjs.init === "function") {
            window.emailjs.init(PUBLIC_KEY);
        }

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // novalidate is set on the form so this message replaces the
            // browser's default bubble, which is easy to miss on mobile.
            if (!form.checkValidity()) {
                say("Please fill in your name, a valid email, and a message.", "error");
                form.reportValidity();
                return;
            }

            if (!window.emailjs) {
                say("The mail service did not load. Email gramlichriley@gmail.com instead.", "error");
                return;
            }

            submit.disabled = true;
            say("Sending…");

            window.emailjs.sendForm(SERVICE, TEMPLATE, form).then(
                function () {
                    say("Thanks. Your message has been sent.", "ok");
                    form.reset();
                    submit.disabled = false;
                },
                function () {
                    say("Sorry, something went wrong. Please try again, or email gramlichriley@gmail.com.", "error");
                    submit.disabled = false;
                }
            );
        });
    }
})();
