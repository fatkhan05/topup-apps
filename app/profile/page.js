'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfoCard from '../../components/profile/ProfileInfoCard';
import AccountDetailsCard from '../../components/profile/AccountDetailsCard';
import SecuritySettingsCard from '../../components/profile/SecuritySettingsCard';
import PreferencesCard from '../../components/profile/PreferencesCard';
import ActivitySummaryCard from '../../components/profile/ActivitySummaryCard';
import DangerZoneCard from '../../components/profile/DangerZoneCard';
import { fetchProfile } from '../../utils/api';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProfile();
        console.log('Profile data received:', data);
        setProfileData(data);
        
        // If API returns error message, show it but don't throw
        if (data && data.result === false && data.message) {
          console.warn('API returned error:', data.message);
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
        setError(err.message || 'Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600">Loading profile data...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-600 font-medium mb-2">Error loading profile</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show API message if result is false
  const showApiMessage = profileData && profileData.result === false && profileData.message;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader />
        
        {/* API Response Message */}
        {showApiMessage && (
          <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-yellow-800 text-sm">
              <strong>API Message:</strong> {profileData.message}
            </p>
          </div>
        )}

        {/* Debug: Show Raw API Data */}
        {profileData && process.env.NODE_ENV === 'development' && (
          <div className="mb-6 bg-gray-100 border border-gray-300 rounded-xl p-4">
            <details className="cursor-pointer">
              <summary className="text-sm font-medium text-gray-700 mb-2">
                🔍 Debug: Raw API Response (Development Only)
              </summary>
              <pre className="mt-2 text-xs bg-white p-3 rounded border overflow-auto max-h-96">
                {JSON.stringify(profileData, null, 2)}
              </pre>
            </details>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileInfoCard profileData={profileData} />
            <AccountDetailsCard profileData={profileData} />
            <SecuritySettingsCard profileData={profileData} />
            <PreferencesCard profileData={profileData} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <ActivitySummaryCard profileData={profileData} />
            <div className="mt-6">
              <DangerZoneCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

