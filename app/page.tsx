import LandingPage from "./(landing)/landing-page";

// Force dynamic rendering to ensure admin changes appear immediately
export const dynamic = 'force-dynamic';

export default function Page() {
  return <LandingPage />;
}
