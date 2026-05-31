import "../styles/Home.css";
import { useState, useEffect } from "react";
import {
  Menu,
  ArrowRight,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  X,
  HandCoins,
  Plus,
  Users,
  CircleCheckBig,
  MessageCircle,
  Bell,
  WifiOff
} from "lucide-react";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import {
  TransformWrapper,
  TransformComponent
}
from "react-zoom-pan-pinch";

export default function Home() {

const [openFaq, setOpenFaq] = useState(0);
const [scrolled, setScrolled] = useState(false);
const [showImageViewer, setShowImageViewer] =
  useState(false);

useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

useEffect(() => {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

          }

        });

      },

      {
        threshold: .15
      }
    );

  document
    .querySelectorAll(".reveal")
    .forEach(el =>
      observer.observe(el)
    );

  return () =>
    observer.disconnect();

}, []);

const faqs = [
  {
    question: "Is IOU free to use?",
    answer:
      "Yes. IOU is completely free to use. There are no subscriptions, hidden fees, or transaction charges."
  },

  {
    question: "Can I use IOU offline?",
    answer:
      "Yes. You can view balances, transactions, and add entries even without internet. Data syncs automatically when you're back online."
  },

  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Your data is stored securely and only shared with the people involved in a transaction. We never sell your data."
  },

  {
    question: "Can I split expenses in groups?",
    answer:
      "Yes. Create groups for trips, roommates, college projects, clubs, and more. IOU automatically calculates who owes whom."
  },

  {
    question: "Can I send reminders?",
    answer:
      "Yes. You can send friendly payment reminders directly through IOU without awkward conversations."
  },

  {
    question: "Does IOU have chat?",
    answer:
      "Yes. Every transaction and group includes built-in chat so everyone stays on the same page."
  },

  {
    question: "Will IOU come to iOS?",
    answer:
      "iOS support is planned for the future. Right now IOU is available for Android while we continue improving the experience."
  }
];

const [showPreview, setShowPreview] =
  useState(false);

const [currentScreen, setCurrentScreen] =
  useState(0);

const screens = [

  {
    title: "Home",
    image: "/screens/home.jpg"
  },

  {
    title: "Activity",
    image: "/screens/activity.jpg"
  },

  {
    title: "Add Transaction",
    image: "/screens/add-transaction.jpg"
  },

  {
    title: "Transaction Details",
    image: "/screens/transaction-details.jpg"
  },

  {
    title: "Group Split",
    image: "/screens/group-split.jpg"
  },

  {
    title: "Group Split Details",
    image: "/screens/group-split-details.jpg"
  },

  {
    title: "Chat Page",
    image: "/screens/chat-page.jpg"
  },

  {
    title: "People",
    image: "/screens/people.jpg"
  },

  {
    title: "Profile",
    image: "/screens/profile.jpg"
  }
];

const [menuOpen, setMenuOpen] = useState(false);

