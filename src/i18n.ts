import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: {
        p1: "I'm a Full Stack Developer who cares deeply about user experience. I enjoy turning complex problems into simple, elegant, and fast interfaces that feel effortless to use.",
        p2: "My stack spans from C/C++ to modern React applications. I enjoy working across the full spectrum — from crafting detailed frontends to building reliable backend systems with Node.js.",
        p3: "Outside of work, I enjoy trying new tools, contributing to projects, and continuously improving the quality of user experiences.",
        downloadCV: "Download CV",
        traits: [
          {
            desc: "Readable, maintainable, and scalable codebases",
          },
          {
            desc: "Thoughtful architecture for complex applications",
          },
          {
            desc: "Fast load times and smooth interactions matter",
          },
          {
            desc: "Comfortable from database to polished UI",
          },
        ],
      },
      hero: {
        description:
          "I build thoughtful user experiences with modern full stack architecture. Passionate about creating fast, accessible, and visually engaging web applications.",
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
        p1: "I'm open to new opportunities and collaborations. Whether it's a freelance project, a full-time role, or just a conversation — feel free to reach out.",
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
        timeline: {
          timesnow: {
            description:
              "Developed bulk shift updates and pagination for employee roster management. Built cross-database SQL reports with LeaveHub to automate monthly attendance. Implemented offsite check-in with navigator.geolocation, secured routes with middleware API-key validation, and troubleshot LINE Beacon webhooks and Rich Menu check-in flows.",
          },
          leavehub: {
            description:
              "Built leave-request and holiday-swap flows on LINE LIFF. Refactored the backend into service, handler, and controller layers, integrated automated notifications through Gmail Service and LINE Messaging API (Flex Messages), deployed the LIFF app on Firebase Hosting, and handled PII masking with timezone normalization.",
          },
          qmanage: {
            description:
              "Maintained an inherited CMS codebase and supported queue and personnel workflows. Developed Node.js REST APIs, built employee-data and password-recovery features, optimized React rendering with useMemo and useCallback, and tuned SQL queries for high-volume queue data. Integrated JWT and LINE token authentication, LINE Flex Message notifications, PowerShell deployment scripts, and hosting on Google Cloud Run and Firebase Functions.",
          },
        },
      },
      projects: {
        intro:
          "A selection of projects that helped me grow my skills and ship real software.",
        items: [
          {
            longDesc:
              "A desktop music player app built with Java and NetBeans. It features a clean interface with playback controls, playlist management, and song metadata display.",
          },
          {
            longDesc:
              "A web application for booking meeting rooms with full database connectivity, API integration, login support, user/admin management, and CRUD operations. Built with React, Tailwind CSS, and REST APIs.",
          },
          {
            longDesc:
              "A fully responsive personal portfolio website built with React and Tailwind CSS. It features smooth animations, dark mode aesthetics, and a modern monospace design system.",
          },
          {
            longDesc:
              "A cross-platform mobile app built with Flutter and Dart. It integrates Firebase for authentication and real-time data, offering smooth animations and a native-feeling UI across iOS and Android.",
          },
        ],
        badges: {
          featured: "Featured",
        },
        status: {
          Completed: "Completed",
          In_Progress: "In Progress",
          Archived: "Archived",
        },
        seeMoreGitHub: "See more on GitHub",
        liveDemo: "Live demo",
      },
      skills: {
        closing:
          "I like taking responsibility for building thoughtful user experiences with modern full stack architecture. Always learning, always building.",
        showMore: "Show more",
        showLess: "Show less",
      },
      common: {
        scroll: "scroll",
      },
    },
  },

  th: {
    translation: {
      about: {
        p1: "ฉันเป็นนักพัฒนาแบบ Full Stack Developer ที่ให้ความสำคัญกับประสบการณ์ผู้ใช้เป็นหลัก ชอบเปลี่ยนปัญหาที่ซับซ้อนให้กลายเป็นอินเทอร์เฟซที่เรียบง่าย สวยงาม และใช้งานได้อย่างรวดเร็วและลื่นไหล",
        p2: "สกิลของฉันครอบคลุมตั้งแต่การเขียนโค้ดด้วย C/C++ ไปจนถึงการพัฒนาแอปสมัยใหม่ด้วย React โดยฉันสนใจทั้งงานฝั่งหน้าบ้านที่ใส่ใจรายละเอียด และงานฝั่งหลังบ้านที่ทำงานได้อย่างมั่นคงด้วย Node.js",
        p3: "นอกเหนือจากงานหลัก ฉันชอบทดลองเครื่องมือใหม่ ๆ มีส่วนร่วมในโปรเจกต์ต่าง ๆ และพยายามยกระดับประสบการณ์ผู้ใช้ให้ดีขึ้นอยู่เสมอ",
        downloadCV: "ดาวน์โหลด CV",
        traits: [
          {
            desc: "โค้ดที่อ่านง่าย ดูแลรักษาได้ และรองรับการขยายตัวในอนาคต",
          },
          {
            desc: "ออกแบบสถาปัตยกรรมอย่างรอบคอบสำหรับแอปพลิเคชันที่ซับซ้อน",
          },
          {
            desc: "เวลาโหลดที่รวดเร็วและการโต้ตอบที่ลื่นไหลเป็นสิ่งสำคัญ",
          },
          {
            desc: "ทำงานได้คล่องตั้งแต่ฐานข้อมูลไปจนถึง UI ที่สวยงามและพิถีพิถัน",
          },
        ],
      },
      hero: {
        description:
          "ฉันสร้างประสบการณ์ผู้ใช้ที่มีคุณภาพด้วยสถาปัตยกรรมแบบ Full Stack สมัยใหม่ โดยมุ่งเน้นเว็บแอปที่เร็ว เข้าถึงง่าย และน่าใช้งาน",
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
        p1: "ฉันเปิดรับโอกาสใหม่ ๆ และความร่วมมือเสมอ ไม่ว่าจะเป็นงานฟรีแลนซ์ ตำแหน่งงานเต็มเวลา หรือเพียงแค่พูดคุยกัน — ยินดีติดต่อมาได้เลย",
        sentTitle: "ส่งข้อความแล้ว!",
        sentBody: "ขอบคุณที่ติดต่อมา ฉันจะตอบกลับโดยเร็วที่สุด",
        form: {
          name: "ชื่อ",
          email: "อีเมล",
          message: "ข้อความ",
          namePlaceholder: "ชื่อของคุณ",
          emailPlaceholder: "your@email.com",
          messagePlaceholder: "อยากบอกอะไรฉันบ้าง?",
          send: "ส่งข้อความ",
        },
      },
      experience: {
        timeline: {
          timesnow: {
            description:
              "พัฒนาฟีเจอร์ bulk shift updates และ pagination สำหรับงานจัดการพนักงานและกะงาน เชื่อมรายงาน SQL ข้ามฐานข้อมูลร่วมกับ LeaveHub เพื่อสรุปเวลาทำงานรายเดือน พัฒนา offsite check-in ด้วย navigator.geolocation พร้อม middleware ตรวจสอบ API key และแก้ปัญหา LINE Beacon webhook กับ Rich Menu check-in flows",
          },
          leavehub: {
            description:
              "พัฒนาฟังก์ชันยื่นคำขอลางานและขอสลับวันหยุดบน LINE LIFF ปรับโครงสร้าง backend เป็น service, handler และ controller เชื่อมระบบแจ้งเตือนอัตโนมัติผ่าน Gmail Service และ LINE Messaging API (Flex Messages) deploy LIFF บน Firebase Hosting และจัดการ PII masking ร่วมกับ timezone normalization",
          },
          qmanage: {
            description:
              "ดูแลซอร์สโค้ด CMS เดิมและต่อยอดงานจัดการคิวและพนักงาน พัฒนา Node.js REST API ฟีเจอร์ข้อมูลพนักงานและกู้คืนรหัสผ่าน ปรับ React rendering ด้วย useMemo และ useCallback รวมถึงปรับ SQL ให้รองรับข้อมูลคิวจำนวนมาก เชื่อม JWT และ LINE token สำหรับการยืนยันตัวตน พร้อม LINE Flex Message, PowerShell deployment scripts, Google Cloud Run และ Firebase Functions",
          },
        },
      },
      projects: {
        intro: "ตัวอย่างโปรเจกต์ที่ช่วยพัฒนาทักษะและนำซอฟต์แวร์ออกใช้งานจริง",
        items: [
          {
            longDesc:
              "แอปเล่นเพลงบนเดสก์ท็อปพัฒนาด้วย Java และ NetBeans มีอินเทอร์เฟซที่สะอาดตา พร้อมการควบคุมการเล่น จัดการเพลย์ลิสต์ และแสดงข้อมูลเพลง",
          },
          {
            longDesc:
              "เว็บแอปสำหรับจองห้องประชุมที่เชื่อมต่อฐานข้อมูลอย่างครบถ้วน มีระบบ API ระบบล็อกอิน การจัดการผู้ใช้และผู้ดูแล รวมถึงการทำ CRUD พัฒนาด้วย React, Tailwind CSS และ REST API",
          },
          {
            longDesc:
              "เว็บไซต์ผลงานส่วนบุคคลที่ตอบสนองได้เต็มรูปแบบ สร้างด้วย React และ Tailwind CSS มีแอนิเมชันที่ลื่นไหล โทนมืด และดีไซน์แบบ monospace",
          },
          {
            longDesc:
              "แอปมือถือข้ามแพลตฟอร์มพัฒนาด้วย Flutter และ Dart เชื่อมต่อ Firebase สำหรับการยืนยันตัวตนและฐานข้อมูลแบบเรียลไทม์ พร้อมแอนิเมชันที่นุ่มนวลและประสบการณ์ใกล้เคียงแอปเนทีฟ",
          },
        ],
        badges: {
          featured: "ที่โดดเด่น",
        },
        status: {
          Completed: "เสร็จแล้ว",
          In_Progress: "กำลังดำเนินการ",
          Archived: "เก็บถาวร",
        },
        seeMoreGitHub: "ดูเพิ่มเติมที่ GitHub",
        liveDemo: "แสดงตัวอย่าง",
      },
      skills: {
        closing:
          "ฉันรับผิดชอบในการสร้างประสบการณ์ผู้ใช้ที่ดีด้วยสถาปัตยกรรมแบบ Full Stack สมัยใหม่ เรียนรู้และลงมือสร้างอยู่เสมอ",
        showMore: "ดูเพิ่มเติม",
        showLess: "ย่อกลับ",
      },
      common: {
        scroll: "เลื่อน",
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
