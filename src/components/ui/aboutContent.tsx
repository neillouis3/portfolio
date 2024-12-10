import {Chip, Link} from "@nextui-org/react";

export default function AboutContent() {
  return (
      <div className="w-full h-[60vh] -mt-16 flex flex-row justify-center gap-4 items-center">
        <div className="flex-3 flex flex-col gap-8 w-full h-full">
          <div className="flex flex-col">
            <h1 className="text-3xl">Neil Louise A. Castillon</h1>
            <Chip size="sm" radius="md" color="primary">Software Developer</Chip>
          </div>
          <div className="flex-3 flex-col flex gap-4 text-sm">
            <p className="">Hi! I'm Louise and I'm a 3rd year computer engineering student @ <Link underline="always" href="https://www.mun.ca" size="sm" isExternal>Memorial University</Link> who is passionate about technology. I believe technology should be beneficial, enhancing quality of life and making everyday tasks easier.</p>
            <p>My interests extend to robotics, centralized automation systems, and AI's application to electrical systems.</p>
            <p>Beyond tech, I enjoy playing instruments especially the guitar, and I'm also a big fan of photography.</p>
          </div>
        </div>
        <div className="flex-2 h-full w-full relative">
            <svg className="w-full h-full text-primary transition-colors" id="visual" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <g transform="translate(495.2077480443614 499.60819104844006)">
                <path d="M270.9 -398.5C330.2 -329.8 342.9 -222.7 362.5 -126.3C382 -30 408.3 55.6 401.4 146.9C394.4 238.2 354.1 335.1 281.7 370.1C209.3 405.2 104.6 378.4 2.1 375.6C-100.5 372.7 -201 393.9 -278.1 360.3C-355.1 326.7 -408.7 238.5 -447.6 140.3C-486.5 42.2 -510.7 -65.8 -476.8 -150.2C-442.9 -234.5 -350.7 -295.3 -261.6 -354.3C-172.4 -413.3 -86.2 -470.7 9.8 -484.1C105.8 -497.6 211.6 -467.2 270.9 -398.5" fill="currentColor"></path>
              </g>
            </svg>
        </div>
      </div>

  );
}
