"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const WhatsAppCTA = () => {
  return (
    <section className="w-full mt-16 px-4 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg transition-colors duration-300">
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Got any doubts or interested in a plan?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm max-w-md">
            We're just a message away! Whether you're unsure which plan suits you or want to know more, we're here to help.
          </p>
        </div>
        <Link
          href="https://api.whatsapp.com/send/?phone=916371418920&text=Hi+takeUforward%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          <SocialIcon network="whatsapp" fgColor="#ffffff" bgColor="transparent" />
          Message Us on WhatsApp
        </Link>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
