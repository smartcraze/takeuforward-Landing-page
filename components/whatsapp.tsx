"use client"

import Link from "next/link"

const WhatsAppCTA = () => {
  return (
    <section className="w-full mt-16 px-4 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg transition-colors duration-300">
        {/* Text Section */}
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Got any doubts or interested in a plan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
            We're just a message away! Whether you're unsure which plan suits you or want to know more, we're here to help.
          </p>
        </div>

        <Link
          href="https://api.whatsapp.com/send/?phone=916371418920&text=Hi+takeUforward%21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-4 py-2 rounded-xl font-medium shadow-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
        >
          <div className="relative w-8 h-8">
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500">
              <svg
                viewBox="0 0 32 32"
                fill="white"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.818.74 5.553 2.145 7.96L0 32l8.403-2.113A15.943 15.943 0 0016 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.867c-2.533 0-5.012-.678-7.182-1.96l-.514-.305-4.995 1.257 1.323-4.878-.336-.553C3.335 21.174 2.4 18.619 2.4 16c0-7.497 6.103-13.6 13.6-13.6s13.6 6.103 13.6 13.6-6.103 13.6-13.6 13.6zm7.365-9.153c-.406-.203-2.398-1.18-2.772-1.314-.375-.133-.649-.203-.923.204-.273.406-1.059 1.314-1.3 1.586-.238.27-.477.304-.883.102-.406-.204-1.713-.63-3.263-2.008-1.207-1.08-2.02-2.408-2.255-2.814-.234-.406-.025-.625.179-.828.184-.182.406-.477.609-.716.204-.238.27-.406.406-.676.136-.27.068-.508-.034-.712-.102-.204-.923-2.242-1.265-3.076-.33-.792-.665-.682-.923-.692l-.786-.014c-.27 0-.707.102-1.077.508-.375.406-1.419 1.385-1.419 3.377 0 1.992 1.456 3.92 1.659 4.195.203.27 2.85 4.352 6.916 5.947.967.417 1.72.665 2.31.85.97.307 1.85.264 2.546.16.777-.117 2.398-.977 2.735-1.92.338-.94.338-1.746.238-1.92-.102-.17-.37-.27-.777-.47z" />
              </svg>
            </span>
          </div>
          Message Us on WhatsApp
        </Link>
      </div>
    </section>
  )
}

export default WhatsAppCTA
