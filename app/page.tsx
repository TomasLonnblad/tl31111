import Component from '@/components/aurora-background-demo'
import Component2 from '@/components/navbar-menu-demo'
import Component3 from '@/components/animated-modal-demo'

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Component />
      <Component2 />
      <Component3 />
    </main>
  )
}
