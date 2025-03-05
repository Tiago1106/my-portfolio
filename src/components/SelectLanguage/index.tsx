"use client";

import { Fragment } from "react";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { SelectLanguageProps } from "./types";
import Button from "../Button";
import { useStore } from "@/store/useStore";

export default function SelectLanguage({ isOpen, onClose }: SelectLanguageProps) {
  const { language, setLanguage } = useStore();

  const handleCloseModal = () => {
    onClose();
    setLanguage(language);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={isOpen}
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={isOpen}
          >
            <DialogPanel className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              <p className="text-sm text-gray-600 max-w-prose text-center md:text-left">
                Choose the language you want to use in the system:
              </p>

              <div className="mt-4 flex items-center">
                <label htmlFor="language" className="block text-sm font-medium text-gray-700 mr-2">
                  Language
                </label>
                <select
                  id="language"
                  className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="pt">Português</option>
                  <option value="en">Inglês</option>
                </select>
                <Button label="Select" className="bg-blue-500 text-white ml-2 w-fit hover:text-white" onClick={() => handleCloseModal()} />
              </div>
            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}
