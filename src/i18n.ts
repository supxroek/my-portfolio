import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: {
        p1: "I'm a frontend developer who cares deeply about the user experience. I love turning complex problems into elegant, intuitive interfaces — the kind that feel fast, clean, and effortless to use.",
        p2: "My stack spans from low-level C/C++ to modern React applications. I enjoy working across the full spectrum — whether it's crafting pixel-perfect UIs or architecting backend systems with Node.js.",
        p3: "Outside of work I'm constantly experimenting with new tools, contributing to projects, and trying to push the boundaries of what a great user experience can look like.",
        downloadCV: "Download CV",
      },
      hero: {
        description:
          "I craft aesthetic user experiences using modern frontend architecture. Passionate about building fast, accessible, and visually compelling web applications.",
        cta: {
          viewProjects: "View Projects",
          contactMe: "Contact Me",
        },
        stats: {
          yearsCoding: "Years coding",
          projectsBuilt: "Projects built",
          techStacks: "Tech stacks",
        },
      },
      contact: {
        p1: "I'm open to new opportunities and collaborations. Whether it's a freelance project, a full-time role, or just a chat — feel free to reach out.",
        sentTitle: "Message sent!",
        sentBody: "Thanks for reaching out. I'll get back to you soon.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          namePlaceholder: "Your name",
          emailPlaceholder: "your@email.com",
          messagePlaceholder: "What's on your mind?",
          send: "Send Message",
        },
      },
      experience: {
        timeline: [
          {
            description:
              "Studying Computer Science with a focus on software engineering, data structures, algorithms, and web development. Maintaining active involvement in tech clubs and project-based learning.",
          },
          {
            description:
              "Developed and maintained UI components using React and Tailwind CSS. Collaborated with designers to implement pixel-perfect interfaces and improved page load performance by 30%.",
          },
          {
            description:
              "Built a real-time collaborative web app in 24 hours as part of a 3-person team. Placed in the top 3 out of 60+ participating teams.",
          },
          {
            description:
              "Graduated with honors in the science-math program. First exposure to programming through C and Java courses, sparking a passion for software development.",
          },
        ],
      },
      projects: {
        intro:
          "A selection of projects that helped me grow my skills and ship real software.",
        items: [
          {
            longDesc:
              "A desktop music player app built with Java and Netbeans. Features a simple and user-friendly interface with playback controls, playlist management, and song metadata display.",
          },
          {
            longDesc:
              "A web application for booking meeting rooms with full database connectivity, API calls, a login system, user/admin management, and CRUD operations. Built with React, Tailwind CSS, and REST API.",
          },
          {
            longDesc:
              "A fully responsive personal portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode aesthetics, and a modern monospace design system.",
          },
          {
            longDesc:
              "A cross-platform mobile app built with Flutter and Dart. Integrates Firebase for authentication and real-time database, offering smooth animations and a native-feeling UI across iOS and Android.",
          },
        ],
      },
      skills: {
        closing:
          "I like to take responsibility to craft aesthetic user experiences using modern frontend architecture. Always learning, always building.",
      },
    },
  },
  th: {
    translation: {
      about: {
        p1: "ฉันเป็นนักพัฒนาฝั่งหน้า (frontend) ที่ให้ความสำคัญกับประสบการณ์ผู้ใช้เป็นอย่างมาก ชอบเปลี่ยนปัญหาที่ซับซ้อนให้เป็นอินเทอร์เฟซที่เรียบง่าย สวยงาม และใช้งานได้อย่างรวดเร็วและราบรื่น",
        p2: "สแต็กของฉันครอบคลุมตั้งแต่ระดับล่างอย่าง C/C++ จนถึงแอป React สมัยใหม่ ฉันชอบทำงานทั้งในส่วนอินเทอร์เฟซที่ละเอียดและสถาปัตยกรรมระบบแบ็กเอนด์ด้วย Node.js",
        p3: "นอกงานฉันมักทดลองเครื่องมือใหม่ๆ มีส่วนร่วมในโปรเจกต์ต่างๆ และพยายามผลักดันขอบเขตของประสบการณ์ผู้ใช้ที่ยอดเยี่ยม",
        downloadCV: "ดาวน์โหลด CV",
      },
      hero: {
        description:
          "ฉันสร้างประสบการณ์ผู้ใช้ที่สวยงามโดยใช้สถาปัตยกรรมเฟร้อนท์เอนด์สมัยใหม่ ใส่ใจการสร้างเว็บแอปที่เร็ว เข้าถึงได้ และมีความน่าสนใจทางสายตา",
        cta: {
          viewProjects: "ดูโปรเจกต์",
          contactMe: "ติดต่อฉัน",
        },
        stats: {
          yearsCoding: "ปีที่เขียนโค้ด",
          projectsBuilt: "โปรเจกต์ที่สร้าง",
          techStacks: "เทคโนโลยี",
        },
      },
      contact: {
        p1: "ฉันเปิดรับโอกาสใหม่ๆ และความร่วมมือต่างๆ ไม่ว่าจะเป็นงานฟรีแลนซ์ ตำแหน่งงานเต็มเวลา หรือเพียงแค่พูดคุย — ยินดีติดต่อได้เสมอ",
        sentTitle: "ส่งข้อความแล้ว!",
        sentBody: "ขอบคุณที่ติดต่อมา จะติดต่อกลับโดยเร็ว",
        form: {
          name: "ชื่อ",
          email: "อีเมล",
          message: "ข้อความ",
          namePlaceholder: "ชื่อของคุณ",
          emailPlaceholder: "your@email.com",
          messagePlaceholder: "คุณต้องการจะพูดอะไร?",
          send: "ส่งข้อความ",
        },
      },
      experience: {
        timeline: [
          {
            description:
              "กำลังศึกษา วิทยาการคอมพิวเตอร์โดยมุ่งเน้นด้านวิศวกรรมซอฟต์แวร์ โครงสร้างข้อมูล อัลกอริทึม และการพัฒนาเว็บ มีส่วนร่วมในชมรมเทคและการเรียนแบบโปรเจกต์",
          },
          {
            description:
              "พัฒนาและดูแลคอมโพเนนท์ UI ด้วย React และ Tailwind CSS ทำงานร่วมกับดีไซเนอร์เพื่อให้ได้อินเทอร์เฟซที่แม่นยำและปรับปรุงเวลาโหลดหน้าเว็บให้ดีขึ้น 30%",
          },
          {
            description:
              "สร้างเว็บแอปแบบร่วมมือเรียลไทม์ในเวลา 24 ชั่วโมงกับทีม 3 คน โดยได้อันดับ Top 3 จากทีมกว่า 60 ทีม",
          },
          {
            description:
              "จบการศึกษาจากโปรแกรมวิทย์-คณิตด้วยเกียรตินิยม เริ่มเรียนรู้การเขียนโปรแกรมจากภาษา C และ Java ซึ่งจุดประกายความสนใจด้านซอฟต์แวร์",
          },
        ],
      },
      projects: {
        intro: "ตัวอย่างโปรเจกต์ที่ช่วยพัฒนาทักษะและนำซอฟต์แวร์ออกใช้งานจริง",
        items: [
          {
            longDesc:
              "แอปเล่นเพลงบนเดสก์ท็อปพัฒนาด้วย Java และ Netbeans มีอินเทอร์เฟซเรียบง่ายพร้อมการควบคุมการเล่น จัดการเพลย์ลิสต์ และแสดงเมทาดาต้าของเพลง",
          },
          {
            longDesc:
              "เว็บแอปสำหรับจองห้องประชุม มีการเชื่อมต่อฐานข้อมูล ระบบ API ระบบล็อกอิน การจัดการผู้ใช้/ผู้ดูแล และการทำ CRUD พัฒนาด้วย React, Tailwind CSS และ REST API",
          },
          {
            longDesc:
              "เว็บไซต์ผลงานส่วนบุคคลที่ตอบสนองได้เต็มรูปแบบ สร้างด้วย React และ Tailwind CSS มีแอนิเมชันที่ลื่นไหล โทนสีมืด และระบบฟอนต์แบบ monospace",
          },
          {
            longDesc:
              "แอปมือถือข้ามแพลตฟอร์มพัฒนาด้วย Flutter และ Dart เชื่อมต่อ Firebase สำหรับการยืนยันตัวตนและฐานข้อมูลเรียลไทม์ มีแอนิเมชันที่นุ่มนวลและประสบการณ์เหมือนเนทีฟ",
          },
        ],
      },
      skills: {
        closing:
          "ฉันรับผิดชอบในการออกแบบประสบการณ์ผู้ใช้ที่สวยงามโดยใช้สถาปัตยกรรมเฟร้อนท์เอนด์สมัยใหม่ เรียนรู้และลงมือสร้างอยู่เสมอ",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: (typeof window !== "undefined" && localStorage.getItem("lang")) || "th",
  fallbackLng: "th",
  interpolation: { escapeValue: false },
});

export default i18n;
