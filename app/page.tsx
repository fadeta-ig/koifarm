import LandingPage from "./(landing)/landing-page";

// Enable ISR with 1-hour revalidation for better performance
// Admin changes will appear within 1 hour, or use on-demand revalidation
export const revalidate = 3600; // Revalidate every hour

export default function Page() {
  return <LandingPage />;
}
