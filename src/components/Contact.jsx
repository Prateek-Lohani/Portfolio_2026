import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Zoom } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      
     toast.success('Successfully sent to Prateek', {
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
     toast.error('Error submitting form', {
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
      className=" w-full min-h-screen py-8 sm:py-12 px-3 sm:px-4 md:px-6 lg:px-8"
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
            <label htmlFor="user_name" className="block text-sm font-medium mb-2">
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
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="8"
              className="w-full px-4 py-2 bg-black border border-slate-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none"
              placeholder="Your message ..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className=" bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {statusMessage && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            statusMessage.includes('successfully')
              ? 'bg-green-900 text-green-100'
              : 'bg-red-900 text-red-100'
          }`}>
            {statusMessage}
          </div>
        )}
      </div>
        <div id='socials' className='max-w-2xl mx-auto h-[30vh] flex bg-[green] items-center justify-between'>


        </div>

         
     </section>

    </section>
  );
};

export default Contact;