import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";
import { portfolioData } from "../data/portfolioData";
import { socialIconMap } from "../data/socialIcons";

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [visibleSocials, setVisibleSocials] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setVisibleSocials((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    );

    const elements = document.querySelectorAll(".social-item");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Successfully sent to Prateek", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
      formRef.current.reset();
    } catch (error) {
      toast.error("Error submitting form", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8"
    >
      <div className="h-auto sm:h-32 mb-6 sm:mb-0">
        <h1 className="w-full text-center text-3xl sm:text-5xl md:text-6xl font-semibold">
          Reach Out
        </h1>
        <p className="w-full text-center text-indigo-200 text-sm sm:text-base mt-2 mb-6 sm:mb-8">
          Let's Collaborate
        </p>
      </div>

      <section>
        <div className="max-w-3xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-black border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="relative z-3 bg-black block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="8"
                className="relative z-3 w-full px-4 py-2 bg-black border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none"
                placeholder="Your message ..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative z-3 bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {statusMessage && (
            <div
              className={`mt-4 p-4 rounded-lg text-center ${
                statusMessage.includes("successfully")
                  ? "bg-green-900 text-green-100"
                  : "bg-red-900 text-red-100"
              }`}
            >
              {statusMessage}
            </div>
          )}
        </div>
        <div
          id="socials"
          className="max-w-2xl mx-auto mt-12"
        >
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
            Connect With Me
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-4 gap-[2vw] md:gap-6 place-items-center">
            {portfolioData.socials.map((social, index) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-index={index}
                title={social.name}
                className={`hover:scale-[1.1] social-item transition-all duration-700 ease-out ${
                  visibleSocials.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transform: visibleSocials.has(index)
                    ? `rotate(${(index % 2 === 0 ? -1 : 1) * (2 + (index % 3))}deg)`
                    : "rotate(0deg)",
                }}
              >
                <div
                  className="rounded-2xl px-6 py-8 flex flex-col items-center justify-center gap-3 h-24 w-24 sm:h-28 sm:w-28 hover:shadow-sm hover:shadow-indigo-500/50 transition-shadow duration-300 border-1 border-indigo-500/30"
                >
                  <img
                    src={socialIconMap[social.icon]}
                    alt={social.icon}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;