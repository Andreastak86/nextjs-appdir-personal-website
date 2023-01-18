import 'styles/index.css'

import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
// import IntroTemplate from 'intro-template'
import { getSettings } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()
  const settings = (await getSettings({ token })) || {
    menuItems: [],
    footer: [],
  }

  return (
    <div className="flex flex-col min-h-screen text-black bg-white">
      {token && <PreviewBanner />}
      <Navbar menuItems={settings.menuItems} />
      <div className="flex-grow px-4 mt-20 md:px-16 lg:px-32">{children}</div>
      <Footer footer={settings.footer} />
      {/* <IntroTemplate /> */}
    </div>
  )
}
