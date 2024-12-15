import SectionContainer from "../SectionContainer"


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SectionContainer className="min-h-[90vh]">{children}</SectionContainer>
}