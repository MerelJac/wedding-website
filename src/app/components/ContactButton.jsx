"use client"
import { useState } from "react";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-darkBeige text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
      >
        (209)-694-5465
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4 text-center max-w-sm w-full">
            <p className="text-gray-600">
              (209)-694-5465
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="sms:2096945465"
                className="bg-darkBeige text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Text
              </a>
              <a
                href="tel:2096945465"
                className="bg-darkBeige text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Call
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
