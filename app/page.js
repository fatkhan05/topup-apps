import Navbar from '../components/Navbar';
import BalanceCard from '../components/BalanceCard';
import PromoBanner from '../components/PromoBanner';
import ServicesGrid from '../components/ServicesGrid';
import RecentTransactions from '../components/RecentTransactions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BalanceCard />
        <PromoBanner />
        <ServicesGrid />
        <RecentTransactions />
      </main>
      <Footer />
    </div>
  );
}
