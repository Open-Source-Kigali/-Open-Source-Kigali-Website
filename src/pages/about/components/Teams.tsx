import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF,FaGithub, FaFigma,} from "react-icons/fa6";
import {  ABOUT_TEAM } from "@/constants";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";


const Teams = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                  Leading, Strong
                  <br />
                  Creative Team
                </h2>
              </div>
              <p className="text-gray-500 text-base md:text-lg max-w-xs text-start leading-relaxed">
                OSK is led by a volunteer team of contributors who spend their own
                time making the community better for everyone else.
              </p>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ABOUT_TEAM.map((m, idx) => {
                // Build only the social links that are not null
                const socialLinks = [
                  m.links.linkedin && {
                    icon: <FaLinkedinIn size={12} />,
                    href: m.links.linkedin,
                    label: "LinkedIn",
                  },
                  m.links.github && {
                    icon: <FaGithub size={12} />,
                    href: m.links.github,
                    label: "GitHub",
                  },
                  m.links.twitter && {
                    icon: <FaXTwitter size={12} />,
                    href: m.links.twitter,
                    label: "Twitter",
                  },
                  m.links.instagram && {
                    icon: <FaInstagram size={12} />,
                    href: m.links.instagram,
                    label: "Instagram",
                  },
                  m.links.facebook && {
                    icon: <FaFacebookF size={12} />,
                    href: m.links.facebook,
                    label: "Facebook",
                  },
                  m.links.figma && {
                    icon: <FaFigma size={12} />,
                    href: m.links.figma,
                    label: "Figma",
                  },
                ].filter(Boolean) as {
                  icon: React.ReactNode;
                  href: string;
                  label: string;
                }[];
    
                return (
                  <ScrollAnimatedItem
                    key={m.initials}
                    delay={idx * 0.15}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Avatar area */}
                    <div className="h-64 overflow-hidden relative">
                      {m.avatar ? (
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: m.objectPosition ?? "top" }}
                        />
                      ) : (
                        <div
                          className={`${m.bg} w-full h-full flex items-center justify-center`}
                        >
                          <span className="text-white font-black text-7xl opacity-20">
                            {m.initials}
                          </span>
                        </div>
                      )}
                      {m.featured && (
                        <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Lead
                        </span>
                      )}
                    </div>
    
                    {/* Info */}
                    <div className="p-5">
                      <p className="font-black text-gray-900 text-base">{m.name}</p>
                      <p className="text-blue-500 text-xs font-bold tracking-widest mt-0.5 mb-4">
                        {m.role}
                      </p>
    
                      {/* Only render icons the person actually has */}
                      {socialLinks.length > 0 && (
                        <div className="flex gap-2">
                          {socialLinks.map(({ icon, href, label }) => (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition"
                            >
                              {icon}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollAnimatedItem>
                );
              })}
            </div>
          </div>
        </section>
  )
}

export default Teams