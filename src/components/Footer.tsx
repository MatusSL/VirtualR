import { resourcesLinks, platformLinks, communityLinks } from "../constants";

type Link = {
  href: string;
  text: string;
};

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link: Link, index: number) => {
              const { href, text } = link;

              return (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link: Link, index: number) => {
              const { href, text } = link;

              return (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link: Link, index: number) => {
              const { href, text } = link;

              return (
                <li key={index}>
                  <a className="text-neutral-300 hover:text-white" href={href}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
