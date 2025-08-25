"use client";

import { useState, useEffect } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconCont from "../../components/iconContacts/page";
import DragAndDrop from "../../components/animations/DragAndDrop";
import ScrollTriggered from "../../components/animations/ScrollTriggered";
import MicroInteraction from "../../components/animations/MicroInteraction";
import TypingText from "../../components/animations/TypingText";

function page() {
  const [text, setText] = useState("");
  const [currentText, setCurrentText] = useState("Software Developer");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping && text.length < currentText.length) {
        setText((prevText) => prevText + currentText[text.length]);
      } else if (!isTyping && text.length > 0) {
        setText((prevText) => prevText.slice(0, -1));
      } else if (text.length === currentText.length && isTyping) {
        setTimeout(() => setIsTyping(false), 3000);
      } else if (text.length === 0 && !isTyping) {
        setTimeout(() => {
          setIsTyping(true);
          if (currentText === "Software Developer") {
            setCurrentText("Programmer");
          } else if (currentText === "Programmer") {
            setCurrentText("UI/UX Designer");
          } else if (currentText === "UI/UX Designer") {
            setCurrentText("Software Developer");
          }
        }, 3000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [text, isTyping, currentText]);

  return (
    <section className="grid h-screen mt-[10%]">
      <div className="grid items-center">
        <div>
          <ScrollTriggered>
            <h1 className="font-semibold text-[#FF0000] text-sm">
              Hi, my name is
            </h1>
          </ScrollTriggered>

          <ScrollTriggered>
            <h1 className="font-semibold mt-2 text-4xl md:text-5xl lg:text-7xl">
              Suparoek Manajit
            </h1>
          </ScrollTriggered>

          <ScrollTriggered>
            <TypingText text={text} />
          </ScrollTriggered>

          <IconCont />

          <MicroInteraction>
            <div className="mt-8">
              <a href="/resume.pdf" target="_blank">
                <span className="px-4 py-2 inline-flex border items-center animate-bounce border-[#FF0000] rounded-lg shadow-md bg-transparent hover:bg-[#FF0000] transition duration-700">
                  View Resume
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="w-6 h-6 ml-3 animate-pulse"
                  />
                </span>
              </a>
            </div>
          </MicroInteraction>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-end">
        <img
          src="/rocket2.png"
          className="rounded-lg shadow-lg w-50 h-auto sm:w-80 md:w-96"
        />
      </div>
    </section>
  );
}

export default page;
