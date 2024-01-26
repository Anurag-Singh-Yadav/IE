import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import './MobileDropDown.css';

export default function MobileDropDown({ label , options }) {
  return (
    <div className="w-full z-[1]">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <div>
              <Disclosure.Button className={`flex w-full justify-between rounded-lg hover:bg-green-bg ${open ? 'bg-green-bg text-white' : 'bg-light-green'} hover:text-white transition duration-300  px-4 py-2 text-left text-sm font-medium`}>
                <span>{label}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-half" : ""
                  } h-5 w-5 font-bold`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 text-sm">
                <div className="hidden slide-right flex-col px-2 w-fit">
                  {options.map((obj, index) => {
                    return (
                      <div
                        name={obj.value}
                        key={index}
                        className=" border-l-2 border-green-bg whitespace-nowrap py-2 transition duration-200 font-semibold flex items-center"
                      >
                        <div className=" h-[2px] w-4 bg-green-bg mr-2" />
                        <p className=" cursor-pointer hover:text-green-bg rounded-lg transition duration-300 w-full px-2 py-1">{obj.label}</p>
                      </div>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
