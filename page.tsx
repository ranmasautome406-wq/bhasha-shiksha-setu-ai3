import { StoreProvider } from '@/components/store'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { QuickActions } from '@/components/quick-actions'
import { Scanner } from '@/components/scanner'
import { Simplifier } from '@/components/simplifier'
import { LanguageBridge } from '@/components/language-bridge'
import { VoiceClassroom } from '@/components/voice-classroom'
import { WorksheetGenerator } from '@/components/worksheet-generator'
import { Flashcards } from '@/components/flashcards'
import { AiTutor } from '@/components/ai-tutor'
import { OfflineDemo } from '@/components/offline-demo'
import { Dashboard } from '@/components/dashboard'
import { Pipeline } from '@/components/pipeline'
import { Impact } from '@/components/impact'
import { SihAlignment } from '@/components/sih-alignment'
import { SiteFooter } from '@/components/site-footer'
import { ToastViewport } from '@/components/toast-viewport'
import { DemoOverlay } from '@/components/demo-overlay'

export default function Page() {
  return (
    <StoreProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteNav />
        <main className="flex-1">
          <Hero />
          <QuickActions />
          <Scanner />
          <Simplifier />
          <LanguageBridge />
          <VoiceClassroom />
          <WorksheetGenerator />
          <Flashcards />
          <AiTutor />
          <OfflineDemo />
          <Dashboard />
          <Pipeline />
          <Impact />
          <SihAlignment />
        </main>
        <SiteFooter />
        <ToastViewport />
        <DemoOverlay />
      </div>
    </StoreProvider>
  )
}
