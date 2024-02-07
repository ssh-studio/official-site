import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  FormEvent,
  FunctionComponent,
  useState,
} from "react";
import { IoIosSend } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import IconBTN from "../IconBTN";

interface ContactUsPopupProps {
  className?: string;
}

export interface ContactUsFormDataType {
  name: string;
  email: string;
  company?: string;
  message: string;
  newsletters: "on" | "off";
}
const ContactUsPopup: FunctionComponent<
  ContactUsPopupProps
> = ({ className }) => {
  const formData: ContactUsFormDataType = {
    name: "",
    email: "",
    message: "",
    newsletters: "on",
  };

  const [responseBody, setResponseBody] =
    useState<ContactUsFormDataType>(formData);

  const [isopen, setIsopen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerfied, setCaptchaVerfied] =
    useState(false);
  const changeState = () => {
    setIsopen(!isopen);
  };
  const onVerify = () => {
    setCaptchaVerfied(true);
  };
  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const textAreaChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!captchaVerfied) {
      return alert("Captcha Not Verified");
    }
    setIsSubmitting(true);
    console.log(responseBody);
    fetch("/contact-us", {
      method: "POST",
      body: JSON.stringify(responseBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSubmitting(false);
  };
  return (
    <>
      <button
        onClick={changeState}
        className="text-sm font-semibold border-yellow-300/50 hover:border-yellow-300 duration-200 px-4 py-2 rounded-lg border-2"
      >
        Contact Us
      </button>
      <div
        data-isopen={isopen}
        className="invisible fixed left-0 top-0 z-[100] flex h-full w-full bg-white/30 opacity-0 backdrop-blur duration-300 data-[isopen=true]:visible data-[isopen=true]:opacity-100 dark:bg-black/30"
      >
        <IconBTN
          onclick={changeState}
          className="absolute z-50 left-auto right-2 mt-2 md:right-5 md:mt-5 bg-red-600 hover:bg-red-800"
        >
          <IoCloseOutline className="h-8 w-8" />
        </IconBTN>
        <div
          data-isopen={isopen}
          className="invisible mx-auto mb-auto mt-4 md:mt-28 max-w-md translate-y-8 rounded-lg border bg-white p-4 shadow-xl duration-300 data-[isopen=true]:visible data-[isopen=true]:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <form
            className="w-80 md:w-96 flex flex-col items-center"
            onSubmit={(e) => sendMessage(e)}
          >
            <label className="block w-full text-sm font-semibold text-gray-200">
              What&lsquo;s your name?
              <span className="opacity-50 ml-1 text-red-600">
                *
              </span>
            </label>
            <input
              onChange={(e) => inputChangeHandler(e)}
              type="text"
              name="name"
              placeholder="Full Name: Krishna Dev Rai"
              className="block w-full px-5 py-2.5 mt-2 bg-zinc-800 border-b-2 border-zinc-700 outline-none focus:border-zinc-500"
              required
            />
            <label className="block w-full mt-4 text-sm font-semibold text-gray-200">
              What&lsquo;s your email?
              <span className="opacity-50 ml-1 text-red-600">
                *
              </span>
            </label>
            <input
              onChange={(e) => inputChangeHandler(e)}
              type="text"
              name="email"
              placeholder="yourname@example.com"
              className="block w-full px-5 py-2.5 mt-2 bg-zinc-800 border-b-2 border-zinc-700 outline-none focus:border-zinc-500"
              required
            />
            <label className="block w-full mt-4 text-sm font-semibold text-gray-200">
              Who do you work with?
              <span className="opacity-75 ml-1 text-zinc-700">
                (Optional)
              </span>
            </label>
            <input
              onChange={(e) => inputChangeHandler(e)}
              name="company"
              type="text"
              placeholder="Company Name"
              className="block w-full px-5 py-2.5 mt-2 bg-zinc-800 border-b-2 border-zinc-700 outline-none focus:border-zinc-500"
            />
            <label className="block w-full mt-4 text-sm font-semibold text-gray-200">
              Tell us, how can we be of help!
              <span className="opacity-50 ml-1 text-red-600">
                *
              </span>
            </label>
            <textarea
              onChange={(e) => textAreaChangeHandler(e)}
              name="message"
              className="block w-full h-32 px-5 py-2.5 mt-2 bg-zinc-800 border-b-2 border-zinc-700 outline-none focus:border-zinc-500"
              placeholder="Message"
            ></textarea>
            <label className="flex items-start my-4 space-x-2">
              <input
                type="checkbox"
                name="newsletters"
                checked
                className="block mt-1"
                onChange={(e) => inputChangeHandler(e)}
              />
              <div className="text-slate-200 text-xs">
                I would like to receive Newsletters on what
                SSH.Studio&lsquo;s been up to.
              </div>
            </label>
            <HCaptcha
              sitekey="9c985756-6a5c-46b6-99ab-c20caf16b1dd"
              onVerify={onVerify}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm mt-4 w-full font-semibold border-yellow-300/50 hover:border-yellow-300 disabled:hover:border-yellow-300/50 flex disabled:cursor-not-allowed items-center justify-center duration-200 px-4 py-2 rounded-lg border-2"
            >
              {isSubmitting ? `Sending` : `Send Message`}{" "}
              <IoIosSend className="ml-1" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPopup;
