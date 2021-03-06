import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import reddit from './reddit.svg'
import External from './external.svg'
import Globe from './globe.svg'
import telegram from './telegram.svg'
import youtube from './youtube.svg'
import stackoverflow from './stackoverflow.svg'
// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Globe,
  reddit: reddit,
  telegram: telegram,
  external: External,
  youtube: youtube,
  stackoverflow: stackoverflow,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