const scrollToSection = (id) => {

  setMenuOpen(false);

  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth"
    });

};

  return (
    <>

          {/* Navbar */}
      <nav
  className={`hero-nav ${
    scrolled ? "nav-scrolled" : ""
  }`}
>

        <img
  src="/images/iou-logo.png"
  alt="IOU"
  className="logo"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
/>

<p className="nav-scribble">
  I Owe You
</p>

        <div className="nav-actions">

          <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <Menu size={28} />
</button>

        </div>

      </nav>

      {menuOpen && (

  <div className="mobile-menu">

    <button
  onClick={() =>
    scrollToSection("features")
  }
>
  Features
</button>

<button
  onClick={() =>
    scrollToSection("faq")
  }
>
  FAQ
</button>

<button
  onClick={() =>
    scrollToSection("download")
  }
>
  Download
</button>

    <button
      onClick={() => {
        window.open(
          "mailto:iouapp.support@gmail.com"
        )
        scrollToSection("faq")
      }}
    >
      Contact
    </button>

  </div>

)}

    <section className="hero">

      {/* Background Glow */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="aurora aurora-1"></div>
<div className="aurora aurora-2"></div>
<div className="aurora aurora-3"></div>

      {/* Hero Content */}

      <div className="noise"></div>

      <div className="hero-content">

        <div className="hero-badge">

  <HandCoins
    size={22}
    className="hero-badge-icon"
  />

  <p>
    Money between friends,
    <strong> made simple.</strong>
  </p>

</div>

        <h1 className="main-heading">
          Track. Settle.
        </h1>

        <h2 className="scribble">
          No awkward
        </h2>

        <h1 className="main-heading">
          money talks.
        </h1>

        <p className="hero-text">
          IOU helps you track shared expenses,
          settle balances and stay on top of
          your money with friends.
        </p>

        <div className="cta-row">

          <button
  className="apk-btn"
  onClick={() =>
    document
      .getElementById("download")
      .scrollIntoView({
        behavior: "smooth"
      })
  }
>

            <div className="apk-left">

              <img
                src="/images/android.png"
                alt=""
              />

              <div>

                <h4>
                  Download APK
                </h4>

                <span>
                  Latest Version 1.2.0
                </span>

              </div>

            </div>

            <div className="apk-arrow">
              <ArrowRight size={18} />
            </div>

          </button>

          <button
  className="feature-btn"
  onClick={() =>
    setShowPreview(true)
  }
>

  <div className="feature-btn-icon">
    <LayoutGrid size={20} />
  </div>

  <div className="feature-btn-content">

    <span className="feature-btn-label">
      Explore
    </span>

    <h4>
      App Screens
    </h4>

  </div>

</button>

        </div>

        {/* Rating */}

        <div className="rating-row">

          <div className="avatars">

            <img src="/images/avatar1.jpg" alt="" />
            <img src="/images/avatar2.jpg" alt="" />
            <img src="/images/avatar3.jpg" alt="" />
            <img src="/images/avatar4.jpg" alt="" />

          </div>

          <div className="rating-info">

            <span>
              Loved by hundreds
            </span>

            <h4>
              4.3 ★★★★★
            </h4>

          </div>

        </div>

      </div>

      <div className="bottom-wave"></div>

      {/* Phones */}

      <div className="phones">

        <img
          src="/images/left-phone.png"
          alt=""
          className="phone left-phone"
        />

        <img
          src="/images/main-phone.png"
          alt=""
          className="phone center-phone"
        />

        <img
          src="/images/right-phone.png"
          alt=""
          className="phone right-phone"
        />

      </div>

     {/* Scroll */}

<div className="scroll-indicator">

  <span>
    Scroll to explore
  </span>

  <div className="scroll-arrow">

    ↓

  </div>

</div>

{/* Features */}

       <section id="features" className="features-section reveal">

  <div className="features-header">

    <p className="feature-label">
      Features
    </p>

    <h2>
      Powerful features,
      <br />
      <span>super simple.</span>
    </h2>

  </div>

  <div className="features-grid">

  <div className="feature-card purple">

    <div className="feature-icon">
      <Plus size={24} />
    </div>

    <h3>Add Transaction</h3>

    <p>
      Quickly add who paid
      and who owes.
    </p>

  </div>

  <div className="feature-card lavender">

    <div className="feature-icon">
      <Users size={24} />
    </div>

    <h3>Group Split</h3>

    <p>
      Split bills with anyone,
      in seconds.
    </p>

  </div>

  <div className="feature-card green">

    <div className="feature-icon">
      <CircleCheckBig size={24} />
    </div>

    <h3>Settle Up</h3>

    <p>
      Record settlements
      and close balances.
    </p>

  </div>

  <div className="feature-card pink">

    <div className="feature-icon">
      <MessageCircle size={24} />
    </div>

    <h3>Chat In-App</h3>

    <p>
      Talk, remind and
      coordinate easily.
    </p>

  </div>

  <div className="feature-card purple-light">

    <div className="feature-icon">
      <Bell size={24} />
    </div>

    <h3>Smart Reminders</h3>

    <p>
      Friendly reminders
      that actually work.
    </p>

  </div>

  <div className="feature-card blue">

    <div className="feature-icon">
      <WifiOff size={24} />
    </div>

    <h3>Works Offline</h3>

    <p>
      Add and view even
      without internet.
    </p>

  </div>

</div>

</section>

<section id="faq" className="faq-section reveal">

  <div className="faq-header">

    <div>

      <p className="faq-label">
        FAQ
      </p>

      <h2>
        Anything on
        <br />
        your <span>mind?</span>
      </h2>

    </div>

    <img
      src="/images/blob.png"
      alt=""
      className="faq-blob"
    />

  </div>

  <div className="faq-list">

  {faqs.map((faq, index) => (

    <div
      key={index}
      className={`faq-item ${
        openFaq === index
          ? "active"
          : ""
      }`}
    >

      <button
        className="faq-question"
        onClick={() =>
          setOpenFaq(
            openFaq === index
              ? null
              : index
          )
        }
      >

        <span>
          {faq.question}
        </span>

        <span>
          {openFaq === index
            ? "−"
            : "+"}
        </span>

      </button>

      {openFaq === index && (

        <p className="faq-answer">
          {faq.answer}
        </p>

      )}

    </div>

  ))}

</div>

  <div className="faq-contact">

    <h3>
      Still have questions?
    </h3>

    <p>
      We're here to help.
    </p>

    <button
  onClick={() =>
    window.location.href =
      "mailto:iouapp.support@gmail.com"
  }
>
  Contact Us
</button>

    <div className="faq-stars">
      ✦
    </div>

  </div>

</section>

<section id="download" className="download-section reveal">

  <div className="download-header">

    <div>

      <p className="download-label">
        Download
      </p>

      <h2>
        Get <span>IOU</span>
        <br />
        for Android.
      </h2>

    </div>

    <img
      src="/images/android-mascot.png"
      alt=""
      className="android-mascot"
    />

  </div>

  <div className="download-stats">

    <div>

      <span>Latest Version</span>

      <h4>1.2.0</h4>

    </div>

    <div>

      <span>APK Size</span>

      <h4>18.4 MB</h4>

    </div>

  </div>

  <button
  className="download-apk-btn"
  onClick={() =>
    alert("APK coming soon!")
  }
>

    <div className="download-apk-left">

      <img
        src="/images/android.png"
        alt=""
      />

      <span>
        Download APK
      </span>

    </div>

    <ArrowRight size={18} />

  </button>

  <div className="install-card">

    <h3>
      How to install?
    </h3>

    <div className="install-step">

      <div className="step-number">
        1
      </div>

      <span>
        Download the APK
      </span>

    </div>

    <div className="install-step">

      <div className="step-number">
        2
      </div>

      <span>
        Allow installation from
        unknown sources
      </span>

    </div>

    <div className="install-step">

      <div className="step-number">
        3
      </div>

      <span>
        Install and open IOU
      </span>

    </div>

  </div>

</section>

    </section>

    {/* Security Card */}

      <div
  className="security-card reveal"
  onClick={() =>
    window.open(
      "https://app.notion.com/p/IOU-Privacy-Policy-370f4415e01f80f3afbad357fcb97a07?source=copy_link",
      "_blank"
    )
  }
>

  <div className="security-icon">

    <img
      src="/images/shield.png"
      alt=""
    />

  </div>

  <div className="security-content">

    <div className="security-badge">

      256-bit Encryption

    </div>

    <h3>
      Secure. Private. Yours.
    </h3>

    <p>
      Your balances, transactions,
      reminders and chats stay
      protected and encrypted.
    </p>

  </div>

  <div
    className="privacy-arrow"
    onClick={() =>
      window.open(
        "https://app.notion.com/p/IOU-Privacy-Policy-370f4415e01f80f3afbad357fcb97a07?source=copy_link",
        "_blank"
      )
    }
  >
    <ArrowRight size={24} />
  </div>

</div>

<footer className="site-footer reveal">

  <div className="footer-links">

    <button
      onClick={() =>
        scrollToSection("features")
      }
    >
      Features
    </button>

    <button
      onClick={() =>
        scrollToSection("faq")
      }
    >
      FAQ
    </button>

    <button
      onClick={() =>
        scrollToSection("download")
      }
    >
      Download
    </button>

    <button
      onClick={() =>
        window.open(
          "mailto:iouapp.support@gmail.com"
        )
      }
    >
      Contact
    </button>

  </div>

  <div className="footer-socials">

    <a
      href="https://instagram.com/not.so.naved"
      target="_blank"
      rel="noreferrer"
    >
      <FiInstagram />
    </a>

    <a
      href="https://x.com/Navedk39"
      target="_blank"
      rel="noreferrer"
    >
      <FaXTwitter />
    </a>

    <a
      href="https://github.com/1enk-in"
      target="_blank"
      rel="noreferrer"
    >
      <FiGithub />
    </a>

  </div>

  <div className="footer-bottom">

    <span>
      Made with ❤️ by Naved
    </span>

    <div className="footer-policy">

      <span
        onClick={() =>
          window.open(
            "https://app.notion.com/p/IOU-Privacy-Policy-370f4415e01f80f3afbad357fcb97a07?source=copy_link"
          )
        }
      >
        Privacy Policy
      </span>

      <span className="footer-dot" />

      <span
        onClick={() =>
          window.open(
            "https://www.notion.so/IOU-Terms-of-Service-370f4415e01f80eb89ccc8a3022adbe1?source=copy_link"
          )
        }
      >
        Terms
      </span>

    </div>

  </div>

</footer>

{showPreview && (

<div className="preview-overlay">

  <div className="preview-modal">

    <button
      className="preview-close"
      onClick={() =>
        setShowPreview(false)
      }
    >
      <X size={26} />
    </button>

    <div className="preview-header">

  <span className="preview-badge">
    App Tour
  </span>

  <h2>

    Explore

    <span>
      IOU
    </span>

  </h2>

  <p>
    Experience every major screen
    before downloading.
  </p>

</div>

    <div className="preview-viewer">

      <button
        className="preview-nav left"
        onClick={() =>
          setCurrentScreen(prev =>
            prev === 0
              ? screens.length - 1
              : prev - 1
          )
        }
      >
        <ChevronLeft size={42} />
      </button>

      <div className="preview-phone">

        <img
  key={currentScreen}
  src={
    screens[currentScreen].image
  }
  alt=""
  className="preview-screen"
  onClick={() =>
    setShowImageViewer(true)
  }
/>

      </div>

      <button
        className="preview-nav right"
        onClick={() =>
          setCurrentScreen(prev =>
            prev ===
            screens.length - 1
              ? 0
              : prev + 1
          )
        }
      >
        <ChevronRight size={42} />
      </button>

    </div>

    <h3 className="preview-title">

      {
        screens[currentScreen]
          .title
      }

    </h3>

    <div className="preview-counter">

  {currentScreen + 1}
  /
  {screens.length}

</div>

    <div className="preview-dots">

      {screens.map((_, index) => (

        <button
          key={index}
          className={`dot ${
            currentScreen === index
              ? "active"
              : ""
          }`}
          onClick={() =>
            setCurrentScreen(index)
          }
        />

      ))}

    </div>

  </div>

</div>

)}

{showImageViewer && (

  <div
  className="image-viewer-overlay"
  onClick={(e) => {

    if (
      e.target === e.currentTarget
    ) {
      setShowImageViewer(false);
    }

  }}
>

  <div
    className="image-viewer-content"
  >

    <button
  className="viewer-close"
  onClick={() =>
    setShowImageViewer(false)
  }
>
  <X size={28} />
</button>

      <TransformWrapper

        initialScale={1}
        minScale={1}
        maxScale={5}

        wheel={{
          step: 0.15
        }}

        doubleClick={{
          disabled: false
        }}

        pinch={{
          step: 5
        }}

      >

        <TransformComponent>

          <img
            src={
              screens[currentScreen]
                .image
            }
            alt=""
            className="zoom-image"
          />

        </TransformComponent>

      </TransformWrapper>

    </div>

  </div>

)}

    </>
  );
}